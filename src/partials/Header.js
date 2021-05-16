import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Store } from '../store/index';
import { useSelector } from 'react-redux';

function Header() {

  const [top, setTop] = useState(true);

  const [cartcount, updateCartCount] = useState(0);

  const cartlength = useSelector(state => state.cartlength)

  let headerSubscription;

  useEffect(() => {
    updateCartCount(cartlength)
  }, [cartlength])

  useEffect(() => {
    headerSubscription = Store.subscribe(async () => {
      let newDat = await Store.getState();
      console.log(newDat);
      updateCartCount(newDat.cartlength)
    });



    return () => {
      headerSubscription();
    }
  }, [])

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-2">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow justify-content-end">

            <div className="d-flex ">
              <span className="mr-3 d-flex align-items-center" ><b>Login</b></span>
              <div className="cartParent text-primary">
                <ShoppingCartIcon fontSize="large" color="inherit" />

                <div className="p-1 textCart bg-primary rounded-circle">
                  <small className="text-white" >{cartcount}</small>
                </div>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
