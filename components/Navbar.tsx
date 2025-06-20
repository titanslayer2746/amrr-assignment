"use client";

import Link from "next/link";
import { ModeToggle } from "./modeToggle";

const Navbar = () => {
  return (
    <nav className="pt-8">
      <div className="ml-[20%] mr-[20%] flex justify-between">
        <Link href={"/"} className="hover:text-gray-300">
          Home
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
export default Navbar;
