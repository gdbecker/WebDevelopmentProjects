const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Strategy } = require("passport-local");
const GoogleStrategy = require("passport-google-oauth2");
const session = require("express-session");
const env = require("dotenv");

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

// SQLite database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const { error } = require("console");

// SQLite database setup
const dbPromise = sqlite.open({
  filename: "users.db",
  driver: sqlite3.Database,
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/secrets", async (req, res) => {
  if (req.isAuthenticated()) {

    //TODO: Update this to pull in the user secret to render in secrets.ejs
    try {
      const db = await dbPromise;
      const results = await db.all('SELECT secret FROM users WHERE email = ?', [req.user.email]);
      const secret = results[0].secret;

      if (secret) {
        res.render("secrets.ejs", { secret: secret });
      } else {
        res.render("secrets.ejs", { secret: 'Jack Bauer is my hero' });
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    res.redirect("/login");
  }
});

//TODO: Add a get route for the submit button
//Think about how the logic should work with authentication.
app.get("/submit", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("submit.ejs");
  } else {
    res.redirect("/login");
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
);

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
);

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const db = await dbPromise;
    const checkResult = await db.all("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (checkResult.length > 0) {
      req.redirect("/login");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await db.run(
            "INSERT INTO users (email, password) VALUES (?, ?) RETURNING *",
            [email, hash],
          );
          const user = result[0];
          req.login(user, (err) => {
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//TODO: Create the post route for submit.
//Handle the submitted data and add it to the database
app.post("/submit", async (req, res) => {
  const secret = req.body.secret;

  try {
    const db = await dbPromise;
    await db.run("UPDATE users SET secret = ? WHERE email = ?", [
      secret,
      req.user.email,
    ]);
    res.redirect('/secrets');
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    try {
      const db = await dbPromise;
      const result = await db.all("SELECT * FROM users WHERE email = ?", [
        username,
      ]);
      if (result.length > 0) {
        const user = result[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              return cb(null, user);
            } else {
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  }),
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://14f10a4c-88c5-4ed5-931f-9bdb03dd7944-00-gw6sl8bbgpjq.worf.replit.dev/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log(profile);
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          profile.email,
        ]);
        if (result.length === 0) {
          const db = await dbPromise;
          const newUser = await db.run(
            "INSERT INTO users (email, password) VALUES (?, ?)",
            [profile.email, "google"],
          );
          return cb(null, newUser[0]);
        } else {
          return cb(null, result[0]);
        }
      } catch (err) {
        return cb(err);
      }
    },
  ),
);
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
