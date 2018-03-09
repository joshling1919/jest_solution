import { sum, screamify, quietfy } from "../practice";

describe("practice functions", () => {
  test("sum should add 2 numbers together", () => {
    expect(sum(2, 5)).toEqual(7);
  });

  test("screamify should uppercase the entire string", () => {
    expect(screamify("What up")).toEqual("WHAT UP");
  });

  test("quietfy should lowercase the entire string", () => {
    expect(quietfy("I AM QUIET")).toEqual("i am quiet");
  });
});
