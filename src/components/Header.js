import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import CustomLink from './CustomLink';
import { BiChevronRight } from 'react-icons/bi';
import { useWidthContext } from '../contexts/WidthContext';

function Header() {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const location = useLocation();

  const { width } = useWidthContext();

  function toggleMenu() {
    setIsMenuOpen((curr) => !curr);
  }

  const memoizedPathname = useMemo(() => {
    console.log(location.pathname);
    switch (location.pathname) {
      case '/flow-with-megmo':
        return 'Flow with Megmo';
      case '/wishlist':
        return 'Wishlist';
      case '/playlist-palette':
        return 'Playlist Palette';
      default:
        return '';
    }
  }, [location]);

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
          <div className="relative">
            <button
              ref={ref}
              to="null"
              onClick={toggleMenu}
              className="text-black uppercase font-bold">
              Case Studies
            </button>
            {width > 500 ? (
              <div className="text-black h-full flex items-center absolute left-full top-0.5 -translate-y-0.5 ml-2">
                <BiChevronRight
                  style={memoizedPathname !== '' ? { color: 'black' } : { color: 'white' }}
                />
                <h3 className="text-black ml-2 font-normal text-xs w-max underline">
                  {memoizedPathname}
                </h3>
              </div>
            ) : null}
          </div>
          {isMenuOpen ? (
            <div className="absolute bg-white border-black border">
              <CustomLink className="p-1 hover:bg-gray-300 no-underline" to="/flow-with-megmo">
                Flow with Megmo
              </CustomLink>
              <CustomLink className="p-1 hover:bg-gray-300" to="/wishlist">
                Wishlist
              </CustomLink>
              <CustomLink className="p-1 hover:bg-gray-300" to="/playlist-palette">
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
