import React, { useState, useRef, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";
import { BiChevronRight } from "react-icons/bi";
import { useWidthContext } from "../contexts/WidthContext";
import { motion } from "framer-motion";

function Header() {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const location = useLocation();
  const { width } = useWidthContext();

  const dropdownLink = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  function toggleMenu() {
    setIsMenuOpen((curr) => !curr);
  }

  const memoizedPathname = useMemo(() => {
    switch (location.pathname) {
      case "/flow-with-megmo":
        return "Flow with Megmo";
      case "/brainfood":
        return "Brainfood";
      case "/wishlist":
        return "Wishlist";
      case "/playlist-palette":
        return "Playlist Palette";
      default:
        return "";
    }
  }, [location]);

  useEffect(() => {
    function closeMenu(e) {
      if (e.target !== ref.current) setIsMenuOpen(false);
    }
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <header className="z-50 flex justify-between items-center fixed bg-white w-full py-2 h-12 top-0">
      {/* <div className="flex justify-between max-w-5xl px-5 m-auto"> */}
      {/* <h1 className="text-black text-2xl">JQ</h1> */}
      <nav className="flex items-stretch m-auto">
        <CustomLink to="/">Home</CustomLink>
        <div>
          <div className="relative z-10 bg-white flex items-center">
            <button
              ref={ref}
              to="null"
              onClick={toggleMenu}
              className="text-black uppercase font-bold">
              Case Studies
            </button>
            {width > 500 ? (
              <motion.div
                initial={{ rotate: "90deg" }}
                animate={memoizedPathname !== "" ? { rotate: "0deg" } : { rotate: "90deg" }}>
                <BiChevronRight className="m-0 p-0" style={{ color: "black" }} />
              </motion.div>
            ) : null}
            {width > 500 && memoizedPathname !== "" ? (
              <div className="text-black h-full flex items-center absolute left-full top-0.5 -translate-y-0.5 -ml-2">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-black ml-2 font-normal text-xs w-max underline p-0 m-0">
                  {memoizedPathname}
                </motion.h3>
              </div>
            ) : null}
          </div>
          {isMenuOpen ? (
            <div className="absolute bg-white border-black border z-0 rounded-md">
              <CustomLink className="p-1 hover:bg-gray-300 rounded-t-md" to="/flow-with-megmo">
                Flow with Megmo
              </CustomLink>
              <CustomLink className="p-1 hover:bg-gray-300" to="/brainfood">
                Brainfood
              </CustomLink>
              <CustomLink variants={dropdownLink} className="p-1 hover:bg-gray-300" to="/wishlist">
                Wishlist
              </CustomLink>
              <CustomLink className="p-1 hover:bg-gray-300 rounded-b-md" to="/playlist-palette">
                Playlist Palette
              </CustomLink>
            </div>
          ) : null}
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
}

export default Header;
