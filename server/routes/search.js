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
  console.log(req.body)
  P.getBerryByName(req.body.Berries)
  .then(function(response) {
    console.log(response);
    return res.json(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/natures',(req,res) => {
  console.log(req.body)
  const { Nature } = req.body
  P.getNatureByName(Nature)
    .then(function(response) {
      console.log(response);
      return res.json(response)
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
})

router.post('/evolution',(req,res) => {
  P.getEvolutionChainById(1)
    .then(function(response) {
      console.log(response);
      return res.json(response)
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
})

router.post('/games',(req,res) => {
  console.log(req.body)
  const { Game } = req.body
  P.getPokedexByName(Game)
    .then(function(response) {
      console.log(response);
      return res.json(response)
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
})

router.post('/items',(req,res) => {
  console.log(req.body)
  const { Item } = req.body
  P.getItemByName(Item)
  .then(function(response) {
    console.log(response);
    return res.json(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/moves',(req,res) => {
  console.log(req.body)
  const { Moves } = req.body
  P.getMoveByName(Moves)
  .then(function(response) {
    console.log(response);
    return res.json(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/locations',(req,res) => {
  P.getLocationAreaByName("canalave-city-area")
    .then(function(response) {
      console.log(response);
      return res.json(response)
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
})

module.exports = router;