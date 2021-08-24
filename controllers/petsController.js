const Pets = require('../models').Pets;
const express = require('express');
const router = express.Router();

const pets = require('../models').Pets;

router.get("/", (req, res) => {
    Pet.findAll().then((pets) => {
    res.render("index.ejs", { 
    pets: pets
    });
});
});

router.get('/new', (req, res)=> {
    res.render('new.ejs');
});

router.post('/', (req, res) => {
    Pet.create(req.body).then((newPet)=> {
    });
    res.redirect('/pets/');
});

router.get("/:id", (req, res) => {
    Pet.findByPk(req.params.id).then((pet) => {
    res.render("show.ejs", { 
        pets: pets,
     });
  });
});
  router.get("/:id/edit", function (req, res) {
      Pet.findByPk(req.params.id).then((pets)=> {
          res.render("edit.ejs", { 
              pet: pet, 

        });
    });
  });

router.put('/:id', (req, res) => { 
    Pet.update(req.body, {
        where: {id: req.params.id},
        returning: true,
    })
        .then((pet) => {
             res.redirect('/pets');
        });
    });
   

router.delete('/:id', (req, res) => {
	Pet.destroy({where: {id: req.params.id, } }).then(()=> {
        res.redirect('/pets');
    }); 	 
});






module.exports = router;