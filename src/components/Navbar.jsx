import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../Style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
    <Link
      to='/'
      className='flex items-center gap-2'
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
      <p className='text-white text-[18px] font-bold cursor-pointer flex '>
        Gabriel &nbsp;
        <span className='sm:block hidden'> | Gfelix</span>
      </p>
    </Link>
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((Link) => (
        <li
        key={Link.id}
        className={`${
          active === Link.title
          ? "text-white"
          : "text-secondary"
        } hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={() => setActive(Link.title)}
        >
          <a href={`#${Link.id}`}>{Link.title}</a>
        </li>
      ))}
    </ul>
    <div className="sm:hidden felx flex-1 justify-end items-center">
    <img
    src={menu}
    alt="menu"
    className="w-[28px] h-[28px] object-contain cursor-pointe"
    onClick={() => setToggle(!toggle)}
    
    />
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
