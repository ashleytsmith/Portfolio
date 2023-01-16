import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.js"

import Header from './components/Header';
import Panel from './components/Panel';
import projectsInfo from './ProjectsInfo';
import Contact from './components/Contact';


function App() {


  return (


    <div className="App">
      
      <Header/>

      {projectsInfo.map(function(project) {

        return <Panel key = {project.id} id = {project.id} title = {project.title}  image = {project.image} description = {project.description} skillsUsed = {project.skillsUsed} linkToCode = {project.linkToCode} imageBorder = {project.imageBorder} />

      })}

      <Contact/>

    </div>


  );
}

export default App;

