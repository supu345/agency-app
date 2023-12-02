"use client";

import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import Link from "next/link";
import Button from "./Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className=" w-full z-[999]  ">
      <div>
        <div className=" flex flex-row justify-between p-1 md:px-32 px-5 bg-transparent ">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link href={"/"}>
              <h1 className=" text-xl font-bold p-3 text-blue-900 ">
                Design{" "}
                <span className="text-orange-500 text-xl font-bold">
                  Agency{" "}
                </span>
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
              href={"/"}
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              href={"/projects"}
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Projects
            </Link>
            <Link
              href={"/service"}
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Service
            </Link>
            <Link
              href={"/team"}
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Team
            </Link>
            <Link
              href={"/testimonials"}
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Testimonials
            </Link>

            <div className=" flex justify-center lg:justify-start">
              <div className=" flex justify-center lg:justify-start ">
                <Link
                  className="inline-block w-full lg:w-auto py-1 px-4  leading-loose font-semibold bg-white hover:bg-gray-50 hover:border-none rounded-lg transition duration-200  border-green-400 border-2"
                  href="#"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className=" flex justify-center lg:justify-start">
              <div className=" flex justify-center lg:justify-start ">
                <Link
                  className="inline-block w-full lg:w-auto py-1 px-4  leading-loose font-semibold  hover:bg-gray-50 rounded-lg transition duration-200  bg-green-400"
                  href="#"
                >
                  Register
                </Link>
              </div>
            </div>
          </nav>
          <div className="flex md:hidden" onClick={handleChange}>
            <div className=" p-2">
              {menu ? (
                <AiOutlineClose size={25} onClick={handleChange} />
              ) : (
                <AiOutlineMenuUnfold size={25} onClick={handleChange} />
              )}
            </div>
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-15 -mt-6   pb-14 gap-8 w-full h-fit transition-transform duration-300 `}
        >
          <Link
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            href={"/"}
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Project
          </Link>
          <Link
            href={"/service"}
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Service
          </Link>
          <Link
            href={"/team"}
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Team
          </Link>
          <Link
            href={"/testimonials"}
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              isActive ? "text-red-700" : "text-green-700"
            }
            onClick={closeMenu}
          >
            Testimonial
          </Link>
          <div className=" flex justify-center lg:justify-start">
            <div className=" flex justify-center lg:justify-start  ">
              <div className=" flex justify-center lg:justify-start ">
                <Button title="Login" onClick={closeMenu} />
              </div>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-start">
            <div className=" flex justify-center lg:justify-start ">
              <Button title="Register" onClick={closeMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
