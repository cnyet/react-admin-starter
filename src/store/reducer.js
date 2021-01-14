import { combineReducers } from 'redux-immutable';
import { reducer as commonReducer } from '@/components/store';
import { reducer as todoReducer } from '@/views/todo/store';

export default combineReducers({
  common: commonReducer,
  todo: todoReducer
});