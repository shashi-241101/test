"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
interface RootState {
  darkmode: {
    mode: boolean;
  };
}

const Navbar = () => {
  const { mode } = useSelector((state: RootState) => state.darkmode);

  return (
    <div
      className={`p-4 ${
        mode ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Eshkon</div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/">
            <div className="hover:text-gray-300">Homepage</div>
          </Link>
          <Link href="/">
            <div className="hover:text-gray-300">Contact</div>
          </Link>
          <Link href="/chart">
            <div className="hover:text-gray-300">About</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
