import {createStore, combineReducers} from 'redux';
import { counterReducer } from './counterReducer';

export const store=createStore(combineReducers({
    counter:counterReducer
}))