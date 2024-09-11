import React from "react";
import img01 from "../assets/imgs/img01.png"


const listaData = [
    {
      title: "Gestão centralizada de filiais e estoques",
      topic1:
        "Multi-filial e Multi-depósitos: Controle integrado de várias filiais e depósitos, permitindo um gerenciamento preciso e eficiente das informações e movimentações.",
      topic2:
        "Produção e Estoque: Controle total de materiais e movimentações, garantindo eficiência e minimizando erros no gerenciamento de produção e estoque.",
       
        img: img01, 
    },
    {
      title: "Automatização de vendas e contratos",
      topic1:
        "Multi-filial e Multi-depósitos: Controle integrado de várias filiais e depósitos, permitindo um gerenciamento preciso e eficiente das informações e movimentações.",
      topic2:
        "Produção e Estoque: Controle total de materiais e movimentações, garantindo eficiência e minimizando erros no gerenciamento de produção e estoque.",
    },
    {
        title: "Controle financeiro e cobrança",
        topic1:
          "Multi-filial e Multi-depósitos: Controle integrado de várias filiais e depósitos, permitindo um gerenciamento preciso e eficiente das informações e movimentações.",
        topic2:
          "Produção e Estoque: Controle total de materiais e movimentações, garantindo eficiência e minimizando erros no gerenciamento de produção e estoque.",
      },
      {
        title: "Gestão de documentos e integrações",
        topic1:
          "Multi-filial e Multi-depósitos: Controle integrado de várias filiais e depósitos, permitindo um gerenciamento preciso e eficiente das informações e movimentações.",
        topic2:
          "Produção e Estoque: Controle total de materiais e movimentações, garantindo eficiência e minimizando erros no gerenciamento de produção e estoque.",
      },
      {
        title: "Inteligência e automação de processos",
        topic1:
          "Multi-filial e Multi-depósitos: Controle integrado de várias filiais e depósitos, permitindo um gerenciamento preciso e eficiente das informações e movimentações.",
        topic2:
          "Produção e Estoque: Controle total de materiais e movimentações, garantindo eficiência e minimizando erros no gerenciamento de produção e estoque.",
      },
  ];
  
  const Funcionalidades = () => {
    const [ativo, setAtivo] = React.useState(0); 
  
    return (
      <section
        className="max-w-7xl mx-auto  py-24"
        id="funcionalidades"
      >
        {/* Coluna dos botões */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div>
          <span className="text-azul font-semibold">Descubra as</span>
          <h2 className="text-5xl font-bold text-cinza mt-2">
            Principais Funcionalidades
          </h2>
          <ul>
            {listaData.map((lista, index) => (
                <li key={index} className="mt-10">
                <button
                  className={`bg-ciano w-full  p-4 flex gap-4 items-center text-white font-bold text-xl rounded-md ${
                      ativo === index ? "ring-2 ring-azul" : 'opacity-65'
                    }`}
                    onClick={() => setAtivo(index)} 
                    >
                  <span className="bg-azul px-3 py-1 w-max rounded-lg text-sm">
                    {index + 1}
                  </span>
                  {lista.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div >
          {listaData.map(
              (lista, index) =>
                ativo === index && ( 
                    <div key={index} className="grid justify-between items-stretch  ">
                  <h3 className="text-3xl font-bold text-cinza">{lista.title}</h3>
                  <p className="mt-4 text-lg text-cinza">{lista.topic1}</p>
                  <p className="mt-2 text-lg text-cinza">{lista.topic2}</p>
                  <img src={lista.img} alt="Imagem decorativa" />
                </div>
              )
            )}
            </div>
        </div>
      </section>
    );
  };
  
  export default Funcionalidades;
  