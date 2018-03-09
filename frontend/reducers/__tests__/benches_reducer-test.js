import BenchesReducer from "../benches_reducer";
import { testBenches, newBench } from "../../testUtil/bench_helper";
import * as BenchActions from "../../actions/bench_actions";

/*
NOTE: Our frontend state shape looks like this:
{
  benches: {
    1: {
        id: 1,
        description: "...",
        lat: 0.0,
        lng: 0.0
      },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    ...
  }
  ...
}
*/

describe("BenchesReducer", () => {
  test("should return the initial state", () => {
    expect(BenchesReducer(undefined, {})).toEqual({});
  });

  test("should handle RECEIVE_BENCHES", () => {
    let action = {
      type: BenchActions.RECEIVE_BENCHES,
      benches: testBenches
    };

    expect(BenchesReducer({}, action)).toEqual(testBenches);
  });

  test("should handle RECEIVE_BENCH", () => {
    let action = {
      type: BenchActions.RECEIVE_BENCH,
      bench: newBench
    };

    expect(BenchesReducer(testBenches, action)).toEqual(
      Object.assign({}, testBenches, { 3: newBench })
    );
  });
});
