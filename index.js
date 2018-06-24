import { createStore } from 'redux';

const initialstate = {
  counter: 0
}

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return { ...state, counter: state.counter + 1};
    case 'ADD_COUNTER':
      return { ...state, counter: state.counter + action.value};
  }
  return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const incCounter = {
  type: 'INC_COUNTER'
};
const addCounter = {
  type: 'ADD_COUNTER', 
  value: 10
};

store.dispatch(incCounter);

console.log(store.getState());

store.dispatch(addCounter);

console.log(store.getState());