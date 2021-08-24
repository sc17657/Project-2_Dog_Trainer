const Pets = require('../models').Pets;
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    Pets.findAll().then((pets) => {
    res.render("index.ejs", { 
    pets: pets
    });
});
});

router.get('/new', (req, res)=> {
    res.render('new.ejs');
});

router.post('/', (req, res) => {
    Pets.create(req.body).then((newPet)=> {
    });
    res.redirect('/pets/');
});

router.get("/:id", (req, res) => {
    Pets.findByPk(req.params.id).then((pets) => {
    res.render("show.ejs", { 
        pets: pets,
     });
  });
});
  router.get("/:id/edit", function (req, res) {
      Pets.findByPk(req.params.id).then((pets)=> {
          res.render("edit.ejs", { 
              Pets: pets, 

        });
    });
  });

router.put('/:id', (req, res) => { 
    Pets.update(req.body, {
        where: {id: req.params.id},
        returning: true,
    })
        .then((pets) => {
             res.redirect('/pets');
        });
    });
   

router.delete('/:id', (req, res) => {
	Pets.destroy({where: {id: req.params.id, } }).then(()=> {
        res.redirect('/pets');
    }); 	 
});






module.exports = router;