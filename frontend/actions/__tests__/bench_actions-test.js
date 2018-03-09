import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../bench_actions';
import * as ApiUtil from '../../util/bench_api_util';

import { testBenches } from '../../testUtil/bench_helper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// describe('actions', () => {
//   test('receiveBenches should create an action to receive benches', () => {
//     // refer to https://redux.js.org/docs/recipes/WritingTests.html 
//   })
// });

// describe('async actions', () => {

  // test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {
  //   // REFER TO REDUX TESTS DOCS
  //   // Set up expectedActions:
  //   // Your code here

  //   ApiUtil.fetchBenches = jest.fn(() => {
  //     return Promise.resolve(testBenches);
  //   });

  //   const store = mockStore({ benches: {} });

  //   return store.dispatch(actions.fetchBenches()).then(() => {
  //     // Your code here
  //   });
  // });
// });


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });