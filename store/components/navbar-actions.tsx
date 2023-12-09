"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

import LoginPage from "@/components/sign-in/sign-in";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-white px-4 py-2"
      >
        <ShoppingBag size={20} color="purple" />
        <span className="ml-2 text-sm font-medium text-purple-500">
          {cart.items.length}
        </span>
      </Button>
      <Button
        onClick={() => router.push("/sign-in")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <LoginPage />
      </Button>
    </div>
  );
};

export default NavbarActions;
