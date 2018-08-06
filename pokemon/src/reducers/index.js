import { combineReducers } from 'redux';
import search from './searchReducer';
import power from './abilityReducer';
import berries from './berriesReducer';
import natures from './naturesReducer';
import evolution from './evolutionReducer';
import games from './gamesReducer';
import item from './itemReducer';
import locations from './locationsReducer';
import moves from './movesReducer';
import stream from './streamReducer.js';
import card from './cardReducer.js';
import authentication from './authenticatedReducer.js'
export default combineReducers({
search,
power,
berries,
natures,
evolution,
games,
item,
card,
locations,
moves,
stream
});