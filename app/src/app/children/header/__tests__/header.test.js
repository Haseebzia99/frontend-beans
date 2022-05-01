import React from "react";
import { Header } from "../index";
import { render, screen} from '@testing-library/dom';
import data from '../../data.json';


describe("Header", () => {
  it("should render Header correctly passing data", () => {
    render(<Header data={data} />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
