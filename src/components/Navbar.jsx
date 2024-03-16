import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../Style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

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
        <span className='sm:block hidden'> | Ge</span>
      </p>
    </Link>
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.maps((Link) => (
        <li>
          <a href={`#${nav.id}`}></a>
        </li>
      ))}
    </ul>
      </div>
    </nav>
  );
};

export default Navbar;
