import { MonitorCog, Phone } from "lucide-react";
import men from "../assets/imgs/Men.png";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Import the scroll link

const About = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 pt-24 pb-36" id="sobre">
      <motion.div
        className="flex flex-col justify-center "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-md font-semibold text-ciano">Conheça</span>
        <h2 className="text-5xl text-cinza font-bold mt-2">
          Quem somos
        </h2>
        <p className="text-cinza text-lg mt-8">
        Conheça a  <span className="text-ciano font-extrabold">Pense Soft</span>, onde tecnologia e parceria andam juntas para impulsionar o crescimento do seu negócio. Desde  <span className="text-ciano font-extrabold">2020</span>, oferecemos soluções ERP personalizadas que se adaptam não apenas às necessidades, mas aos sonhos de nossos clientes.
        </p>
        <p className="mt-12 text-lg">
          <span className="text-ciano font-extrabold">Nossa missão </span> é fornecer sistemas de gestão ERP que se integram perfeitamente às operações dos nossos clientes, proporcionando uma experiência de gestão fluida e eficiente. Fazemos a tecnologia trabalhar a favor do seu negócio, garantindo que você tenha todas as ferramentas necessárias para prosperar em um ambiente competitivo.

        </p>
        <div className="flex gap-8 md:gap-8">
          <motion.button
            className="w-max bg-ciano text-azul font-bold px-8 py-2 md:px-6 md:py-3 rounded-md mt-14 shadow-custom-ciano"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a className="flex items-center gap-2 " href="/">
              CONTATO
              <motion.div
                whileHover={{ rotate: 360 }} 
                transition={{ duration: 0.5 }}
              >
                <Phone className="hidden md:block" size={20}/>
              </motion.div>
            </a>
          </motion.button>
          <motion.button
            className="w-max bg-azul text-white font-bold rounded-md text-sm py-4 px-4 md:px-6 md:py-3 mt-14"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink
              to="funcionalidades" // The section to scroll to
              smooth={true}
              duration={500}
              offset={-50} // Optional, adjust for headers if necessary
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              FUNCIONALIDADES 
              <MonitorCog className="hidden md:block" />
            </ScrollLink>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="hidden md:flex"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={men}
          alt="Homem segurando notebook"
          className="hidden lg:block w-full"
        />
      </motion.div>
    </section>
  );
};

export default About;
