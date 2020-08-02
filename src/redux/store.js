import { createStore } from 'redux';
import { data } from '../mock-data/Data';
import reducer from './reducers/rootReducer';

export const initialState = data;

export const store = createStore(
  reducer,
  initialState
);