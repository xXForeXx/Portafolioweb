import '../../style/Tailwind.css';

import LinksFooter from './LinksFooter';
import LayoutFooter from './LayoutFooter';


function Footer (){
  return(
    <footer className="flex flex-col justify-around items-center bg-slate-800 shadow-[-1px_5px_20px_1px_rgba(0,0,0,0.75)]">
        <div className="w-full my-3 flex flex-row justify-around items-center">
          <LayoutFooter typeOfClassName='imgLogo' typeOfImg={'imglogo'}  altImg='imagenHeader' />
          <LayoutFooter typeOfClassName='imgDesplegableMenu' typeOfImg={'imgnavlist'} altImg='imagenDesplegableMenu' />
        </div>	
        <div>
          <LinksFooter textOftag={'Informacion'} />
          <LinksFooter textOftag={'documentacion'} />
          <LinksFooter textOftag={'contacto'} />
          <LinksFooter textOftag={'multimedia'} />
        </div>
      <div class="text-center text-cyan-800 bg-black ">
        <p>Creado con el ♥</p>
      </div>
    </footer>
  )
}

export default Footer;