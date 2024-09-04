
import logo from '../assets/imgs/logotipo.svg';

const Navbar = () => {
  return (
    <div className='bg-ciano'>
      <header className='flex items-center justify-between max-w-7xl mx-auto p-4'>
    
        <img src={logo} alt="Logotipo" className="h-10" />

        <nav className='flex-1'>
          <ul className='flex justify-center text-white gap-6 font-semibold text-lg'>
            <li><a className='.custom' href="/">Início</a></li>
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Funcionalidades</a></li>
            <li><a href="/">Vantagens</a></li>
          </ul>
        </nav>


        <button className='bg-azul text-white font-bold px-4 py-2 rounded'>
     Orçamento
        </button>
      </header>
    </div>
  )
}

export default Navbar;
