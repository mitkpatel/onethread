import React from "react";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80 sm:order-1">
          <p className="font-bold uppercase text-3xl cursor-pointer order-1">
            Onethread
          </p>
        </div>
        <div className="md:flex-none w-96 order-2 sm:order-1 py-4 flex justify-center sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link to="/">Categories</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
