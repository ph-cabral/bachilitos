// components/Sidebar.tsx
import { Link } from "wouter";

export function Sidebar() {
  return (
    <aside className="w-48 h-screen bg-rosa-crema text-gray-800 shadow-md flex flex-col items-start p-6 gap-4">
      <Link href="/" className="hover:underline">
        Inicio
      </Link>
      <Link href="/tienda" className="hover:underline">
        Tienda
      </Link>
      <Link href="/sobre" className="hover:underline">
        Sobre
      </Link>
    </aside>
  );
}
