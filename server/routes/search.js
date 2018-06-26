const express = require('express');
const router = express.Router();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();



router.get('/', (req,res) => {
    P.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response);
      return res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});

module.exports = router;