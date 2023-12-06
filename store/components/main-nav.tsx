"use client";
<<<<<<< HEAD

import Link from "next/link";
=======
import { useState } from 'react';
import Link from "next/link"
>>>>>>> fca515b780b39435540ee844220858260fcbbb1c
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-black',
              route.active ? 'text-black' : 'text-neutral-500'
            )}
          >

            {route.label}

          </Link>

          {isHovered && (
            <div className="dropdown">
              Yash
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MainNav;
