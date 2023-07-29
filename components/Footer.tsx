import React from "react";

export const Footer = () => {
  return (
    <footer className="text-gray-600 mt-12">
      <div className="footer-wrapper">
        <div className="container mx-auto border-t-2 flex justify-center">
          <div className="footer-content">
            <p className="text-lg text-slate-500">© 2023 <span className="text-sm">Sanjay</span></p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-wrapper {
          width: 100%; /* Occupy full width of the parent element */
          display: flex;
          justify-content: center;
        }

        .container {
          max-width: 1500px; /* Set a maximum width for the container */
          padding: 2rem 2rem; /* Add some padding on the left and right sides */
        }

        .footer-content {
          background-color: #f0f0f0; /* Add a background color for the container */
          padding: 1rem; /* Add some padding inside the container */
        }

        /* Added style to align with content */
        footer {
          margin-left: 6rem;
          margin-right: 6rem; /* This will push the footer to the bottom of the screen */
          border-top: 1px solid #ccc; /* One-line border on top */
        }
      `}</style>
    </footer>
  );
};
