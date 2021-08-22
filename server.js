const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const pets = require('./models/pets');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.get('/pets', (req, res) => {
    res.render('index.ejs', { 
    pets: pets
    });
})

app.get('/pets/new', (req, res)=> {
    res.render('new.ejs');
});

app.post('/pets', (req, res) => {
    pets.push(req.body);
    res.redirect('/pets/');
});

app.get('/pets/:index', function(req, res)  {
    res.render('show.ejs', { 
    pets: pets[req.params.index]
    });

});

app.delete('/pets/:index', (req, res) => {
	pets.splice(req.params.index, 1); 
	res.redirect('/pets'); 
});

app.get('/pets/:index/edit', (req, res) => {
	res.render('edit.ejs', { 
		    pet: pets[req.params.index], 
			index: req.params.index 
        
    })
})

app.put('/pets/:index', (req, res) => { 
    pets[req.params.index] = req.body; 
    console.log(pets)
    res.redirect('/pets');
})





































app.listen(3000, ()=>{
    console.log("I am listening");
});