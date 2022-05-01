import React from "react";
import { Footer } from "../index";

describe("Footer", () => {
  it("should render Footer component", () => {
    const wrapper = render(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
