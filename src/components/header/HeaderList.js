
import HeaderItem from "./HeaderItem"

/*styles */

const styleNavList = 'hidden flex-col justify-center items-center w-full h-80 sm:h-auto bg-slate-900 text-teal-50 font-medium translate-y-3 shadpe shadow-[0px_10px_12px_0px_rgba(0,0,0,0.75)_inset] sm:flex sm:flex-row sm:justify-end sm:m-0 p-0 sm:bg-inherit sm:shadow-none sm:mr-5 sm:items-baseline lg:font-normal" id="menuHeader';
const styleButton = 'flex items-center h-8 px-3 py-2 mb-3 bg-cyan-500 font-semibold text-color-secundary rounded-lg hover:text-lg hover:text-white sm:text-lg' ;


function HeaderList (){
  return(
    <ul className={styleNavList} id='listNav'>
				  <HeaderItem text='Inicio' link='./index.html'/>
					<HeaderItem text='Portafolio' link='./index.html' />
					<HeaderItem text='Multimedia' link='./index.html' />
					<HeaderItem text={<button className={styleButton} > Contactame</button> }  link="./contact.html"/>
		</ul>
  )
}


export default HeaderList;