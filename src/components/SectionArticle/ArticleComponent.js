import '../../style/Tailwind.css';


/*styles */
const styleArticleItem = 'flex flex-col justify-center relative my-6 max-w-md  xl:w-80';
const styleArticleItemHiper  = 'flex justify-center w-full';
const styleArticleItemHiperImg = 'w-11/12 p-3 border-2 border-cyan-500 rounded-lg hover:w-full duration-300 ease-linear hover:p-0 hover:border-0 hover:rounded-none xl:hover:scale-150 xl:hover:translate-x-9 xl:hover:z-50';
const styleArticleItemP = 'flex justify-around bg-color-secundary rounded-lg text-white text-center text-sm font-medium p-1   box-border border-2 border-cyan-500 absolute -bottom-5 left-5 sm:text-base';
      

function ArticleComponent({name, img}){
  return(
    <div className={styleArticleItem}>
      <a href="./index.html" target="_blank" className={styleArticleItemHiper}>
        <img src={img} alt="foto del proyecto" className={styleArticleItemHiperImg} />
      </a>
      <p className={styleArticleItemP}>
        {name}
      </p>
    </div>)
}

export default ArticleComponent;