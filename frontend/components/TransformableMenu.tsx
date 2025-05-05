import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menuItems = ["Inicio", "Tienda", "Contacto", "Sobre Nosotros"];

export default function TransformableMenu({
  menuType,
}: {
  menuType: "sidebar" | "navbar";
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        rotate: menuType === "sidebar" ? 0 : -90,
        originX: 0,
        originY: 0,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed top-0 left-0 ${
        menuType === "sidebar" ? "h-screen w-48" : "w-screen h-20"
      } bg-blue-600 text-white p-4 flex ${
        menuType === "sidebar" ? "flex-col" : "flex-row"
      } items-center gap-4`}
    >
      {menuItems.map((item, i) => (
        <div key={i} className="cursor-pointer hover:underline">
          {item}
        </div>
      ))}
    </motion.div>
  );
}
