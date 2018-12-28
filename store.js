import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  gridPage:{
    data:{
      header:["sepal_length", "sepal_width", "petal_length", "petal_width","species"],
      body:[["5.1","3.5","1.4","0.2","Iris-setosa"],
                         ["4.9","3","1.4","0.2","Iris-setosa"],
                         ["4.7","3.2","1.3","0.2","Iris-setosa"],
                         ["4.6","3.1","1.5","0.2","Iris-setosa"],
                         ["5.1","3.5","1.4","0.2","Iris-setosa"],
                         ["4.9","3","1.4","0.2","Iris-setosa"],
                         ["4.7","3.2","1.3","0.2","Iris-setosa"],
                         ["4.6","3.1","1.5","0.2","Iris-setosa"],
                         ["5.1","3.5","1.4","0.2","Iris-setosa"],
                         ["4.9","3","1.4","0.2","Iris-setosa"],
                         ["4.7","3.2","1.3","0.2","Iris-setosa"],
                         ["4.6","3.1","1.5","0.2","Iris-setosa"],],
    }
  }
};

const gridActionTypes = {
  INIT: 'INIT',
  RESET: 'RESET',
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

export const initializeStore = (initialState = initialState) => {
  return createStore(reducers, initialState,composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
