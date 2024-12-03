import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartWishlist } from "../CartWishlist/CartWishlistContext";

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  // Access cart and wishlist from the context
  const { cart, wishlist } = useCartWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkClass = (path) => {
    const homepageClasses = {
      active: "text-purple-800 bg-purple-200 font-bold",
      base: "" 
    };
  
    const otherPageClasses = {
      active: "text-white bg-purple-500 font-bold",
      base: "" 
    };

    const isActive = location.pathname === path;

    return isHomePage
      ? isActive ? homepageClasses.active : homepageClasses.base
      : isActive ? otherPageClasses.active : otherPageClasses.base;
  };
  

  const links = (
    <>
      <li>
        <Link to="/" className={getLinkClass("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/statistics" className={getLinkClass("/statistics")}>
          Statistics
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className={getLinkClass("/dashboard")}>
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar w-full transition-all duration-300 py-6 ${
        isHomePage
          ? isScrolled 
            ? "fixed top-0 text-white bg-purple-500"
            :"fixed top-0 text-white"
             // Apply purple bg and white text on homepage
          : "bg-white text-purple-500" // Different style for other pages
      }`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu font-bold menu-horizontal px-1 space-x-4">
            {links}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          {/* Cart Icon with Badge */}
          <div className="indicator btn btn-circle w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cart.length > 0 && (
              <span className="badge badge-sm indicator-item bg-green-500">
                {cart.length}
              </span>
            )}
          </div>

          {/* Wishlist Icon */}
          <div className="indicator btn btn-circle w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {wishlist.length > 0 && (
              <span className="badge badge-sm indicator-item bg-red-500">
                {wishlist.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
