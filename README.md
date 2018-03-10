# BenchBnB- Frontend Tests

## Today's Goals

* Learn what Jest and Enzyme are
* Do a bunch of examples
* Lay a foundation for more independent testing

---

## Today's expectation

* Stay engaged!
* Be ready!

---

## Why test?

* Prevents fear of refactoring
* Documentation
* Catches potential bugs
* TDD

---

## Jest

* Jest
  * Facebook's JS testing framework
  * Great for React
  * Simple mocking of components, libraries, etc.

---

## Agenda

* Set up
* Practice
* Reducers
* Action Creators
* Async Action Creators
* React Component Testing

---

## Setup

* `npm install --save-dev jest`
* `npm install --save-dev redux-mock-store`
* Edit `package.json` to run jest when you run `npm test`
* Add `.babelrc` file

---

## .babelrc file

```js
{
  "presets": [ "es2015", "react"]
}
```

---

## Jest Test Naming Conventions

* Put in a folder `__tests__`
* Name it `#{file-being-tested}-test.js`

---

## Practice

* Set up a `__tests__` folder in `practice`
* Add a `practice-test.js`

---

## Code Demo

* Let's test the first practice function

---

## Partner A teaches Partner B

* Teach your partner what we just did
* 30 seconds

---

## Group Coding

* Let's test the second practice function

---

## Partner B teaches Partner A

* Teach your partner what we just did
* 30 seconds

---

## Individual Coding

* Test the last practice function on your own

---

## Testing Redux

* Relatively simple
* Pure functions

---

## Reducers Code Demo

* Let's write some reducer tests!

---

## Partner B teaches Partner A

* Explain the code demo to your partner
* 30 seconds

---

## Group Coding

* Let's set up another test together

---

## Partner A teaches Partner B

* Explain what we just did to your partner
* 45 seconds

---

## Individual Coding

* Write tests for `RECEIVE_BENCH`
* 4 minutes

---

## `RECEIVE_BENCH` test solution

```js
test("should handle RECEIVE_BENCH", () => {
  let action = {
    type: BenchActions.RECEIVE_BENCH,
    bench: newBench
  };

  expect(BenchesReducer(testBenches, action)).toEqual(
    Object.assign({}, testBenches, { 3: newBench })
  );
});
```

---

## Action Creators

* Still pretty straight forward
* Only gets messy when asynchronous activity is involved

---

## Group Coding

* Let's write test for `receiveBenches` together

---

## Partner B teach partner A

* Explain how to write a test for simple action creator

---

## Individual Coding

* Write test for `receiveBench`
* 2 minutes

---

## `receiveBench` solution

```js
test("receiveBench should create an action to receive one bench", () => {
  const expectedAction = {
    type: actions.RECEIVE_BENCH,
    bench: newBench
  };

  expect(actions.receiveBench(newBench)).toEqual(expectedAction);
});
```

---

## 10 minute break

---

## Async Action Creator Code Demo

* Let's write a test for `fetchBenches`

---

# With your partner

* Write tests for `fetchBench`

---

## `fetchBench` solution

```js
test("fetchBench creates RECEIVE_BENCH after fetching new bench", () => {
  const store = mockStore({ benches: {} });
  const expectedActions = [{ type: actions.RECEIVE_BENCH, bench: newBench }];

  ApiUtil.fetchBench = jest.fn(() => {
    return Promise.resolve(newBench);
  });

  return store.dispatch(actions.fetchBench()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
```

---

## Component Testing

* Enzyme- Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
* jQuery like API on components
* Test what's being rendered
* Test that props being passed in are used correctly
* Test events that happen on the component

---

## Component Testing Set-up

* `npm install --save-dev enzyme`
* `npm install --save-dev enzyme-adapter-react-15 react-test-renderer`
* add the `setUpEnzymeAdapter.js` file and reference it in `package.json`

---

## Enzyme docs

* http://airbnb.io/enzyme/docs/api/shallow.html

---

## Component testing demo

---

## Where To Go From Here

* Add tests to your FSP
* Add tests to JS project
* Add Jest to your resume
* Add tests whenever possible on coding challenges!

---

## Additional Resources

* https://github.com/appacademy/a06-prep/tree/master/solution/frontend/__tests__
* https://redux.js.org/docs/recipes/WritingTests.html

---
