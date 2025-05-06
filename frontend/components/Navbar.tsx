import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const content = (
    <motion.div
      initial={{ y: "-70vh", opacity: 0.5 }}
      // initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="md:hidden z-50 block absolute top-18 w-full left-0 right-0
                     bg-gradient-to-t from-black/40 to-transparent
                     backdrop-blur-lg"
    >
      <ul className="text-center text-xl p-20 pt-50 space-y-4">
        <li className="py-4 border-b border-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">
          <Link href="lugar1" className="text-pink-200">
            lugar1
          </Link>
        </li>

        <li className="group border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">
          <Link href="lugar2">lugar2</Link>
          <button className="my-2 py-4 border-b border-pink-200 text-pink hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded"></button>
          <div className="hidden group-hover:flex flex-col absolute left-0 top-12 p-10 w-full bg-white z-2 text-black duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="flex flex-col">
                <h3 className="mb-4 text-2x1 text-pink-400">combos</h3>
                <Link
                  href="remeras"
                  className="hover:underline hover:text-pink-400"
                >
                  Combo 1
                </Link>
                <Link
                  href="pantalones"
                  className="hover:underline hover:text-pink-400"
                >
                  Combo 2
                </Link>
                <Link
                  href="camperas"
                  className="hover:underline hover:text-pink-400"
                >
                  Combo 3
                </Link>
              </div>
              <div className="flex flex-col">
                <h4 className="mb-4 text-2x1 text-pink-400">promociones</h4>
                <Link
                  href="remeras"
                  className="hover:underline hover:text-pink-400"
                >
                  2x1
                </Link>
                <Link
                  href="pantalones"
                  className="hover:underline hover:text-pink-400"
                >
                  Juntada
                </Link>
                <Link
                  href="camperas"
                  className="hover:underline hover:text-pink-400"
                >
                  Date el gusto!!
                </Link>
                <Link
                  href="camisas"
                  className="hover:underline hover:text-pink-400"
                >
                  Previa
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li className="py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">
          <Link href="lugar1">lugar3</Link>
        </li>
        <li className="py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">
          <Link href="lugar1">lugar*</Link>
        </li>
        <li className="py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">
          <Link href="lugar1">lugar3</Link>
        </li>
      </ul>
    </motion.div>
  );

  return (
    <nav className="z-50 h-full md:h-30 w-full ">
      <div className="lg:h-10vh flex justify-between lg:py-5 px-8 sm:py-10 py-10  lg:py-10 ">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-bold text-pink-500">Bachilitos</h2>
        </div>
        {/* <div className="lg:flex md-flex flex-l justify-center items font-normal hidden"> */}
        <div className="lg:flex md:flex flex-1 justify-center items-center font-normal hidden">
          <ul className="flex gap-8 mr-16 text-[18px] items-center">
            <li className="items-center hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
              <Link href="lugar1">lugar2</Link>
            </li>

            <li className="group hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
              <Link href="lugar2">lugar2</Link>
              <div className="hidden group-hover:flex">
                <button className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer "></button>
                <div className="hidden group-hover:flex flex-col absolute left-0 lg:top-18 p-10 w-full bg-white z-20 text-black duration-1000">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="flex flex-col">
                      <h3 className="mb-4 font-bold text-2xl text-pink-400 uppercase">
                        dulces
                      </h3>
                      <Link
                        href="remeras"
                        className="hover:underline hover:text-pink-400"
                      >
                        Tutucas
                      </Link>
                      <Link
                        href="pantalones"
                        className="hover:underline hover:text-pink-400"
                      >
                        Tutucas2
                      </Link>
                      <Link
                        href="camperas"
                        className="hover:underline hover:text-pink-400"
                      >
                        Puflitos
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="mb-4 font-bold text-2xl text-pink-400 uppercase">
                        salado
                      </h3>
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
        <AnimatePresence>
        <div>{click && content}</div>
        </AnimatePresence>
        <button
          className="block sm:hidden transition-none "
          onClick={handleClick}
        >
            {click ? <X className="z-90" /> : <Menu className="z-90" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
