import '../../style/Tailwind.css'
import ArticleComponent from './ArticleComponent';



/*importacion de imagenes  */
import imgBatabit from '../multimedia/proyectos/batabitss.png';
import imgDoctorweb from '../multimedia/proyectos/doctorwebss.png';
import imgGoogleclone from '../multimedia/proyectos/googlecloness.png';
import imgTuamiga from '../multimedia/proyectos/tuamigass.png'; 

/*styles */
const styleArticleContainer = 'flex flex-col py-11 mb-3 mt-0 justify-center bg-color-secundary shadow-[-1px_0px_14px_1px_rgba(0,0,0,0.75)]' ;
const styleArticleContainerTitle = "mx-5 my-3 text-xl text-white font-semibold sm:text-2xl sm:text-right mr-10 lg:text-3xl lg:m-4 lg:font-normal";
const styleArticleContainerItems = "flex flex-col justify-center items-center flex-wrap sm:flex-row" ;


function SectionArticle(){
  return(
    <article className={styleArticleContainer}>
      <h5 className={styleArticleContainerTitle}>Algunos de los proyectos que he realizado</h5>
      <div className={styleArticleContainerItems}>
        <ArticleComponent name='Batabit' img={imgBatabit} />
        <ArticleComponent name='Doctorweb' img={imgDoctorweb} />
        <ArticleComponent name='Google Clon' img={imgGoogleclone} />
        <ArticleComponent name='Tuamiga' img={imgTuamiga}/>
      </div>
    </article>
  )
}


export default SectionArticle;