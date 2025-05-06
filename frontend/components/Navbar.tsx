// import Barra from "./Barra";
// import Bar from './Bar';

import { useState } from "react";
import { Link } from "wouter";
import { Menu, MenuIcon, TimerIcon } from "lucide-react";



const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const content = <>
      <div className=" lg:hidden z-50 block absolute top-6 w-full left-0 right-0 bg-slate-400 backdrop-blur-lg bg-opacity-30 transition">
        {/* <ul className="flex gap-8 mr-16 text-[18px] items-center "> */}
        <ul className="text-center text-xl p-20">
          {/* <li className="items-center hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
            <Link href="lugar1">lugar1</Link>
          </li> */}
          <li className="my-4 py-4 border-b border-pink-200 text-pink hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">
            <Link href="lugar1">lugar1</Link>
          </li>

          <li className="group my-4 py-4 border-b border-pink-200 text-pink hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">
            <Link href="lugar2">lugar2</Link>
            <button className="my-4 py-4 border-b border-pink-200 text-pink hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded"></button>
            <div className="hidden group-hover:flex flex-col absolute left-0 top-12 p-10 w-full bg-white z-20 text-black duration-300">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="flex flex-col">
                  <h3 className="mb-4 text-2x1 text-pink-400">INVIERNO</h3>
                  <Link
                    href="remeras"
                    className="hover:underline hover:text-pink-400"
                  >
                    camperas
                  </Link>
                  <Link
                    href="pantalones"
                    className="hover:underline hover:text-pink-400"
                  >
                    saquitos
                  </Link>
                  <Link
                    href="camperas"
                    className="hover:underline hover:text-pink-400"
                  >
                    gorritos
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h4 className="mb-4 text-2x1 text-pink-400">VERANO</h4>
                  <Link
                    href="remeras"
                    className="hover:underline hover:text-pink-400"
                  >
                    remeras
                  </Link>
                  <Link
                    href="pantalones"
                    className="hover:underline hover:text-pink-400"
                  >
                    pantalones
                  </Link>
                  <Link
                    href="camperas"
                    className="hover:underline hover:text-pink-400"
                  >
                    monitos
                  </Link>
                  <Link
                    href="camisas"
                    className="hover:underline hover:text-pink-400"
                  >
                    mallas
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>



  return (
    <nav className="z-50 h-full w-full">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 ">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-bold text-pink-500">ropita</h2>
        </div>
        {/* <div className="lg:flex md-flex flex-l justify-center items font-normal hidden"> */}
        <div className="lg:flex md:flex flex-1 justify-center items-center font-normal hidden">
          <ul className="flex gap-8 mr-16 text-[18px] items-center ">
            <li className="items-center hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
              <Link href="lugar1">lugar1</Link>
            </li>

            <li className="group hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
              <Link href="lugar2">lugar2</Link>
              <div className="hidden group-hover:flex">

              <button className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer"></button>
              <div className="hidden group-hover:flex flex-col absolute left-0 top-14 p-10 w-full bg-white z-20 text-black duration-300">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  <div className="flex flex-col">
                    <h3 className="mb-4 text-2xl text-pink-400">INVIERNO</h3>
                    <Link
                      href="remeras"
                      className="hover:underline hover:text-pink-400"
                    >
                      camperas
                    </Link>
                    <Link
                      href="pantalones"
                      className="hover:underline hover:text-pink-400"
                    >
                      saquitos
                    </Link>
                    <Link
                      href="camperas"
                      className="hover:underline hover:text-pink-400"
                    >
                      gorritos
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="mb-4 text-2x1 text-pink-400">VERANO</h4>
                    <Link
                      href="remeras"
                      className="hover:underline hover:text-pink-400"
                    >
                      remeras
                    </Link>
                    <Link
                      href="pantalones"
                      className="hover:underline hover:text-pink-400"
                    >
                      pantalones
                    </Link>
                    <Link
                      href="camperas"
                      className="hover:underline hover:text-pink-400"
                    >
                      monitos
                    </Link>
                    <Link
                      href="camisas"
                      className="hover:underline hover:text-pink-400"
                      >
                      mallas
                    </Link>
                  </div>
                      </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition-none "
          onClick={handleClick}
        >
          {click ? (
            <MenuIcon className="text-black" />
          ) : (
            <MenuIcon className="text-black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
