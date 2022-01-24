
import Link from 'next/link';
import React, { useState } from 'react';
// @ts-ignore
import { useSnipcart } from "use-snipcart"



export default function NavBar(): JSX.Element {
  const [Nav, setNav] = useState(false);
  
  const { cart = {} } = useSnipcart();
  const { subtotal = '0.00' , items  } = cart;
  return (
    
  <header className="border-b border-gray-100  fixed top-0 w-full z-20 bg-white ">
  <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div>
    <a href="/" className="flex flex-shrink-0">
        <span className=" font-bold text-lg ">Sungla</span>
      </a>
    </div>
    <div>
      
    <div className="flex items-center">
      <nav className="items-center hidden pl-8 ml-8 space-x-8 text-sm font-medium border-l border-gray-100 md:flex">
      <Link href="/">
          <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Home</a>
        </Link>
        <Link href="/#products">
          <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Shop</a>
        </Link>
        <Link href="/contact">
          <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Contact</a>
        </Link>
        <Link href="/about">
          <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">About</a>
        </Link>
      </nav>
    </div>

          </div>
    <div className="flex items-center">
      <a href="" className=" snipcart-checkout inline-flex flex-col items-center justify-center w-16 h-16 bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>

        <span className="block mt-1 text-xs font-medium">{items?.count} Cart</span>
      </a>

      <button
        type="button"
        className="inline-flex flex-col items-center justify-center w-16 h-16 bg-gray-100 border-l border-white lg:hidden"
        onClick={()=>setNav(p => p ? false : true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
        {
          Nav && (
            <div className="flex items-center bg-gray-100 h-36 md:hidden  " onClick={()=>setNav(p => p ? false : true)}>
            <nav className="items-center flex pl-8 ml-8 space-x-8 text-sm font-medium border-l border-gray-100  "  >
            <Link href="/">
                <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Home</a>
              </Link>
              <Link href="/#products">
                <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Shop</a>
              </Link>
              <Link href="/contact">
                <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Contact</a>
              </Link>
              <Link href="/about">
                <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">About</a>
              </Link>
            </nav>
          </div>
          )
        }
</header>
  )
}


/* snipcart-checkout */

/*            
 */