// import Layout from "../components/Layout";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import imagen from "../assets/presentacion.png";
// import Tienda from "./Tienda";

// export default function Landing() {
//   const [clicked, setClicked] = useState(false);

//   return (
//     // <Layout>
//     <div className="fixed h-full w-full flex items-center justify-center bg-black overflow-hidden relative">
//       <AnimatePresence>
//         {!clicked && (
//           <motion.img
//             src={imagen}
//             alt="imagen de presentacion"
//             initial={{ y: "-100vh", opacity: 1, scale: 1 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{
//               scale: 5,
//               opacity: 0,
//               transition: { duration: 1.2, ease: "easeInOut" },
//             }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             onClick={() => setClicked(true)}
//             className="z-10 cursor-pointer w-75 rounded-xl shadow-xl max-w-full max-h-full"
//           />
//         )}
//       </AnimatePresence>

//       {clicked && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center"
//         >
//           <motion.h1
//             className="text-3xl font-bold"
//             initial={{ y: "50vh", opacity: 0 }} // Aparece desde abajo
//             animate={{
//               y: 0, // Se mueve a la posición original
//               opacity: 1, // Aparece de forma gradual
//             }}
//             transition={{
//               delay: 0.7, // Retraso de medio segundo
//               duration: 1, // Duración de la animación
//               ease: "easeOut", // Efecto suave al final
//             }}
//           >
//             Bienvenido a Bachilitos 👕👗
//             <Tienda />
//           </motion.h1>
//         </motion.div>
//       )}
//     </div>
//     // </Layout>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import imagen from "../assets/presentacion.png";

export default function Landing({ onFinish }: { onFinish: () => void }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      onFinish(); // Solo después de que termine la animación
    }, 1200); // Debe coincidir con la duración del exit
  };

  return (
    <div className="fixed h-screen w-screen flex items-center justify-center bg-black overflow-hidden z-50">
      <AnimatePresence>
        {!clicked && (
          <motion.img
            src={imagen}
            alt="imagen de presentación"
            initial={{ y: "-100vh", opacity: 1, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{
              scale: 10,
              opacity: 0,
              transition: { duration: 1.2, ease: "easeInOut" },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onClick={() => handleClick()}
            className="z-10 cursor-pointer w-75 rounded-xl shadow-xl max-w-full max-h-full"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
