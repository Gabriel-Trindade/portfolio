"use client";
import React from "react";
import Image from "next/image";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

interface HeaderProps {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  darkMode: boolean;
  toggleTheme: () => void;
  menuOpen: boolean;
}

export default function Header({
  toggleMenu,
  darkMode,
  toggleTheme,
  menuOpen,
}: HeaderProps) {
  return (
    <header
      className={`flex items-center justify-between px-4 lg:px-8 py-4 lg:py-2 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex-shrink-0">
        <Image
          src={darkMode ? "/logo-for-dark.png" : "/logo-for-light.png"}
          alt="Logo"
          width={75}
          height={75}
        />
      </div>

      <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <nav className="hidden lg:flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Início
            </a>
          </li>
          <li>
            <ScrollLink
              to="sobre-mim"
              smooth
              duration={500}
              offset={-100}
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Sobre mim
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projetos"
              smooth
              duration={500}
              offset={-100}
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Projetos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contato"
              smooth
              duration={500}
              offset={-100}
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Contato
            </ScrollLink>
          </li>
        </ul>
      </nav>

      <nav
        className={`lg:hidden ${menuOpen ? "mobile-menu open" : "mobile-menu"}`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-2">
          <li>
            <a
              href="#"
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#"
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#"
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#"
              className={
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-black hover:text-gray-300"
              }
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="focus:outline-none">
        <div className="relative flex items-center w-12 h-6 bg-gray-400 rounded-full cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 transform ${
              darkMode ? "translate-x-full bg-green-500" : ""
            }`}
          >
            {darkMode ? (
              <MdDarkMode className="text-blue-500 w-6 h-6 absolute inset-0 m-auto" />
            ) : (
              <FaSun className="text-yellow-500 w-6 h-6 absolute inset-0 m-auto" />
            )}
          </div>
        </div>
      </button>
    </header>
  );
}
