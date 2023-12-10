import Link from "next/link";

import MainNav from "@/components/main-nav";
import MobileMainNav from "./mobile-main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b border-black bg-purple-700">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-sm sm:text-xl text-yellow-100">
              SHAMAN SILVER STORE
            </p>
          </Link>
          <div className="hidden lg:block">
            <MainNav data={categories} />
          </div>
          <div className="lg:hidden flex flex-col">
            <MobileMainNav data={categories} />
          </div>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
