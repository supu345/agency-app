import React from "react";
import { FiGithub } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32  items-start ">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">CafePulse</h1>
          <p className=" text-sm">
            Welcome to our coffee haven! Explore our aromatic brews, savor
            artisanal flavors, and discover the perfect roast to elevate your
            daily ritual.
          </p>
          <div className="flex flex-row justify-start gap-2">
            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400 ">
              <BiLogoFacebook />
            </div>
            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400 ">
              <AiOutlineTwitter />
            </div>

            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400">
              <FiGithub />
            </div>
            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400 ">
              <BsInstagram />
            </div>
          </div>
          <p>Copyright design agency 2023</p>
        </div>

        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href={"/projects"}
            >
              Projects
            </Link>
            <Link
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href={"/service"}
            >
              Service
            </Link>
            <Link
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href={"/team"}
            >
              Team
            </Link>
            <Link
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href={"/testimonials"}
            >
              Testimonials
            </Link>
          </nav>
        </div>

        <div className="justify-start items-start">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 ">Address</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Designcy Agency Head Office
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Airport Road
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              United Arab Emirate
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
