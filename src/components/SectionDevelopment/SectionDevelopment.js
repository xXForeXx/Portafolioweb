import SectionDevInfo from './SectionDevInfo';
import SectionDevDescription from './SectionDevDescription';

const styleSectionContainer = "flex flex-col mt-36";

function SectionDevelopment(){
  return(
    <section className={styleSectionContainer}>
      <SectionDevInfo />
      <SectionDevDescription />
    </section>
  )
};

export default SectionDevelopment;