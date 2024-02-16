## Secrets App - New Version with PostgreSQL

### [Demo: Secrets App](https://secrets-app-v-2-gdbecker.replit.app/)

Followed along with Angela to make a simple app to authenticate users to view a "secrets" page. Uses Passport and express-sessions, Google sign-in capability, and a PostgreSQL database to persist users' info. Hashes all passwords with a salt.

Username: example@email.com
Password: Password123

Note: For deployment I used an SQLite database since Replit's costs for using one of their PostgreSQL databases connected to Neon was too expensive. Check out the specific [Index PostgreSQL.js](./index%20postgresql.js) file for PostgreSQL configuration.

#### Home Page

!["HomePage"](./01-HomePage.png)

#### Login Page

!["LoginPage"](./02-LoginPage.png)

#### Secrets Page Before Submit

!["SecretsPageInitial"](./03-SecretsPageInitial.png)

#### Submit Page

!["SubmitPage"](./04-SubmitPage.png)

#### Secrets Page After Submit

!["SubmitPageNewSecret"](./05-SubmitPageNewSecret.png)
