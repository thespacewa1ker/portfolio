import React from "react";

export const Footer = () => {
  return (
      <footer className="text-gray-600 mt-12 fixed bg-white bottom-0 left-0 w-full">
        <div className="container mx-auto border-t-2">
          <div className="footer-content">
            <p className="text-lg text-slate-500">© 2023 <span className="text-sm">Sanjay</span></p>
          </div>
        </div>
        <style jsx>{`
            .container {
              margin: 0rem auto; /* This will center the container */
              max-width: 1400px; /* Adjust the maximum width as per your requirement */
              max-height: 200vh;
              padding: 1rem 1rem; /* Add some padding on the left and right sides */
              box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
              box-shadow: 0 -3px 3px -3px rgba(0, 0, 0, 0.1); /* Shadow on top */
              border-top: 1px solid #ccc; /* One-line border on top */
            }

            .content {
              background-color: #f0f0f0; /* Add a background color for the container */
              padding: 1rem; /* Add some padding inside the container */
              
            }
          `}</style>
      </footer>
  );
};
