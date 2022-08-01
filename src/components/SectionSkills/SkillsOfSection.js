import '../../style/Tailwind.css';

function SkillOfSection({title, imagen }){
    return(
      <div className="flex flex-col items-center m-5 w-28 text-center hover:scale-125 duration-300 ease-out">
        <img src={imagen} alt='imagen' className="w-16" /> 
        <p className="text-xl text-cyan-100 font-semibold ">{title}</p>
   </div>
  );
};


export default SkillOfSection;


