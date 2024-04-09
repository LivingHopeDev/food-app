import React from "react";
import { Link } from "react-router-dom";

const nav = [
  {
    id: 1,
    name: "Restaurants",
    link: "#",
  },
  {
    id: 2,
    name: "Recipes",
    link: "#",
  },
  {
    id: 3,
    name: "About",
    link: "",
  },
  {
    id: 4,
    name: "Page",
    link: "",
  },
];

function Header() {
  return (
    <header className="flex justify-between items-center md:px-20 px-5 py-10">
      <div>
        <img src="/assets/image/pizza.png" alt="logo" />
      </div>

      <div>
        <ul className="flex justify-between items-center space-x-5">
          {nav.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                <p className="text-sm font-medium">{item?.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-3 items-center">
        <Link to="/login">
          <p className="text-sm font-semibold">Login</p>
        </Link>
        <button className="bg-primary px-2 py-1 text-xs rounded-full text-white border-none">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
