import React from "react"
import { Route, Switch as Switching } from "react-router";
import SidebarPage from './Containers/SidebarPage';
import HomePage from './Containers/HomePage';
import PortfolioPage from './Containers/PortfolioPage';
import AboutPage from './Containers/AboutPage';
import SkillsPage from './Containers/SkillsPage';
import EducationPage from './Containers/EducationPage';
import ContactPage from './Containers/ContactPage';
import BlogPage from './Containers/BlogPage';

function App() {  
  return (
      <div className="App">
        <SidebarPage />
        <Switching>
        <Route path="/" exact><HomePage /></Route>
        <Route path="/portfolio" exact><PortfolioPage /></Route>
        <Route path="/about" exact><AboutPage /></Route>
        <Route path="/skills" exact><SkillsPage /></Route>
        <Route path="/education" exact><EducationPage /></Route>
        <Route path="/contact" exact><ContactPage /></Route>
        <Route path="/blog" exact><BlogPage /></Route>
        </Switching>
      </div>
  );
}

export default App;
