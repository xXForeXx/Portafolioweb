
const styleHeaderButtonContainer = 'bg-slate-400 w-12 h-6 absolute top-4 right-3 r-2 rounded-full sm: sm:left-28 sm:top-8';
const styleHeaderButtonContainerPosition = 'relative flex justify-start items-center w-full h-full';
const styleHeaderButtonContainerPositionSelect = 'w-8 h-8 bg-slate-700 rounded-full border-solid border-4 border-l-fuchsia-500 top-[-5px]';
      
      
function HeaderButtonSchedule(){  
	const handleClickChangeHours = ()=>{
    if (document.querySelector('#positionButton').style.justifyContent === 'end'){ 
      document.querySelector('#positionButton').style.justifyContent = 'start'
    } else{document.querySelector('#positionButton').style.justifyContent = 'end' }
  
  
  }    
  
  return(
  <div className={styleHeaderButtonContainer}>
    <div id='positionButton' className={styleHeaderButtonContainerPosition} >
      <div id="horario" onClick={handleClickChangeHours} className={styleHeaderButtonContainerPositionSelect}></div>
    </div>
  </div>
  )
}

export default HeaderButtonSchedule;