// const { profile } = require("console");
const express = require("express");
const router = express.Router();

const petParents = require("../models/petParents");


//Home Page
router.get("/", (req, res) => {
    res.render("petParents/index.ejs", { 
    petParents: petParents
    });
});
router.get("/login", (req, res) => {
    res.render("petParents/login.ejs");
  });
  
  // POST LOGIN
  router.post("/login", (req, res) => {
    console.log(req.body);
    let index = petParents.findIndex(
      (petParents) =>
        petParents.userID === req.body.userID && petParents.password === req.body.password
    );
  
    res.redirect(`/petParents/profiles/${index}`);
  });
//Registration
router.get('/register', (req, res) => {
    res.render('petParents/register.ejs');

    });

    router.post("/", (req, res) => {
        console.log(req.body);
        petParents.push(req.body);
        res.redirect(`/petParents/profiles/${petParents.length - 1}`);
      });
      
      router.get("/profiles/:index", (req, res) => {
        res.render("petParents/profiles.ejs", {
          petParents: petParents[req.params.index],
          index: req.params.index,
        });
      });

    //   router.put("/profiles/:index", (req, res) => {
    //       petParents[req.params.index] = req.body;
    //       res.redirect(`petParents/profiles/${req.params.index}`);

    //   });

      router.put("/profiles/:index", (req, res) => {
        petParents[req.params.index] = req.body;
        res.redirect(`/petParents/profiles/${req.params.index}`);
      });


      router.delete("/:index", (req, res) => {
        petParents.splice(req.params.index, 1); 
        res.redirect("/petParents"); 
      });









module.exports = router;
