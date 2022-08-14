import LinksFooter from './LinksFooter';
import LayoutFooter from './LayoutFooter';

/*styles */
const styleFooter = 'flex flex-col justify-around items-center bg-slate-800 shadow-[-1px_5px_20px_1px_rgba(0,0,0,0.75)]';
const styleFooterImgContainer = 'w-full my-3 flex flex-row justify-around items-center';
const styleFooterLinksContainer = 'hidden sm:flex flex-wrap justify-center mb-3'; 
const styleFooterP = 'text-center text-cyan-800 bg-black ';


/////Events 
const handleClickDesMenu = ()=>{
  if(document.querySelector('#footerNavList').style.display === 'flex'){
    document.querySelector('#footerNavList').style.display = 'none';
  } else {
    document.querySelector('#footerNavList').style.display = 'flex';
  }
};

const handleClickBloc = ()=>console.log('redireccion al bloc');

////component
function Footer (){
  return(
    <footer className={styleFooter}>
        <div className={styleFooterImgContainer}>
          <LayoutFooter typeImg='imgLogo' altImg='imagenHeader' event={handleClickBloc}/>
          <LayoutFooter typeImg='imgDesMenu' altImg='imagenDesplegableMenu'  event={handleClickDesMenu}/>
        </div>	
        <div className={styleFooterLinksContainer} id='footerNavList'>
          <LinksFooter textOftag={'Informacion'} />
          <LinksFooter textOftag={'documentacion'} />
          <LinksFooter textOftag={'contacto'} />
          <LinksFooter textOftag={'multimedia'} />
        </div>
      <div className={styleFooterP}>
        <p>Creado con el ♥</p>
      </div>
    </footer>
  )
}

export default Footer;