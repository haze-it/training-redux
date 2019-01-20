import {combineReducers, createStore} from 'redux';
import {reducer, State} from './states/sampleState';

export type AppState = {
  state: State
}

const store = createStore(
  combineReducers<AppState>({
    state: reducer
  })
)

export default store;