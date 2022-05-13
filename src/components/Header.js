import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

function Header() {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  function toggleMenu() {
    setIsMenuOpen((curr) => !curr);
  }

  useEffect(() => {
    function closeMenu(e) {
      if (e.target !== ref.current) setIsMenuOpen(false);
    }

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <header className="z-50 flex items-center fixed bg-white w-full py-2 h-12 top-0">
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <div>
          <button
            ref={ref}
            to="null"
            onClick={toggleMenu}
            className="text-black uppercase font-bold">
            Case Studies
          </button>
          {isMenuOpen ? (
            <div className="absolute bg-white border-black border">
              <CustomLink className="p-1" to="/flow-with-megmo">
                Flow with Megmo
              </CustomLink>
              <CustomLink className="p-1" to="/wishlist">
                Wishlist
              </CustomLink>
              <CustomLink className="p-1" to="/playlist-palette">
                Playlist Palette
              </CustomLink>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default Header;
