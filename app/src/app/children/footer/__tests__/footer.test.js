import React from "react";
import { Footer } from "../index";
import { render, screen} from '@testing-library/dom';

describe("Footer", () => {
  it("should render Footer correctly", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
