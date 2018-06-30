import { combineReducers } from 'redux';
import search from './searchReducer';
import power from './abilityReducer';
import berries from './berriesReducer';
import encounters from './encountersReducer';
import evolution from './evolutionReducer';
import games from './gamesReducer';
import item from './itemReducer';
import locations from './locationsReducer';
export default combineReducers({
search,
power,
berries,
encounters,
evolution,
games,
item,
locations
});