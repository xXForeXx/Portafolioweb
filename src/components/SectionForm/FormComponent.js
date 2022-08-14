import InputForm from "./InputForm";



const styleForm = 'flex flex-col items-center w-full relative my-3' ;
const styleFormInputSubmit = 'w-1/2 h-8 my-3 bg-gradient-to-r from-indigo-900 to-violet-900 to z-10 rounded-lg text-lg text-white absolute -bottom-14 border-2 border-cyan-500 hover:scale-110 duration-300 ease-linear lg:font-light';

////event

const handleClickSubmit = (e)=>e.preventDefault();

function FormComponent(){
  
return(
  <form className={styleForm}>
    <InputForm typeInput='name' value='Nombre' info='Daniel' />
    <InputForm typeInput='email' value='Email' info='example@email.com' />
    <InputForm typeInput='text' value='Descripcion' info='¿En que te puedo ayudar?' />
    <input type='submit' value='enviar' className={styleFormInputSubmit} onClick={handleClickSubmit}/>
  </form>
  )
}


export default FormComponent;