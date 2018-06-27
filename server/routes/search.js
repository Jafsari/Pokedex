const express = require('express');
const router = express.Router();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();



router.post('/', (req,res) => {
  const pokemon = req.body.pokemon
    P.getPokemonByName(pokemon) 
    .then(function(response) {
      return res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});

module.exports = router;