import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showProductSubMenu, setShowProductSubMenu] = useState(false);

  return (
    <nav className="">
      <div className="navbar bg-[#F8FAE5]">
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-lg font-bold text-gray-800 mr-4">
              <i data-feather="home" className="mr-2"></i>
              Logo
            </Link>
          </div>
          <div class="navigation flex flex-row gap-10">
            <Link to="/Home" className="text-gray-800 hover:text-blue-500 mr-4">
              Home
            </Link>
            <div className="relative">
              <button className="text-gray-800 hover:text-blue-500 mr-4" onClick={() => setShowProductSubMenu(!showProductSubMenu)}>
                Product
              </button>
              {showProductSubMenu && (
                <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 rounded border border-gray-200 mt-1">
                  <Link to="/product/category1" className="block text-gray-800 hover:text-blue-500 mb-2">
                    Category 1
                  </Link>
                  <Link to="/product/category2" className="block text-gray-800 hover:text-blue-500">
                    Category 2
                  </Link>
                </div>
              )}
            </div>

            <Link to="/collection" className="text-gray-800 hover:text-blue-500 mr-4">
              Collection
            </Link>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
