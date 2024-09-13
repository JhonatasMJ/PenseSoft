import {Rocket } from "lucide-react";
import boost from "../assets/imgs/boost.png";
import arrow from "../assets/imgs/arrow.svg";
import { motion } from "framer-motion";

const Boost = () => {
  return (
    <section className=" bg-ciano" id="boost">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  relative py-6   px-4">
      <motion.div
        className="flex flex-col justify-center "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-md font-semibold text-azul">Venha</span>
        <h2 className=" text-3xl md:text-5xl text-white font-bold mt-2">
        Impulsionar o seu negócio com nossas soluções
        </h2>

        <p className="mt-12 text-lg">
        Entre em contato agora e descubra como podemos transformar sua gestão em sucesso!

        </p>
        <div className="flex gap-8">
          <motion.button
            className="w-full  md:w-max bg-azul text-white font-bold px-6 py-3 rounded-md mt-14 shadow-custom-ciano"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a className="flex items-center justify-around gap-2" href="/">
              IMPULSIONAR MEU NEGOCIO
              <motion.div
                whileHover={{ rotate: 360 }} 
                transition={{ duration: 0.5 }}
              >
               <Rocket size={20}/>
              </motion.div>
            </a>
          </motion.button>
    
        </div>
      </motion.div>
      <motion.div 
        className="hidden  md:flex justify-end absolute right-0 bottom-0 "
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img id="img"
          src={boost}
          alt="Homem segurando notebook"
          className=" hidden md:block  w-full "
        />
        <div className="absolute bottom-36 -left-28  hidden md:flex">
            <img className="w-32 h-32"  src={arrow} alt="Seta decorativa" />
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Boost;
