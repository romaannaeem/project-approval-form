import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; // redux form automatically gives us this reducer

export default combineReducers({
  form: reduxForm // etc. ^^
});
