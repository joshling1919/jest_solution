import React from "react";
import FilterForm from "../filter_form";
import { shallow } from "enzyme";

const setup = () => {
  const props = {
    minSeating: 2,
    maxSeating: 5,
    updateFilter: jest.fn()
  };

  const filterFormWrapper = shallow(<FilterForm {...props} />);

  return {
    filterFormWrapper,
    props
  };
};

describe("FilterForm", () => {
  const { filterFormWrapper, props } = setup();
  const filters = filterFormWrapper.find("input");
  const minSeatFilter = filters.first();
  const maxSeatFilter = filters.last();

  test("should render input elements", () => {
    expect(filters.length).toEqual(2);
    expect(minSeatFilter.props().type).toEqual("number");
    expect(maxSeatFilter.props().type).toEqual("number");
  });

  test("minSeating filter defaults to the passed in props of minSeating", () => {
    expect(minSeatFilter.props().value).toEqual(2);
  });

  test("maxSeating filter defaults to the passed in props of minSeating", () => {
    expect(maxSeatFilter.props().value).toEqual(5);
  });

  test("updateFilter gets called onChange", () => {
    minSeatFilter.props().onChange({ currentTarget: 3 });
    expect(props.updateFilter.mock.calls.length).toBe(1);
  });
});
