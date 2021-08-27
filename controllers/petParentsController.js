
const express = require('express');
const router = express.Router();
const PetParents = require('../models').PetParents;
const Pets = require('../models').Pets;

//Home Page


router.get("/", (req, res) => {
    PetParents.findAll().then((petParents) => {
    res.render("petParents/index.ejs", { 
    petParents: petParents
    });
});
});
router.get("/login", (req, res) => {
    res.render("petParents/login.ejs");
  });
  
  // POST LOGIN
  router.post("/login", (req, res) => {
   PetParents.findOne({ 
       where: {
           userID: req.body.userID,
           password: req.body.password,

       },
   }).then((foundPetParents) => {
       res.redirect(`/petParents/profile/${foundPetParents.id}`);
   });  
  });

  

//Registration                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
router.get('/register', (req, res) => {
    res.render('petParents/register.ejs');
    });

    router.post("/", (req, res) => {
        PetParents.create(req.body).then((newPetParents) => {
            res.redirect(`petParents/profile/${newPetParents.id}`);
        });
    });

    
      

  
router.get("/profile/:id", (req, res) => {
    PetParents.findByPk(req.params.id, {
        include: [
            {
                model: Pets, 
                attributes: ["name", "age"],
            },
        ],
    }).then((petParentsProfile) => {
      res.render("petParents/profiles.ejs", {
        petParents: petParentsProfile,
      });
    });
  });


      router.put('/profile/:id', (req, res) => {
          PetParents.update(req.body, {
              where: {id: req.params.id},
              returning: true, plain: true
            })
            .then((updatedPetParents) => {
                console.log(updatedPetParents);
                res.redirect(`/petParents/${req.params.id}`);
            });
          });


      router.delete("/:id", (req, res) => {

        PetParents.destroy({ where: {id: req.params.id,},
        }).then(() => {
            res.redirect("/petParents"); 

        });
      });









module.exports = router;
