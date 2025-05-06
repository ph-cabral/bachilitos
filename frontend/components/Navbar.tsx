// import Barra from "./Barra";
// import Bar from './Bar';

import { Link } from "wouter";




const Navbar = () => {

  return (
    <nav className="z-50 h-full w-full">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
        <div className="flex items-center flex-1">
          <h2 className="text-3x1 front-bold text-pink-500">ropita</h2>
        </div>
        <div>
          <ul className="flex gap-8 mr-16 text-[18px]">
  
            <li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
              <Link
                href="lugar1">lugar1</Link>
            </li>

            <li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
              <Link href="lugar2">lugar2</Link>
              <div className="group">
                <button className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer"></button>
                <div className="hidden group-hover:flex flex-col absolute left-0 top-17 p-10 w-full bg-white z-20 text-black duration-300">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="flex flex-col">
                    <h3 className="mb-4 text-2x1 text-pink-400">invierno</h3>
                    <Link href="remeras" className="hover:underline hover:text-pink-400">camperas</Link>
                    <Link href="pantalones" className="hover:underline hover:text-pink-400">saquitos</Link>
                    <Link href="camperas" className="hover:underline hover:text-pink-400">gorritos</Link>
                  </div>
                    <div className="flex flex-col">
                    <h3 className="mb-4 text-2x1 text-pink-400">invierno</h3>
                    <Link href="remeras" className="hover:underline hover:text-pink-400">remeras</Link>
                    <Link href="pantalones" className="hover:underline hover:text-pink-400">pantalones</Link>
                    <Link href="camperas" className="hover:underline hover:text-pink-400">monitos</Link>
                    <Link href="camisas" className="hover:underline hover:text-pink-400">mallas</Link>
                  </div>
                  </div>
                </div>
              </div>
            </li>

  
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
