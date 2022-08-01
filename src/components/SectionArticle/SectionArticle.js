import '../../style/Tailwind.css'
import ArticleComponent from './ArticleComponent';



/*importacion de imagenes  */
import imgBatabit from '../multimedia/proyectos/batabitss.png';
import imgDoctorweb from '../multimedia/proyectos/doctorwebss.png';
import imgGoogleclone from '../multimedia/proyectos/googlecloness.png';
import imgTuamiga from '../multimedia/proyectos/tuamigass.png'; 


function SectionArticle(){
  return(
    <article class="flex flex-col py-11 mb-3 mt-0 justify-center bg-color-secundary shadow-[-1px_0px_14px_1px_rgba(0,0,0,0.75)]">
      <h5 class="mx-5 my-3 text-xl text-white font-semibold sm:text-2xl sm:text-right mr-10 lg:text-3xl lg:m-4 lg:font-normal">Algunos de los proyectos que he realizado</h5>
      <div class="flex flex-col justify-center items-center flex-wrap sm:flex-row">
        <ArticleComponent name='Batabit' img={imgBatabit} />
        <ArticleComponent name='Doctorweb' img={imgDoctorweb} />
        <ArticleComponent name='Google Clon' img={imgGoogleclone} />
        <ArticleComponent name='Tuamiga' img={imgTuamiga}/>
      </div>
    </article>
  )
}


export default SectionArticle;



/*
        <div class="flex flex-col justify-center relative my-6 max-w-md  xl:w-80">
          <a href="./index.html" target="_blank" class="flex justify-center w-full">
            <img src="./multimedia/proyectos/batabitss.png" alt="foto del proyecto" class="w-11/12 p-3 border-2 border-cyan-500 rounded-lg hover:w-full duration-300 ease-linear hover:p-0 hover:border-0 hover:rounded-none xl:hover:scale-150 xl:hover:translate-x-9 xl:hover:z-50" />
          </a>
          <p class="flex justify-around bg-color-secundary rounded-lg text-white text-center text-sm font-medium p-1   box-border border-2 border-cyan-500 absolute -bottom-5 left-5 sm:text-base">Batabit</p>
        </div>
        <div class="flex flex-col justify-center relative my-6 max-w-md xl:w-80">
          <a href="./index.html" target="_blank" class="flex justify-center w-full">
          <img src="./multimedia/proyectos/doctorwebss.png" alt="foto del proyecto" class="w-11/12 p-3 border-2  border-cyan-500 rounded-lg hover:w-full duration-300 ease-linear hover:p-0 hover:border-0 hover:rounded-none xl:hover:scale-150 xl:hover:z-50" />
          </a>
          <p class="flex justify-around bg-color-secundary rounded-lg text-white text-center text-sm font-medium p-1   box-border border-2 border-cyan-500 absolute -bottom-5 left-5 sm:text-base">Doctorweb</p>
        </div>
        <div class="flex flex-col justify-center relative my-6 max-w-md xl:w-80">
          <a href="./index.html" target="_blank" class="flex justify-center w-full">
          <img src="./multimedia/proyectos/googlecloness.png" alt="foto del proyecto" class="w-11/12 p-3 border-2  border-cyan-500 rounded-lg hover:w-full duration-300 ease-linear hover:p-0 hover:border-0 hover:rounded-none xl:hover:scale-150 xl:hover:z-50" />
          </a>
          <p class="flex justify-around bg-color-secundary rounded-lg text-white text-center text-sm font-medium p-1   box-border border-2 border-cyan-500 absolute -bottom-5 left-5 sm:text-base">Google clon</p>
        </div>
        <div class="flex flex-col justify-center relative my-6 max-w-md xl:w-80">
          <a href="./index.html" target="_blank" class="flex justify-center w-full">
          <img src="./multimedia/proyectos/tuamigass.png" alt="foto del proyecto" class="w-11/12 p-3 border-2  border-cyan-500 rounded-lg hover:w-full duration-300 ease-linear hover:p-0 hover:border-0 hover:rounded-none xl:hover:scale-150 xl:hover:-translate-x-9  xl:hover:z-50" />
          </a>
          <p class="flex justify-around bg-color-secundary rounded-lg text-white text-center text-sm font-medium p-1   box-border border-2 border-cyan-500 absolute -bottom-5 left-5 sm:text-base">Tu amiga</p>
        </div> */