import { combineReducers } from 'redux';

import modal from './modal_reducer';
import post from './posts_reducer'

export default combineReducers({
  modal,
  post
});
