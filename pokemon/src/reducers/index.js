import { combineReducers } from 'redux';
import search from './searchReducer';
import power from './abilityReducer';
import berries from './berriesReducer';
export default combineReducers({
search,
power,
berries
});