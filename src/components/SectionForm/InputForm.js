

/////style
const styleFormInput = 'w-full h-10 my-2 rounded-lg px-3 text-cyan-50 bg-purple-900 border-2 border-slate-900 placeholder:text-cyan-200  placeholder:font-medium' ;
const styleFormLabel = 'w-10/12 text-cyan-50';

////component
function InputForm({typeInput, value, info}){
  return(
      <label className={styleFormLabel}> 
        <p>{value}</p>
        <input type={typeInput} name={value} placeholder={info} className={styleFormInput} />
      </label>
  )
}

export default InputForm;