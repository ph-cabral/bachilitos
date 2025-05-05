import { useEffect, useState } from "react";
import  Bar  from "./Bar";
// import { Sidebar } from './Sidebar';
import  Navbar  from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuType, setMenuType] = useState<"sidebar" | "navbar">("sidebar");

  useEffect(() => {
    const saved = localStorage.getItem("menuType");
    if (saved === "sidebar" || saved === "navbar") setMenuType(saved as any);
  }, []);

  useEffect(() => {
    localStorage.setItem("menuType", menuType);
  }, [menuType]);

  return (
    <div className="v-full w-full">
      <div className="fixed">
        {/* <button                                                             
          onClick={() =>
            setMenuType((prev) => (prev === "navbar" ? "sidebar" : "navbar"))
          }
          className="relative transition mt-8"
          >
          Cambiar menú
        </button> */}
      </div>

      {/* <Bar menuType={menuType} /> */}

      <main
        className={`transition-all duration-500 p-4 ${
          menuType === "sidebar" ? "pl-52 pt-12" : "pt-28"
        }`}
        >
        <Navbar/>
          {/* <Sidebar/> */}
      {children}
      </main>
    </div>
  );
}
