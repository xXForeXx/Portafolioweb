
const styleForm = 'flex flex-col items-center w-full relative' ;
const styleFormInput = 'w-full h-10 my-2 rounded-lg px-3 bg-purple-900 border-2 border-slate-900 placeholder:text-white  placeholder:font-medium' ;
const styleFormInputSubmit = 'w-1/2 h-8 my-3 bg-color-secundary rounded-lg text-lg text-white absolute -bottom-14 border-2 border-cyan-500 hover:scale-110 duration-300 ease-linear lg:font-light';


////h-28 para text 

function FormComponent(){
return(
  <form className={styleForm}>
    <input type="text" name="Nombre" id="nombre_form" placeholder="Nombre" className={styleFormInput} />
    <input type="email" name="Email" id="email_form" placeholder="Tu correo electronico" className={styleFormInput} />
    <input type="text" name="Descripcion" id="description_form" placeholder="Descripcion " className={styleFormInput}/>
    <input type="submit" name="submit" id="submit_form" className={styleFormInputSubmit} />
  </form>
  )
}


export default FormComponent;