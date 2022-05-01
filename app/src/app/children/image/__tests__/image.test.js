import React from "react";
import { Image } from "../index";
import { render, screen} from '@testing-library/dom';
import data from '../../data.json';


describe("Image", () => {
  it("should render Image correctly passing data", () => {
    render(<Image data={data} />);

    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
});
