
import Header from "./components/Header/Header";
import SectionDevelopment from "./components/SectionDevelopment/SectionDevelopment";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import SectionArticle from "./components/SectionArticle/SectionArticle";
import SectionForm from "./components/SectionForm/SectionForm";
import Aside from "./components/SectionAside/Aside";
import Footer from "./components/SectionFooter/Footer";



function App (){
  return(
    <>
      <Header />
      <SectionDevelopment />
      <SectionSkills />
      <SectionArticle />
      <SectionForm />
      <Aside />
      <Footer />
    </>
  )
}

export default App;