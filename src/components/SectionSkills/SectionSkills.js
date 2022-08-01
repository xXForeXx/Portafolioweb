import '../../style/Tailwind.css';
import SkillOfSection from './SkillsOfSection';

/*importacion de las imagenes de skillsSections */
const imgHtml = require('../../components/multimedia/html5.png');
const imgCss = require('../../components/multimedia/css3.png'); 
const imgJavascript = require('../../components/multimedia/javascript.png'); 
const imgPython = require('../../components/multimedia/python.png'); 
const imgGithub = require('../../components/multimedia/github.png'); 
const imgTailwind = require('../../components/multimedia/tailwind.png'); 
const imgReact = require('../../components/multimedia/tailwind.png'); 


/*componente */
function SectionSkills(){
  return(
    <section class="flex flex-col  justify-center shadow-[-1px_0px_14px_1px_rgba(0,0,0,0.75)]">
        <h2 class="text-cyan-300 text-2xl font-medium mx-3 mt-9 sm:text-2xl sm:ml-16 lg:text-3xl">Los atributos que me caracterizan </h2>
        <div class="flex flex-wrap w-full justify-center items-center my-6 lg:h-72 lg:m-0">
          <SkillOfSection title='Html' imagen = {imgHtml} /> 
          <SkillOfSection title='Css' imagen={imgCss} />
          <SkillOfSection title='Javascript' imagen={imgJavascript} />
          <SkillOfSection title='Python' imagen={imgPython}/>
          <SkillOfSection title='Git & Github' imagen={imgGithub} /> 
          <SkillOfSection title='Tailwind Css' imagen={imgTailwind} />
          <SkillOfSection title='React JS' imagen={imgReact} />
        </div>
    </section>
  )
}
export default SectionSkills;