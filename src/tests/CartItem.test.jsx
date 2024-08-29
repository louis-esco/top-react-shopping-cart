import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/CartItem/CartItem";

describe("CartItem component", () => {
  const addToCart = vi.fn();
  const removeFromCart = vi.fn();
  const item = {
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
  };

  it("Render CartItem", () => {
    const { container } = render(
      <CartItem
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("Increment and decrement buttons call addToCart and removeFromCart", async () => {
    const user = userEvent.setup();

    render(
      <CartItem
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: "+" });
    const decrementBtn = screen.getByRole("button", { name: "-" });

    await user.click(incrementBtn);

    expect(addToCart).toHaveBeenCalled();

    await user.click(decrementBtn);

    expect(removeFromCart).toHaveBeenCalled();
  });
});
