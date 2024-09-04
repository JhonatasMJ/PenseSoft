
import woman from '../assets/imgs/womanHome.png';

const Home = () => {
  return (
    <section className="bg-lines max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="flex flex-col justify-center">
        <span className="text-lg font-semibold text-ciano">Bem-vindo(a)</span>
        <h1 className="text-5xl text-cinza font-bold mt-2">
          Flexível, configurável e feito para o seu <span className="bg-ciano text-white px-1">sucesso.</span>
        </h1>
        <p className="text-cinza text-base mt-8">
          Um ERP que se adapta ao seu negócio, flexível, configurável e feito para o seu sucesso. A solução que seu negócio precisa, com atendimento humanizado.
        </p>
        <div className="flex gap-8">
        <button className="w-max bg-ciano text-azul font-bold px-6 py-2 rounded-md mt-14 shadow-custom-ciano "><a href="/">SAIBA MAIS</a></button>
        <button className="w-max bg-azul text-white font-bold rounded-md px-6 py-2 mt-14 "><a href="/">ORÇAMENTO</a></button>

        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={woman} alt="Mulher segurando notebook" className="w-5/6 "/>
      </div>
    </section>
  );
};

export default Home;
