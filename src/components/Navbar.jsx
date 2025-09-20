import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Rooms", link: "/rooms" },
    { name: "Restaurant", link: "/restaurant" },
    { name: "About Us", link: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 sm:px-8 transition-all duration-300
        ${scrolled ? "bg-[#0d4a4e] py-4 text-white" : "bg-transparent py-6 text-white"}`}
    >
    
      <p className="font-semibold text-3xl sm:text-4xl hover:text-amber-300">HILTON</p>

    
      <ul className="hidden md:flex justify-evenly gap-6 items-center">
        {menuItems.map((item) => (
          <li key={item.name} className="group relative flex flex-col items-center">
            <Link to={item.link}>
              <span className="font-bold hover:text-black p-1 hover:bg-yellow-500 px-2 hover:rounded-xl">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

     
      <div className="hidden md:flex">
        <Link to="/room-booking">
          <div className="bg-white text-black font-semibold text-md px-3 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 flex items-center gap-2">
            <FontAwesomeIcon icon={faContactBook} className="w-5 h-5" />
            Contact HILTON
          </div>
        </Link>
      </div>

   
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="w-6 h-6" />
        </button>
      </div>


      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0d4a4e] text-white flex flex-col items-center py-4 md:hidden gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="font-bold hover:text-black p-2 hover:bg-yellow-500 px-4 rounded-lg w-full text-center"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {item.name}
            </Link>
          ))}
          <Link to="/room-booking" className="w-full text-center">
            <div className="bg-white text-black font-semibold px-3 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faContactBook} className="w-5 h-5" />
              Contact HILTON
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

