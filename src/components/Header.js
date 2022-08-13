import '../style/Tailwind.css';


const fotoHeader = require('./multimedia/logheader.png');
const fotoNavlist = require('./multimedia/navlist.png');

function Header(){
  return(
    <header className=
      'flex w-full fixed top-0 bg-gradient-to-r from-indigo-900 to-violet-900 to z-10 shadow-[-1px_5px_20px_1px_rgba(0,0,0,0.75)]'>
		  <div className=
        'w-full h-full relative'>
		  <nav className=
        'flex flex-col  justify-between w-full items-center my-2 sm:flex-row sm:justify-around'>
			  <img src={fotoHeader}/*'./multimedia/logHeader.png'*/ alt="img" className=
          'w-10 my-2 hover:scale-150 duration-200 ease-linear sm:ml-5 sm:w-14' />
			  <span onclick="despliegueMenuHeader('')" id="desplegableHeader" className=
          'flex flex-col items-center justify-center w-full hover:translate-y-2 duration-500 delay-75 ease-out sm:hidden'>
			  <img src={fotoNavlist}/*"./multimedia/navlist.png"*/ alt="img" className="w-8 mb-2" id="nav__list" />
			  </span>
			  <ul className=
          'hidden flex-col justify-center items-center w-full bg-slate-900 text-teal-50 font-medium translate-y-3 shadpe shadow-[0px_10px_12px_0px_rgba(0,0,0,0.75)_inset] sm:flex sm:flex-row sm:justify-end sm:m-0 p-0 sm:bg-inherit sm:shadow-none sm:mr-5 sm:items-baseline lg:font-normal" id="menuHeader'>
				  <li className=
            'm-1 mt-6 sm:m-0 sm:ml-4'>
					  <a href="./index.html" class=
              'text-white hover:text-cyan-500 hover:text-lg sm:text-lg'>Inicio
            </a>
				  </li>
				  <li className=
            'm-1 sm:m-0 sm:ml-4'>
					  <a href="./portafolio.html" className=
            'text-white hover:text-cyan-500 hover:text-lg sm:text-lg'>Portafolio</a>
				  </li>
				  <li className=
            'm-1 sm:m-0 sm:ml-4'>
					  <a href="./multimedia.html" className=
              'text-white hover:text-cyan-500 hover:text-lg sm:text-lg'>Multimedia</a>
				  </li>
				  <li className=
            'm-1 sm:m-0 sm:ml-4'>
					  <a href="./contact.html">
						  <button className=
                'flex items-center h-8 px-3 py-2 mb-3 bg-cyan-500 font-semibold text-color-secundary rounded-lg hover:text-lg hover:text-white sm:text-lg' >Contactame</button>
					  </a>
				  </li>
			  </ul>
		  </nav>
		  <div className=
        'bg-slate-400 w-12 h-6 absolute top-4 right-3 r-2 rounded-full sm: sm:left-28 sm:top-8'>
			  <div id='positionButton' className=
          'relative flex justify-start items-center w-full h-full' >
          <div id="horario" onclick="changeHorario()" className=
            'w-8 h-8 bg-slate-700 rounded-full border-solid border-4 border-l-fuchsia-500 top-[-5px]'>                    
          </div>
			  </div>
		  </div>
	  </div>
  </header>
  )
};

export default Header;