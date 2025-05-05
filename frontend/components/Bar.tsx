import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const menuItems = ["", "Tienda", "Sobre"];

export default function Bar({ menuType }: { menuT21ype: "sidebar" | "navbar" }) {
  const isSidebar = menuType === "sidebar";
  const [isAnimating, setIsAnimating] = useState(true);

  // Disparar animación en cada cambio de menuType
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 600); // mismo que duración de transición
    return () => clearTimeout(timeout);
  }, [menuType]);

  return (
    <div
      className={`fixed 
        ${
          isAnimating
            ? "flex"
            : `flex ${isSidebar ? "flex-col" : "flex-row"} gap-4`
        }
        ${isSidebar ? "w-48 h-screen bg-black" : "h-20 w-screen bg-black"}
      `}
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            x: isSidebar ? 40 : index * 130,
            y: isSidebar ? index * 50 : 0,
            rotate: isSidebar ? 0 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={isAnimating ? "absolute" : "static"}
        >
          <Link
            href={item}
            className="block px-6 m-2 py-1 hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            {item === "" ? "Inicio" : item}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
