import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from "../components/ShopItem/ShopItem";

describe("ShopItem component", () => {
  const addToCart = vi.fn();
  const item = {
    id: 1,
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

  it("Render ShopItem", () => {
    const { container } = render(
      <ShopItem item={item} addToCart={addToCart} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Increment and decrement buttons update input qty", async () => {
    const user = userEvent.setup();

    render(<ShopItem item={item} addToCart={addToCart} />);
    const incrementBtn = screen.getByRole("button", { name: "+" });
    const decrementBtn = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton");

    expect(Number(input.value)).toEqual(0);

    await user.click(incrementBtn);

    expect(Number(input.value)).toEqual(1);

    await user.click(decrementBtn);

    expect(Number(input.value)).toEqual(0);
  });

  it("Can't decrement under 0", async () => {
    const user = userEvent.setup();

    render(<ShopItem item={item} addToCart={addToCart} />);
    const decrementBtn = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton");

    expect(Number(input.value)).toEqual(0);

    await user.click(decrementBtn);

    expect(Number(input.value)).toEqual(0);
  });

  it("Add to cart function not called if qty = 0", async () => {
    const user = userEvent.setup();

    render(<ShopItem item={item} addToCart={addToCart} />);
    const addToCartBtn = screen.getByRole("button", { name: "Add to cart" });

    expect(addToCart).not.toHaveBeenCalled();

    await user.click(addToCartBtn);

    expect(addToCart).not.toHaveBeenCalled();
  });

  it("Add to cart  called if qty > 0", async () => {
    const user = userEvent.setup();

    render(<ShopItem item={item} addToCart={addToCart} />);
    const addToCartBtn = screen.getByRole("button", { name: "Add to cart" });
    const incrementBtn = screen.getByRole("button", { name: "+" });
    await user.click(incrementBtn);
    await user.click(addToCartBtn);

    expect(addToCart).toHaveBeenCalled();
  });
});
