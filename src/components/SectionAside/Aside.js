import '../../style/Tailwind.css';
import AsideComponent from "./AsideComponent";

/*import image of aside */
const imgAside = require('../../components/multimedia/logheader.png');


/*import images of AsideComponent*/

const imgFacebook = require('../../components/multimedia/facebooklogo.png');
const imgTwitter = require('../../components/multimedia/twitterlogo.png');
const imgGithub = require('../../components/multimedia/githublogo.png');
const imgLinkedin= require('../../components/multimedia/linkedinlogo.png');

/*styles */
const styleAside = 'flex flex-col justify-center items-center w-16 h-16 fixed top-56 right-1 rounded-full hover:bg-color-secundary hover:border-2 hover:border-cyan-600 hover:-translate-x-1  duration-300 ease-linear sm:w-20 sm:h-20' ;
const styleAsideContainer = 'relative flex flex-col justify-center items-center' ;
const styleAsideContainerImg = 'w-16' ;
const styleAsideContainerList = 'hidden flex-col items-center absolute mt-1.5 top-16 rounded-full'; 


function Aside ({href}){
  
  //fuction click
  const handleClickChangeAside = ()=>{
  if(document.querySelector('#menuAside').style.display === 'flex'){
    document.querySelector('#menuAside').style.display = 'none'
  } else{
    document.querySelector('#menuAside').style.display = 'flex'}
  }

  //return component 
  return (
    <aside class={styleAside}  onClick={handleClickChangeAside}>
      <div class={styleAsideContainer}>
      <img src={imgAside} alt="foto BD" class={styleAsideContainerImg} />
      <div class={styleAsideContainerList} id="menuAside">
        <AsideComponent  name={'Facebook'} hrefBlank={'https://www.facebook.com/daniel.florez.37669'} srcImg={imgFacebook} />
        <AsideComponent  name={'Twitter'} hrefBlank={'https://twitter.com/DanielFlorezVa1'} srcImg={imgTwitter} />
        <AsideComponent  name={'Github'} hrefBlank={'https://github.com/xXForeXx'} srcImg={imgGithub} />
        <AsideComponent  name={'Linkedin'} hrefBlank={'https://www.linkedin.com/in/daniel-florez-valencia-31a854224/'}  srcImg={imgLinkedin} />
      </div>
    </div>
    </aside>
  )
}

export default Aside;