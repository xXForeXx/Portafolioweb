
import HeaderList from './HeaderList';

///img 
const fotoHeader = require('..//multimedia/logheader.png');
const fotoNavlist = require('..//multimedia/navlist.png');


///styles
const styleNav = 'flex flex-col  justify-between w-full items-center my-2 sm:flex-row sm:justify-around';
const styleNavImg = 'w-10 my-2 hover:scale-150 duration-200 ease-linear sm:ml-5 sm:w-14';
const styleNavDesplegable ='flex flex-col items-center justify-center w-full hover:translate-y-2 duration-500 delay-75 ease-out sm:hidden' ;
const styleNavDesplegableImg = 'w-8 mb-2';

////component
function HeaderNav(){
  const handleClickChangeDisplay= ()=>{
    let display = document.querySelector('#listNav').style.display;
    if (display === 'flex'){document.querySelector('#listNav').style.display = 'none'} 
    else{document.querySelector('#listNav').style.display = 'flex'}
}

  return(
	  <nav className={styleNav}>
      <img src={fotoHeader}/*'./multimedia/logHeader.png'*/ alt="img" className={styleNavImg} />
      <span onClick={handleClickChangeDisplay} id="desplegableHeader" className={styleNavDesplegable}>
        <img src={fotoNavlist}/*"./multimedia/navlist.png"*/ alt="img" className={styleNavDesplegableImg} id="nav__list" />
      </span>
      <HeaderList />
    </nav>
    )
}


export default HeaderNav;