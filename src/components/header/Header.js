import '../../style/Tailwind.css';
import HeaderNav from './HeaderNav';
import HeaderButtonSchedule from './HeaderButtonSchedule';



const styleHeader  = 'flex w-full fixed top-0 bg-gradient-to-r from-indigo-900 to-violet-900 to z-10 shadow-[-1px_5px_20px_1px_rgba(0,0,0,0.75)]';
const styleHeaderNavContainer = 'w-full h-full relative';


function Header(){
  return(
    <header className={styleHeader}>
		  <div className={styleHeaderNavContainer}>
				<HeaderNav />
				<HeaderButtonSchedule />
	  </div>
  </header>
  )
};

export default Header;