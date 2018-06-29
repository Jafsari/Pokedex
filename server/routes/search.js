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

router.post('/ability',(req,res) => {
  console.log(req.body)
  const { Effect } = req.body
  P.getAbilityByName(`${Effect}`)
  .then(function(response) {
    return res.json(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/berries',(req,res) => {
  P.getBerryByName('cheri')
  .then(function(response) {
    console.log(response);
    return res.json(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

module.exports = router;