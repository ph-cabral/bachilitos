import { Link } from "wouter";

const Navbar = () => {

 const urls = [
   { type: "link", label: "Inicio", href: "/" },
   { type: "link", label: "Contacto", href: "/contacto" },
   {
     type: "dropdown",
     label: "Tienda",
     items: [
       { label: "Remeras", href: "/tienda/remeras" },
       { label: "Pantalones", href: "/tienda/pantalones" },
       { label: "Camperas", href: "/tienda/camperas" },
     ],
   },
 ];


  return (
    <nav className="z-100 h-full w-full">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
        <div className="flex items-center flex-1">
          <h2 className="text-3x1 front-bold text-pink-500">ropita</h2>
        </div>
        <div>
          <ul className="flex gap-8 mr-16 text-[18px">
            {urls.map((item, index) => {
              if (item.type === "link") {
                return item.href ? (
                  <Link href={item.href} key={index}>
                    <li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
                      {item.label}
                    </li>
                  </Link>
                ) : null;
              }

              if (item.type === "dropdown") {
                return (
                  <div className="group relative" key={index}>
                    <button className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">
                      {item.label}
                    </button>
                    <div className="hidden group-hover:flex flex-col absolute left-0 p-0 w-full bg-white z-20 text-black duration-300">
                      <div className="flex flex-col p-4">
                        <h3 className="mb-4 text-xl text-pink-400 capitalize">
                          {item.label}
                        </h3>
                        {Array.isArray(item.items) &&
                          item.items.map((subItem, i) => (
                            <Link href={subItem.href} key={i}>
                              <a className="hover:underline hover:text-pink-400">
                                {subItem.label}
                              </a>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



//               <Link>
//                 <li className="hover:text-pink-400 transition border-br-2 
//                               border-white hover:border-pink-400 cursor-pointer">
//                   lugar1
//                 </li>
//               </Link>
// <div className="group">
//  <button
//    className="hover:text-pink-400 transition border-br-2 
//                              border-white hover:border-pink-400 cursor-pointer"
//  ></button>
//  <div className="hidden group-hover:flex flex-col absolute left-0 p-0 w-full bg-white z-20 text-black duration-300">
//    <div className="grid grid-cols-2 md:grid-cols-4 gap-5"></div>
//    <div className="flex flex-col">
//    <h3 className="mb-4 text-2x1 text-pink400">tienda</h3>
//    <a href="remera" className="hover:underline hover:text-pink-400">remeras</a>
//    <a href="remera" className="hover:underline hover:text-pink-400">pantalones</a>
//    <a href="remera" className="hover:underline hover:text-pink-400">camperas</a>
//    <h3 className="mb-4 text-2x1 text-pink400">tienda</h3>
//    <a href="remera" className="hover:underline hover:text-pink-400">remeras</a>
//    <a href="remera" className="hover:underline hover:text-pink-400">pantalones</a>
//    <a href="remera" className="hover:underline hover:text-pink-400">camperas</a>
//    <h3 className="mb-4 text-2x1 text-pink400">tienda</h3>
//    <a href="remera" className="hover:underline hover:text-pink-400">remeras</a>
//    <a href="remera" className="hover:underline hover:text-pink-400">pantalones</a>
//    <a href="remera" className="hover:underline hover:text-pink-400">camperas</a>
//    </div>
//  </div>
//</div>; 
//               <Link>
//                 <li className="hover:text-pink-400 transition border-br-2 
//                               border-white hover:border-pink-400 cursor-pointer">
//                   lugar2
//                 </li>
//               </Link>
//               <Link>
//                 <li className="hover:text-pink-400 transition border-br-2 
//                               border-white hover:border-pink-400 cursor-pointer">
//                   lugar3
//                 </li>
//               </Link>
