import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {findById} from './lib/gridUtils';

const initialState = {
  gridPage:{
    data:{
      header:[],
      body:[],
    }
  }
};

const gridActionTypes = {
  INIT: 'INIT',
  RESET: 'RESET',
  UPDATECELL:'UPDATECELL',
};

// Reducers
const gridReducer = (state = initialState, action) => { // state include the current state value.
  switch (action.type) {
    case gridActionTypes.INIT:
      return {...state, gridPage:{...state.gridPage,data:action.data}}
    case gridActionTypes.RESET:
      return {...state, gridPage:initialState.gridPage}
    default: return state
  }
}

// Combine Reducers
const reducers = combineReducers({
  gridPage:gridReducer,
});

//Actions
export const initGrid = (props) => dispatch => {
  return dispatch({ type: gridActionTypes.INIT, data:props.data })
}

export const resetGrid = (props) => dispatch => {
  return dispatch({ type: gridActionTypes.RESET })
}

export const updateCell = (props) => dispatch =>{
  console.log()
  // return dispatch({type:gridActionTypes.UPDATECELL,})
}

export const initializeStore = (initialState = initialState) => {
  return createStore(reducers, initialState,composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
