// Header.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image.png"; // Replace with your logo path

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-gray-dark/60 backdrop-blur-[8px] border-gray-200 px-4 lg:px-6 py-[16px]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-[16px] sm:h-[20px] md:h-[24px]"
              alt="Logo"
            />
          </Link>
          <div className="block sm:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0,0,256,256"
              className="cursor-pointer"
            >
              <g
                fill="#fffffa"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="hidden sm:flex items-center lg:order-2">
            <Link
              to="https://graphikx.framer.ai/"
              className="text-white bg-slateblue/10 hover:bg-navy/20 focus:ring-2 focus:ring-navy/40 rounded-lg text-[16px] leading-[135%] font-bold px-4 lg:px-5 py-2 lg:py-2.5 mr-[24px] focus:outline-none"
            >
              Portfolio
            </Link>
            <Link
              to="/contact-us"
              className="text-white bg-navy hover:bg-navy/90 focus:ring-2 focus:ring-navy/40 rounded-lg text-[16px] leading-[135%] font-bold px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              Let's Connect
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-bold text-[16px] leading-[135%] lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-navy font-bold" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-navy lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-navy font-bold" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-navy lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-us"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-navy font-bold" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-navy lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blogs"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-navy font-bold" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-navy lg:p-0`
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full pt-10 bg-black text-white transform ${
          isSidebarOpen ? "translate-x-full" : "-translate-x-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 font-ubuntu ">
            <span className="text-lg font-bold">Menu</span>
          <div className="mt-[-60px]">
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul className="mt-4 font-ubuntu text-[16px] font-medium">
          <li className="py-2 px-4 ">
            <NavLink
              to="/"
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-navy font-bold" : "text-white"
                }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-navy lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="py-2 px-4">
            <NavLink
              to="projects"
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-navy font-bold" : "text-white"
                }  hover:bg-gray-50 lg:hover:bg-transparent  hover:text-navy lg:p-0`
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="py-2 px-4">
            <NavLink
              to="about-us"
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-navy font-bold" : "text-white"
                }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-navy lg:p-0`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="py-2 px-4">
            <NavLink
              to="blogs"
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-navy font-bold" : "text-white"
                }  hover:bg-gray-50 lg:hover:bg-transparent hover:text-navy lg:p-0`
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
