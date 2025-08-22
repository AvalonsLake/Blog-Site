const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//HomePage
router.get("/", async (req, res) => {
  const locals = {
    title: "NodeJS Blog",
    description: "A blog template application that will be for your own use",
  };

  try {
    const data = await Post.find().sort({ title: "desc" });
    res.render("index", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

// get post by id
router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;

    let data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "A blog template application that will be for your own use",
    };

    res.render("post", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

// search
router.post("/search", async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description: "A blog template",
    };

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z ]/g, "");

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });

    res.render("search", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
