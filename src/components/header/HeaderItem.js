

const styleItemHeaderList = 'm-1 sm:m-0 sm:ml-4' ;
const styleItemHeaderListLink = 'text-white hover:text-cyan-500 hover:text-lg sm:text-lg';
  

function HeaderItem({text, link}){
return (
  <li className={styleItemHeaderList}>
    <a href={link} className={styleItemHeaderListLink} >{text}</a>
  </li>
  )
}

export default HeaderItem;