"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import Summary from "./components/summary";
import CartItem from "./components/cart-item";
import { CartContext } from "./components/cart-context";
import React from "react";

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleRemoveItem = (id: string) => {
    cart.removeItem(id);
  };

  if (!isMounted) {
    return null;
  }


  return (
    <CartContext.Provider value={{ totalPrice, setTotalPrice }}>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                {cart.items.length === 0 && (
                  <p className="text-neutral-500">No items added to cart.</p>
                )}
                <ul>
                  {cart.items.map((item) => (
                    <CartItem
                      key={item.id}
                      data={item}
                      onRemove={() => handleRemoveItem(item.id)}
                    />
                  ))}
                </ul>
              </div>
              <Summary />
            </div>
          </div>
        </Container>
      </div>
    </CartContext.Provider>
  );
};
export default CartPage;
