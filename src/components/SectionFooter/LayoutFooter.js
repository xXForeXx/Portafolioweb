import '../../style/Tailwind.css';
/*import images from footer  */

import imgUrlLogoFooter from '../multimedia/navlist.png';
import imgUrlLogoNavlist from '../multimedia/logheader.png';
import imgdefect from '../../components/multimedia/iconosol.jpg';


function LayoutFooter({typeOfClassName, typeOfImg, altImg}){
    let Classname = ()=>{
      if (typeOfClassName === 'imgLogo'){ 
      const claseSpan = 'w-12 hover:scale-125  duration-200';
      let typeOfClassName = claseSpan;
      return typeOfClassName
    } else if (typeOfClassName === 'imgDesplegableMenu'){
      const claseSpan = 'w-12 hover:translate-y-2 duration-500 delay-75 ease-out sm:hidden';
      let typeOfClassName = claseSpan;
      return typeOfClassName
    }
  }
    let Urlimg = ()=>{
      if (typeOfImg ==='imglogo'){ 
        const imgLogoFooter = imgUrlLogoFooter;
        return imgLogoFooter
      } else if(typeOfImg === 'imgnavlist'){
        const imgNavlistFooter= imgUrlLogoNavlist; 
          return imgNavlistFooter
      } else {
        const imagendefecto = imgdefect;
        return imagendefecto
      }
      
    }

 return (
    <div className={`${Classname}`}>
      <img src={Urlimg} alt={altImg} class="w-full object-cover" />
    </div>
  )
 }


export default LayoutFooter;