// const { profile } = require("console");
const express = require("express");
const router = express.Router();

const petParents = require("../models').petparents");
const pets = require("../pets");


//Home Page
router.get("/", (req, res) => {
    PetParents.findALL().then((petParents) => {
    res.render("/index.ejs", { 
    petParents: petParents
    });
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
        petParents.create(req.body).then((newPetParents) => {
            res.redirect("/profiles");
        });
      });
      
      router.get("/:id", (req, res) => {
          petParents.findbyPk(req.params.id).then((pets) => {
            res.render("petParents/profiles.ejs", {
            petParents: petParents,
          });
          
    });
});


      router.put("/:id", (req, res) => {
        PetParents.update(req.body, {
            where: {id: req.params.id },
            returning: true,
        }).then((petParents) => {
        res.redirect("/petParents/profiles.ejs");

        });
      });


      router.delete("/:id", (req, res) => {

        PetParents.destroy({ where: {id: req.params.id} }).then(() => {
            res.redirect("/petParents"); 

        });
      });









module.exports = router;
