import '../../style/Tailwind.css';
/*import images from footer  */

import imgLogoFooter from '../multimedia/logheader.png';
import imgLogoNavlist from '../multimedia/navlist.png';
import imgdefect from '../../components/multimedia/iconosol.jpg';

const claseSpanLogo = 'w-10 hover:scale-125  duration-200'
const claseSpanDesMenu = 'w-8 hover:translate-y-2 duration-500 delay-75 ease-out sm:hidden';

function LayoutFooter({typeImg, altImg, event}){
    const Classname = typeImg === 'imgLogo' ? claseSpanLogo :  typeImg === 'imgDesMenu' ? claseSpanDesMenu :  '';
    const Urlimg =  typeImg === 'imgLogo' ? imgLogoFooter : typeImg === 'imgDesMenu' ? imgLogoNavlist : imgdefect;
  
 return (
    <div className={Classname}>
      <img src={Urlimg} alt={altImg} className="w-full object-cover" onClick={event}/>
    </div>
  )
}


export default LayoutFooter;