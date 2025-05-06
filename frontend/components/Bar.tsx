import React from 'react'
import { Link } from 'wouter';


const Bar = () => {
  return (
    <>
      <Link href="lugar1">
        <li
          className="hover:text-pink-400 transition border-br-2 
                                           border-white hover:border-pink-400 cursor-pointer"
        >
          lugar1
        </li>
      </Link>
      <div className="group">
        <button
          className="hover:text-pink-400 transition border-br-2 
                                          border-white hover:border-pink-400 cursor-pointer"
        ></button>
        <div className="hidden group-hover:flex flex-col absolute left-0 p-0 w-full bg-white z-20 text-black duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5"></div>
          <div className="flex flex-col">
            <h3 className="mb-4 text-2x1 text-pink400">tienda</h3>
            <a href="remera" className="hover:underline hover:text-pink-400">
              remeras
            </a>
            <a href="remera" className="hover:underline hover:text-pink-400">
              pantalones
            </a>
            <a href="remera" className="hover:underline hover:text-pink-400">
              camperas
            </a>
            <h3 className="mb-4 text-2x1 text-pink400">tienda</h3>
            <a href="remera" className="hover:underline hover:text-pink-400">
              remeras
            </a>
            <a href="remera" className="hover:underline hover:text-pink-400">
              pantalones
            </a>
            <a href="remera" className="hover:underline hover:text-pink-400">
              camperas
            </a>
            <h3 className="mb-4 text-2x1 text-pink400">tienda</h3>
            <a href="remera" className="hover:underline hover:text-pink-400">
              remeras
            </a>
            <a href="remera" className="hover:underline hover:text-pink-400">
              pantalones
            </a>
            <a href="remera" className="hover:underline hover:text-pink-400">
              camperas
            </a>
          </div>
        </div>
      </div>
      <Link href="lugar2">
        <li
          className="hover:text-pink-400 transition border-br-2 
                                           border-white hover:border-pink-400 cursor-pointer"
        >
          lugar2
        </li>
      </Link>
      <Link href="lugar3">
        <li
          className="hover:text-pink-400 transition border-br-2 
                                           border-white hover:border-pink-400 cursor-pointer"
        >
          lugar3
        </li>
      </Link>
    </>
  );
}

export default Bar