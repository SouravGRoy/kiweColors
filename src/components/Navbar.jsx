import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineBars2 } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Services", to: "https://kiwemedia.vercel.app/services" },
    { name: "Our Work", to: "https://kiwemedia.vercel.app/work" },
    { name: "About Us", to: "https://kiwemedia.vercel.app/about" },

    { name: "Contact", to: "https://kiwemedia.vercel.app/contact" },
  ];

  return (
    <motion.div
      className={`bg-[#aba9a925] w-full fixed z-[999] text-black px-6 lg:px-20 py-6 font-['NeueMontreal-Regular'] flex justify-between items-center backdrop-blur-sm ${
        visible ? "" : "hidden"
      }`}
    >
      <div className="logo">
        <Link to="/">
          <h1 className="font-['NeueMontreal-Regular'] font-semibold text-4xl">
            kíwë
          </h1>
        </Link>
      </div>
      <div className="hidden lg:flex links gap-10">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            activeClassName="font-bold"
            className={`text-md capitalize font-light ${
              index === 4 && "ml-32"
            }`}
            onClick={toggleMenu}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div style={{ fontSize: "25px" }}>
              <HiOutlineBars2 />
            </div>
          )}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden absolute top-16 font-extrabold font-['FoundersGrotesk'] text-3xl text-zinc-900 left-0 right-0 bg-[#ffffffdf] tracking-wide flex flex-col items-center gap-6 py-4"
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              activeClassName="font-extrabold"
              className="uppercase "
              onClick={toggleMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
