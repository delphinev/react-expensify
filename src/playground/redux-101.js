import { createStore } from 'redux';

// To access redux, via createStore
// Store contained the state application
// First time it's called, there is no state, so we set a default value

// Action generators - functions that return action objects

const add = ({ a, b }) => {
  return a + b;
}

console.log(add({ a: 1, b: 3}));

// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// const incrementCount = ({ incrementBy = 1 }) => ({
//   type: 'INCREMENT',
//   incrementBy: incrementBy
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
  // if (action.type === 'INCREMENT') {
  //   return {
  //     count: state.count + 1
  //   }
  // } else {
  //   return state;
  // }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


// const store = createStore((state = { count: 0 }) => {
//   return state;
// });
// redux state container

// console.log(store.getState());

// Actions - an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }))
// unsubscribe();

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// });
store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT'
// });

store.dispatch(decrementCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10}));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
store.dispatch(setCount({count: 101}));

// I'd like to reset the count to zero

// console.log(store.getState());



