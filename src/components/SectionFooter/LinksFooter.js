import '../../style/Tailwind.css';

/*styles */
const styleLinksContainer  = 'Flex flex-wrap items-center justify-center sm:flex' ;
const styleLinksContainerLink = 'm-3 text-white font-medium hover:text-cyan-400 sm:text-lg';

function LinksFooter({textOftag}){
 return(
  <div className={styleLinksContainer} id="menuFooter">
      <span href="http://" class={styleLinksContainerLink} >{textOftag}</span>          
  </div>
 )
}


export default LinksFooter;