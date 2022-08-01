import '../../style/Tailwind.css';


function LinksFooter({textOftag}){
 return(
  <div className="Flex flex-wrap items-center justify-center sm:flex" id="menuFooter">
      <span href="http://" class="m-3 text-white font-medium hover:text-cyan-400 sm:text-lg">{textOftag}</span>          
  </div>
 )
}


export default LinksFooter;