const express = require('express');
const router = express.Router();

const pets = require("../models/pets.js");

router.get("/", (req, res) => {
    res.render("index.ejs", { 
    pets: pets
    });
});

router.get('/new', (req, res)=> {
    res.render('new.ejs');
});

router.post('/', (req, res) => {
    pets.push(req.body);
    res.redirect('/pets/');
});

router.get("/:index", (req, res) => {
    res.render("show.ejs", { 
        pets: pets[req.params.index] }
        );
  });

  router.get("/:index/edit", (req, res) => {
    res.render("edit.ejs", 
      {
        pet: pets[req.params.index], 
        index: req.params.index, 
      }
    );
  });

router.put('/:index', (req, res) => { 
    pets[req.params.index] = req.body; 
    console.log(pets)
    res.redirect('/pets');
});

router.delete('/:index', (req, res) => {
	pets.splice(req.params.index, 1); 
	res.redirect('/pets'); 
});






module.exports = router;