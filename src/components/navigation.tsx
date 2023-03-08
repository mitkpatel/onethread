import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navigation = () => {
  const HeroAvatar = require("../assets/heroavatar.png");
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 py-4">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[3%] flex-wrap w-full">
        <img src={HeroAvatar} alt="heroavatar" width={50} height={15} />

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="text-base text-gray-600 lg:flex lg:justify-between">
            <li>
              <a
                className="lg:px-5 block py-2 hover:text-blue-700 font-semibold"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="lg:px-5 block py-2 hover:text-blue-700 font-semibold"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="lg:px-5 block py-2 hover:text-blue-700 font-semibold"
                href="#"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="lg:px-5 block py-2 hover:text-blue-700 font-semibold"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="px-6 py-2 block bg-blue-700 text-white rounded-xl font-semibold"
                href="#"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
