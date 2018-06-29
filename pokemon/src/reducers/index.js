import { combineReducers } from 'redux';
import search from './searchReducer'
import power from './abilityReducer'
export default combineReducers({
search,
power
});