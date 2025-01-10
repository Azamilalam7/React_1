import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="p-3 bg-whiteSlate flex justify-between items-center text-oliveGreen">
        <a href="#" className="flex gap-2 items-center">
          <img
            className="w-12 h-12"
            src="https://www.todesktop.com/cdn-cgi/image/width=48,height=48,f=auto,fit=cover/_app/immutable/assets/todesktop-logo.bn2Qe8sb.png"
            alt="ToDesktop Logo"
          />
          <span className="text-lg font-medium">ToDesktop</span>
        </a>

        {/* Desktop Links */}
        <div
          className={`lg:flex gap-12 items-center ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#" className="font-medium text-lg hover:text-blue-800">
            Pricing
          </a>
          <a href="#" className="font-medium text-lg hover:text-blue-800">
            Docs
          </a>
          <a href="#" className="font-medium text-lg hover:text-blue-800">
            Changelog
          </a>
          <a href="#" className="font-medium text-lg hover:text-blue-800">
            Blog
          </a>
          <a href="#" className="font-medium text-lg hover:text-blue-800">
            Login
          </a>
        </div>

        {/* Button for desktop */}
        <button className="hidden lg:flex gap-2 border border-black2 px-3 py-1 rounded-md hover:shadow-md hover:shadow-warmGray">
          <img
            src="https://www.todesktop.com/_app/immutable/assets/electron-icon.E8mrXtZM.svg"
            alt="Electron Developer Icon"
          />
          <span>Electron Developer</span>
        </button>

        {/* Hamburger Menu */}
        <button className="lg:hidden" onClick={handleMenu}>
          <span className="text-4xl text-gray-400">&#8801;</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-whiteSlate p-3">
          <div className="flex justify-between items-center">
            <a href="#" className="flex gap-2 items-center">
              <img
                className="w-12 h-12"
                src="https://www.todesktop.com/cdn-cgi/image/width=48,height=48,f=auto,fit=cover/_app/immutable/assets/todesktop-logo.bn2Qe8sb.png"
                alt="ToDesktop Logo"
              />
              <span className="text-lg font-medium">ToDesktop</span>
            </a>
            <button onClick={handleMenu}>
              <span className="text-4xl text-gray-400">&#x2715;</span> {/* Close Icon */}
            </button>
          </div>
          <div className="mt-6">
            <a href="#" className="font-medium text-lg block p-3">
              Pricing
            </a>
            <a href="#" className="font-medium text-lg block p-3">
              Docs
            </a>
            <a href="#" className="font-medium text-lg block p-3">
              Changelog
            </a>
            <a href="#" className="font-medium text-lg block p-3">
              Blog
            </a>
            <a href="#" className="font-medium text-lg block p-3">
              Login
            </a>
          </div>
          <hr />
          <button className="flex gap-2 border border-black2 px-4 py-2 mt-5 rounded-md hover:shadow-md hover:shadow-warmGray">
            <img
              src="https://www.todesktop.com/_app/immutable/assets/electron-icon.E8mrXtZM.svg"
              alt="Electron Developer Icon"
            />
            <span>Electron Developer</span>
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
