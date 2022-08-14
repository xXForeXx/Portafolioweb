
//imgs
const imageDeveloper = require('../multimedia/developer.jpg');

///styles
const stylesdevInfo ="flex flex-col items-center justify-center mb-2";
const stylesdevInfoImg ="w-40 h-40 object-cover rounded-full my-3 hover:scale-125 ease-out duration-500 delay-75 hover:rounded-none" ;
const stylesdevInfoTitle = "text-center text-xl font-bold font-sans text-cyan-400 my-1 sm:text-2xl lg:font-normal lg:text-3xl";
const stylesdevInfoText = "text-center text-lg text-white  my-1 sm:text-xl lg:font-normal lg:text-2xl" ;

///component
function SectionDevInfo (){
  return (
    <div className={stylesdevInfo}>
      <img src={imageDeveloper}/*"./multimedia/developer.jpg"*/ alt="Imagen de desarrollo" className={stylesdevInfoImg} />
      <h1 className={stylesdevInfoTitle}>Desarrollador Front-end</h1>
      <p className={stylesdevInfoText}>Experiencia en el desarrollo de interfaces WEB</p>
    </div>
  )
}


export default SectionDevInfo;