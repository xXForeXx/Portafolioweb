import '../../style/Tailwind.css';
import FormComponent from './FormComponent';

/*styles */
const styleSectionForm ='flex justify-center items-center  bg-blue-700/25  p-6 my-14 shadow-[-1px_0px_14px_1px_rgba(0,0,0,0.75)]' ;
const styleSectionFormContainer = 'w-full flex justify-center items-center lg:flex-row lg:justify-start'  ;
const styleSectionFormContainerTitle =  'hidden lg:flex lg:text-4xl lg:text-white lg:font-light';
const styleSectionFormContainerForm = 'flex flex-col justify-center items-center w-full m-3 border-2 p-6 border-cyan-500 rounded-lg max-w-md';
const styleSectionFormContainerFormTitle = 'text-white font-semibold text-2xl lg:font-normal';



function SectionForm(){
  return(
    <div className={styleSectionForm}>
    <div className={styleSectionFormContainer}>
      <p className={styleSectionFormContainerTitle}>
      Escribeme para saber que estas interesado en mis habilidades, con mucho gusto me comunicare contigo
      </p>
      <div className={styleSectionFormContainerForm}>
        <h3 className={styleSectionFormContainerFormTitle}>
          Contacto
        </h3>
      <FormComponent />
      </div>
    </div>
  </div>
  )
}


export default SectionForm;