import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../components/Cart/Cart";

const addToCart = vi.fn();
const removeFromCart = vi.fn();
const getCartPrice = () => 156;
const getCartLength = () => 5;
const getCart = () => {
  return [
    {
      id: 1,
      qty: 2,
      title: "Nice item",
      price: 64,
      description: "You can do lots with this item",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 2,
      qty: 3,
      title: "Nicer item",
      price: 65,
      description: "You can do lots with this item, and even more",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SYUSI879_.jpg",
      rating: {
        rate: 3.5,
        count: 208,
      },
    },
  ];
};

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: () => ({
    addToCart,
    removeFromCart,
    getCartPrice,
    getCartLength,
    getCart,
  }),
}));

describe("Cart component", () => {
  it("Render Cart", () => {
    const { container } = render(<Cart />);

    expect(container).toMatchSnapshot();
  });

  it("Remove from cart button calls removeFromCart", async () => {
    const user = userEvent.setup();

    render(<Cart />);
    const removeFromCartBtn = screen.getAllByRole("button", {
      name: "✕ Remove from cart",
    })[0];

    await user.click(removeFromCartBtn);

    expect(removeFromCart).toHaveBeenCalled();
  });
});
