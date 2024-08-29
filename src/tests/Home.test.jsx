import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../components/Home/Home";

describe("Home component", () => {
  it("Renders Home", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
