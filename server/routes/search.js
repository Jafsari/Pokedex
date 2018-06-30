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

router.post('/encounters',(req,res) => {
  P.getEncounterMethodByName("walk")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/evolution',(req,res) => {
  P.getEvolutionTriggerByName("level-up")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/games',(req,res) => {
  P.getVersionByName("red")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/items',(req,res) => {
  P.getItemByName("master-ball")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/moves',(req,res) => {
  P.getMoveByName("pound")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/location',(req,res) => {
  P.getLocationAreaByName("canalave-city-area")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

module.exports = router;