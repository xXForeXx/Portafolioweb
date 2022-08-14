import '../../style/Tailwind.css';

/*styles */
const styleSkillContainer= "flex flex-col items-center m-5 w-28 text-center hover:scale-125 duration-300 ease-out";
const styleSkillContainerImg = "w-16";
const styleSkillContainerTitle = "text-xl text-cyan-100 font-semibold ";

function SkillOfSection({title, imagen }){
    return(
      <div className={styleSkillContainer}>
        <img src={imagen} alt='imagen' className={styleSkillContainerImg} /> 
        <p className={styleSkillContainerTitle}>{title}</p>
   </div>
  );
};


export default SkillOfSection;


