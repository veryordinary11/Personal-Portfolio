import React from "react";
import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className=" text-lg md:text-sm sm:text-xs px-32 md:px-24 sm:px-12 border-t-2  border-dark dark:border-light dark:text-light">
      <div className="flex justify-between w-full mt-4">
        <p>{new Date().getFullYear()} &copy; All Rights Reversed</p>
        <p>Build with Vercel ▲</p>
      </div>
    </footer>
  );
};

export default Footer;
