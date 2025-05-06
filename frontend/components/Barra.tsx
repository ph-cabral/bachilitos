import { Link } from 'wouter';

const Barra = () => {

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
    <div>
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
              <div className="hidden group-hover:flex flex-col absolute left-0 p-0 w-full bg-white z-20 text-red duration-300">
                <div className="flex flex-col p-4">
                  <h3 className="mb-4 text-xl text-pink-400 capitalize">
                    {item.label}
                  </h3>
                  {Array.isArray(item.items) &&
                    item.items.map((subItem, i) => (
                      <Link
                        href={subItem.href}
                        key={i}
                        className="hover:underline hover:text-pink-400"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default Barra