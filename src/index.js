import React from 'react';
import ReactDOM from 'react-dom/client';

/////importacion  de componentes
import Header from "./components/Header/Header";
import SectionDevelopment from "./components/SectionDevelopment/SectionDevelopment";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import SectionArticle from "./components/SectionArticle/SectionArticle";
import SectionForm from "./components/SectionForm/SectionForm";
import Aside from "./components/SectionAside/Aside";
import Footer from "./components/SectionFooter/Footer";

/////render 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header />
    <SectionDevelopment />
    <SectionSkills />
    <SectionArticle />
    <SectionForm />
    <Aside />
    <Footer />
  </>
);
