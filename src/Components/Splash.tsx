import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from '../assets/imgs/logotipo.svg';


const Splash = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 3000); // Duração total para o splash screen

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <motion.div id="animation"
      initial={{ x: "-100vw", opacity: 1 }} // O fundo azul começa fora da tela à esquerda
      animate={{ x: 0, opacity: 1 }} // Move o fundo azul para o centro e mantém visível
      exit={{ x: "100vw", opacity: 0 }} // Move o fundo azul para fora da tela à direita e torna-o invisível
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-full bg-ciano flex items-center justify-center z-50"
    >
      <motion.img
        src={logo}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.5 }} // Logo começa invisível e pequena
        animate={{ opacity: 1, scale: 1 }} // Logo se torna visível e cresce para o tamanho normal
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-40 h-40"
      />
    </motion.div>
  );
};

export default Splash;
