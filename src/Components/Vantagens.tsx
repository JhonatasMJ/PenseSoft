import { Banknote, BriefcaseBusiness, Handshake, MoveDown, UserPen } from "lucide-react";
import { motion } from "framer-motion";
import logo from '../assets/imgs/logotipo.svg';

const cardData = [
  {
    icon: BriefcaseBusiness,
    title: "Adaptação perfeita ao seu negócio",
    description: "Nosso ERP é projetado para ser flexível e configurável, moldando-se às suas regras de negócio. Com isso, você obtém uma solução que realmente funciona para você, sem comprometer os processos que tornam sua empresa única."
  },
  {
    icon: UserPen,
    title: "Soluções personalizadas para seu sucesso",
    description: "Se o que você precisa ainda não foi desenvolvido, nossa equipe se encarrega de criar a solução sob medida para o seu negócio. Não vendemos apenas software; entregamos resultados concretos e adaptados às suas demandas."
  },
  {
    icon: Handshake,
    title: "Atendimento humanizado e eficiente",
    description: "Nosso compromisso vai além da tecnologia. Valorizamos o relacionamento com nossos clientes, oferecendo suporte contínuo e personalizado para garantir que suas necessidades sejam sempre atendidas com a atenção que merecem."
  },
  {
    icon: Banknote,
    title: "Custo-benefício inigualável para seu Investimento",
    description: "Tecnologia de ponta com preços acessíveis, garantindo que você maximize o retorno sobre o investimento. Proporcionamos valores reais ao seu negócio, sem custos ocultos, tornando nosso ERP uma escolha inteligente e financeiramente vantajosa."
  }
];

const Vantagens = () => {
  return (
    <section className="bg-ciano relative" id="vantagens">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 relative py-24 items-baseline gap-8">

        <div className="absolute inset-0 flex justify-center items-center bottom-full">
          <motion.div
            className="p-4 bg-cyan-50 rounded-full p-6"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MoveDown size={28} strokeWidth={1.5} className="text-azul" />
            </motion.div>
          </motion.div>
        </div>

        <div >
          <span className="text-azul font-semibold">Saiba</span>
          <h2 className="text-4xl font-bold text-white mt-2">Porque devo escolher o nosso sistema ERP?</h2>
          <p className="text-lg text-cinza mt-14">Nosso ERP é projetado para ser flexível e configurável, moldando-se às suas regras de negócio.</p>
          <p className="text-lg text-cinza mt-12">Com isso, você obtém uma solução que realmente funciona para você, sem comprometer os processos que tornam sua empresa única.</p>
          <button className="bg-azul text-white font-bold px-6 py-3 rounded-md w-max mt-16">
            <a className="text-md" href="/">VEJA QUANTO VOCÊ PODE ECONOMIZAR</a>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-ciano-claro p-6 rounded-md relative">
        <img src={logo} alt="" className="absolute left-48p bottom-49p w-7 h-7 hidden md:flex"  />
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-md shadow-md "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 6, delay: index * 0.3 }}
            >
             
              <motion.svg
                initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
                className="w-8 h-8 mb-2 text-cyan-600"
              >
                <card.icon size={32} strokeWidth={1.5} />
              </motion.svg>
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-xs mt-4">{card.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Vantagens;
