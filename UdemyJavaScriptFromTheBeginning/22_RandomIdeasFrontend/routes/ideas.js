const express = require("express");
const router = express.Router();
const Idea = require("../models/idea");

// const ideas = [
//   {
//     id: 1,
//     text: "Positive Newsletter, a newsletter that only shares positive, uplifting news",
//     tag: "Technology",
//     username: "TonyStark",
//     date: "2022-01-02",
//   },
//   {
//     id: 2,
//     text: "Milk cartons that turn a different color the older your milk is getting",
//     tag: "Inventions",
//     username: "SteveRogers",
//     date: "2022-01-02",
//   },
//   {
//     id: 3,
//     text: "ATM location app which lets you know where the closest ATM is and if it is in service",
//     tag: "Software",
//     username: "BruceBanner",
//     date: "2022-01-02",
//   },
// ];

// Get all ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Get a single idea
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Add an idea
router.post("/", async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Update an idea
router.put("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    // match the usernames
    if (idea.username === req.body.username) {
      const updatedIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        { new: true }
      );
      return res.json({ success: true, data: updatedIdea });
    }

    // usernames do not match
    res.status(403).json({ success: false, error: "You are not authorized to edit this idea" });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Delete an idea
router.delete("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    // match the usernames
    if (idea.username === req.body.username) {
      await Idea.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: "Idea deleted" });
    }

    // usernames do not match
    res.status(403).json({ success: false, error: "You are not authorized to delete this idea" });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
