

function FormComponent(){
return(
  <form className=
    'flex flex-col items-center w-full relative'>
    <input type="text" name="Nombre" id="nombre_form" placeholder="Nombre" className=
      'w-full h-10 my-2 rounded-lg px-3 bg-purple-900 border-2 border-slate-900 placeholder:text-white  placeholder:font-medium' />
    <input type="email" name="Email" id="email_form" placeholder="Tu correo electronico" className=
      'w-full h-10 my-2 rounded-lg px-3 bg-purple-900 border-2 border-slate-900 placeholder:text-white placeholder:font-medium' />
    <input type="text" name="Descripcion" id="description_form" placeholder="Descripcion del servicio que estas nesecitando" className=
      'w-full h-28 my-2 rounded-lg px-3 bg-purple-900 border-2 border-slate-900 placeholder:text-white placeholder:font-medium' />
    <input type="submit" name="submit" id="submit_form" className=
      'w-1/2 h-8 my-3 bg-color-secundary rounded-lg text-lg text-white absolute -bottom-14 border-2 border-cyan-500 hover:scale-110 duration-300 ease-linear lg:font-light' />
  </form>
  )
}


export default FormComponent;