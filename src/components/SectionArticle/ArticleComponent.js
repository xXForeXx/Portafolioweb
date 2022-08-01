import '../../style/Tailwind.css';

function ArticleComponent({name, img}){
  return(
    <div className=
      'flex flex-col justify-center relative my-6 max-w-md  xl:w-80'>
      <a href="./index.html" target="_blank" className=
        'flex justify-center w-full'>
        <img src={img} alt="foto del proyecto" className=
          'w-11/12 p-3 border-2 border-cyan-500 rounded-lg hover:w-full duration-300 ease-linear hover:p-0 hover:border-0 hover:rounded-none xl:hover:scale-150 xl:hover:translate-x-9 xl:hover:z-50' />
      </a>
      <p className='flex justify-around bg-color-secundary rounded-lg text-white text-center text-sm font-medium p-1   box-border border-2 border-cyan-500 absolute -bottom-5 left-5 sm:text-base'>
        {name}
      </p>
    </div>)
}

export default ArticleComponent;