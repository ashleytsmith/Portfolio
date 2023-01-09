import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.js"

import Header from './components/Header';
import Panel from './components/Panel';
import projectInfo from './ProjectInfo';


function App() {


  return (


    <div className="App">
      
      <Header/>

      {projectInfo.map(function(project) {

        return <Panel key = {project.id} id = {project.id}  image = {project.image} description = {project.description} imageBorder = {project.imageBorder} />

      })}
      
    </div>

  );
}

export default App;

