import React from "react";
import { Comments } from "../index";
import { render, screen} from '@testing-library/dom';
import data from '../../data.json';


describe("Comments", () => {
  it("should render Comments correctly passing data", () => {
    render(<Comments data={data} />);

    expect(screen.getByTestId("comments")).toBeInTheDocument();
  });
});
