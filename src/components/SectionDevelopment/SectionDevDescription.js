

/////imgs
const imageCode = require('../multimedia/vscode.jpg');

///styles
const styleDevDescContainer= 'flex flex-col w-full my-3 items-center sm:bg-color-secundary lg:bg-inherit lg:items-start';
const styleDevDescContainerTitle= 'text-cyan-300 text-lg font-semibold mx-4 sm:text-2xl sm:text-center sm:my-6 lg:text-3xl lg:font-normal';
const styleDevDescContainerInfo= 'lg:flex lg:flex-row lg:justify-between lg:items-start lg:w-full';
const styleDevDescContainerInfoImg= 'w-full my-4 shadow-[-1px_0px_14px_1px_rgba(0,0,0,0.75)] max-w-md sm:object-cover sm:w-full sm:h-auto lg:ml-4';
const styleDevDescContainerInfoText= 'hidden lg:flex lg:justify-end lg:justify-items-start lg:text-4xl lg:text-right lg:text-white lg:mx-4 lg:mt-14';


/////component
function SectionDevDescription(){
  return (
    <div className={styleDevDescContainer}>
      <p className={styleDevDescContainerTitle}>Experiencias con intelecto profesional y creativo</p>
      <div className={styleDevDescContainerInfo}>
        <img src={imageCode}/*"./multimedia/vscode.jpg"*/ alt="imagen de interfas de vscode" className={styleDevDescContainerInfoImg} />
        <p className={styleDevDescContainerInfoText}>Experiencia en optimos entornos de desarrollo y tecnologias actuales</p>
      </div>
    </div>
  )
}


export default SectionDevDescription;