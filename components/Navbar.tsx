import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const isClient = typeof window !== 'undefined';
  const [isMenuOpen, setIsMenuOpen] = useState(isClient ? false : undefined);

  useEffect(() => {
    // Set the initial state on the client side
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between py-4 shadow-md fixed top-0 left-0 right-0 bg-white z-10">
        <Link href={"/"}>
          <div className="text-primary">
            <span className="font-medium text-3xl text-primary ml-4">Eco Quant</span>
          </div>
        </Link>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none ml-4">
            {isMenuOpen ? (
              <svg className="w-6 h-6 fill-current text-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2.46967 3.46967C2.17678 3.76256 2.17678 4.23744 2.46967 4.53033L20.4697 22.5303C20.7626 22.8232 21.2374 22.8232 21.5303 22.5303C21.8232 22.2374 21.8232 21.7626 21.5303 21.4697L3.53033 3.46967C3.23744 3.17678 2.76256 3.17678 2.46967 3.46967Z" />
                <path fillRule="evenodd" d="M3.53033 22.5303C3.82322 22.2374 4.29809 22.2374 4.59098 22.5303L22.5909 4.53033C22.8838 4.23744 22.8838 3.76256 22.5909 3.46967C22.2981 3.17678 21.8232 3.17678 21.5303 3.46967L3.53033 21.4697C3.23744 21.7626 3.23744 22.2374 3.53033 22.5303Z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 fill-current text-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 8h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 4h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
              </svg>
            )}
          </button>
        </div>
        <ul className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className="mr-8 font-normal text-lg text-sky-600">
            <Link href={"/"} className="hover:text-p-hover">Home</Link>
          </li>
          <li className="mr-8 font-normal text-lg text-sky-600">
            <Link href={"/about"} className="hover:text-p-hover">About</Link>
          </li>
          <li className="mr-8 font-normal text-lg text-sky-600">
            <Link href={"/blogs"} className="hover:text-p-hover">Blogs</Link>
          </li>
          <li className="mr-8 font-normal text-lg text-sky-600">
            <Link href={"/education"} className="hover:text-p-hover">Edu</Link>
          </li>
        </ul>
        <ul className="hidden md:flex items-center">
          <a href="https://leetcode.com/nsanjaysanju676/" className="hover:bg-pink-300 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 mr-6 transition-colors duration-300 ease-in-out">
            <Image src="/leetcode.svg" width={25} height={20} alt="Gmail"  />
          </a>
          <a href="https://github.com/thespacewa1ker" className="hover:bg-pink-300 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 mr-6 transition-colors duration-300 ease-in-out"
          >
            <Image src="/github.svg" width={25} height={25} alt="Gmail" />
          </a>
          <a href="mailto:n.sanjay.imp@gmail.com" className="hover:bg-pink-300 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 mr-6 transition-colors duration-300 ease-in-out"
          >
            <Image src="/gmail.svg" width={25} height={25} alt="Gmail" />
          </a>
        </ul>
      </nav>
    </div>
  );
};
