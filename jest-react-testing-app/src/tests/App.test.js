import renderer from "react-test-renderer";
import App from "../App";
import React from "react";
import { fetchData } from "../App";
import axios from "axios"; 

it("changes the class when hovered", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseLeave();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

jest.mock("axios");
jest.useFakeTimers();

test("fetchData resolves correctly", async () => {
  axios.get.mockResolvedValue({ data: "mocked data" });

  const promise = fetchData();
  jest.runAllTimers();

  const result = await promise;
  expect(result.data).toBe("mocked data");
});
