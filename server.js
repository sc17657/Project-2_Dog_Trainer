require("dotenv").config()
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use("/pets", require("./controllers/petsController.js"));
app.use("/petParents", require("./controllers/petParentsController.js"));

app.listen(process.env.PORT, () => { 
    console.log("I am listening");
});