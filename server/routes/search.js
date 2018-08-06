const express = require('express');
const router = express.Router();
const pokemonGif = require('pokemon-gif');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
const pokemon = require('pokemontcgsdk');



router.post('/', (req,res) => {
  console.log(req.body)
  const Pokemon = req.body.Pokemon.replace(/[^0-9a-zA-Z]/g, '')
    P.getPokemonByName(Pokemon) 
    .then(function(response) {
      console.log(response)
      return res.json(response);
    }).catch(function(error) {
      return res.json('There was an ERROR: ', error);
    });
    
});

router.post('/sprite', (req,res) => {
  console.log(req.body)
    pokemonGif('pikachu').then(function(response) {
      console.log(response)
      return res.json(response);
    }).catch(function(error) {
      return res.json('There was an ERROR: ', error);
    });
    
});

router.post('/ability',(req,res) => {
  console.log(req.body)
  const Effect = req.body.Effect.replace(/\s/g, '')
  P.getAbilityByName(Effect)
  .then(function(response) {
    return res.json(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/berries',(req,res) => {
  console.log(req.body)
  P.getBerryByName(req.body.Berries.replace(/[^0-9a-zA-Z]/g, ''))
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
  const Nature  = req.body.Nature.replace(/[^0-9a-zA-Z]/g, '')
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
  console.log(req.body)
  const  Pokemon  = req.body.Pokemon.replace(/[^0-9a-zA-Z]/g, '')
  P.getEvolutionChainById(Pokemon)
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
  const  Game  = req.body.Game.replace(/[^0-9a-zA-Z]/g, '')
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
  const Item  = req.body.Item.replace(/\s/g, '')
  P.getItemByName(Item)
  .then(function(response) {
    console.log(response);
    return res.json(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
})

router.post('/cards',(req,res) => {
  console.log(req.body)
  const Cards = req.body.Cards.replace(/\s/g, '')
pokemon.card.where({ name:Cards})
.then(cards => {
    console.log(cards[0].name) // "M Sceptile-EX"
    return res.json(cards)
})
.catch(function(error){
  console.log('There was an error ', error);
});
})

router.post('/moves',(req,res) => {
  console.log(req.body)
  const Moves  = req.body.Moves.replace(/\s/g, '')
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
  console.log(req.body)
  const  Location  = req.body.Location.replace(/[^0-9a-zA-Z]/g, '')
  P.getLocationAreaByName(Location)
    .then(function(response) {
      console.log(response);
      return res.json(response)
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
})

module.exports = router;