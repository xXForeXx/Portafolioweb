import '../../style/Tailwind.css';

import FormComponent from './FormComponent';

function SectionForm(){
  return(
    <div className=
      'flex justify-center items-center  bg-blue-700/25  p-6 my-14 shadow-[-1px_0px_14px_1px_rgba(0,0,0,0.75)]'>
    <div className=
      'w-full flex justify-center items-center lg:flex-row lg:justify-start' >
      <p className=
        'hidden lg:flex lg:text-4xl lg:text-white lg:font-light'>
      Escribeme para saber que estas interesado en mis habilidades, con mucho gusto me comunicare contigo
      </p>
      <div className=
      'flex flex-col justify-center items-center w-full m-3 border-2 p-6 border-cyan-500 rounded-lg max-w-md'>
        <h3 className='text-white font-semibold text-2xl lg:font-normal'>
          Contacto
        </h3>
      <FormComponent />
      </div>
    </div>
  </div>
  )
}


export default SectionForm;