import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between py-4 shadow-md ">
        <Link href={"/"}>
          <div className="text-primary">
            {/* <h1 className='font-normal text-primary font-sans'>EcoQuant</h1> */}
            <span className="font-medium text-3xl text-primary ml-4">Eco Quant</span>
          </div>
        </Link>
        <ul className="flex items-center ml-10">
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
            <Link href={"/faqs"} className="hover:text-p-hover">FAQs</Link>
          </li>
        </ul>
        <ul className="flex items-center">
            
          <a
            href="https://leetcode.com/nsanjaysanju676/"
            className="hover:bg-pink-300 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 mr-6 transition-colors duration-300 ease-in-out">
            <Image src="/leetcode.svg" width={25} height={20} alt="Gmail"  />
          </a>

          <a
            href="https://github.com/thespacewa1ker"
            className="hover:bg-pink-300 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 mr-6 transition-colors duration-300 ease-in-out"
          >
            <Image src="/github.svg" width={25} height={25} alt="Gmail" />
          </a>

          <a
            href="mailto:n.sanjay.imp@gmail.com"
            className="hover:bg-pink-300 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 mr-6 transition-colors duration-300 ease-in-out"
          >
            <Image src="/gmail.svg" width={25} height={25} alt="Gmail" />
          </a>

        </ul>
      </nav>
      <style jsx>{`
        nav {
          box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <style jsx>{`
            .container {
              margin: 0rem auto; /* This will center the container */
              max-width: 1400px; /* Adjust the maximum width as per your requirement */
              max-height: 200vh;
              padding: 1rem 1rem; /* Add some padding on the left and right sides */
            }

            .content {
              background-color: #f0f0f0; /* Add a background color for the container */
              padding: 1rem; /* Add some padding inside the container */
              
            }
          `}</style>
    </div>
  );
};
