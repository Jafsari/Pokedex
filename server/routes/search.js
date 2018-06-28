const express = require('express');
const router = express.Router();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();



router.post('/', (req,res) => {
  console.log(req.body.Pokemon)
  const { Pokemon } = req.body
    P.getPokemonByName(`${Pokemon}`) 
    .then(function(response) {
      return res.json(response);
    })
    .catch(function(error) {
      return res.json('There was an ERROR: ', error);
    });
});

module.exports = router;