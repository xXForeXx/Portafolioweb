import '../style/Tailwind.css';
const imageDeveloper = require('./multimedia/developer.jpg');
const imageCode = require('./multimedia/vscode.jpg');

function SectionDevelopment(){
  return(
    <section class="flex flex-col mt-36">
      <div class="flex flex-col items-center justify-center mb-2">
        <img src={imageDeveloper}/*"./multimedia/developer.jpg"*/ alt="Imagen de desarrollo" class="w-40 h-40 object-cover rounded-full my-3 hover:scale-125 ease-out duration-500 delay-75 hover:rounded-none" />
        <h1 class="text-center text-xl font-bold font-sans text-cyan-400 my-1 sm:text-2xl lg:font-normal lg:text-3xl">Desarrollador Front-end</h1>
        <p class="text-center text-lg text-white  my-1 sm:text-xl lg:font-normal lg:text-2xl" >Experiencia en el desarrollo de interfaces WEB</p>
      </div>
      <div class="flex flex-col w-full my-3 items-center sm:bg-color-secundary lg:bg-inherit lg:items-start">
        <p class="text-cyan-300 text-lg font-semibold mx-4 sm:text-2xl sm:text-center sm:my-6 lg:text-3xl lg:font-normal">Experiencias con intelecto profesional y creativo</p>
        <div class="lg:flex lg:flex-row lg:justify-between lg:items-start lg:w-full">
          <img src={imageCode}/*"./multimedia/vscode.jpg"*/ alt="imagen de interfas de vscode" class="w-full my-4 shadow-[-1px_0px_14px_1px_rgba(0,0,0,0.75)] max-w-md sm:object-cover sm:w-full sm:h-auto lg:ml-4 " />
          <p class="hidden lg:flex lg:justify-end lg:justify-items-start lg:text-4xl lg:text-right lg:text-white lg:mx-4 lg:mt-14">Experiencia en optimos entornos de desarrollo y tecnologias actuales</p>
        </div>
      </div>
    </section>
  )
};

export default SectionDevelopment;