import { vi, describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

describe("Navbar component", () => {
  it("Renders Navbar", () => {
    const getCartLength = vi.fn();

    const { container } = render(
      <MemoryRouter>
        <Navbar getCartLength={getCartLength} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
