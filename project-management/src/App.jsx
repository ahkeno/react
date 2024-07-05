import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState ({
    slectedProjectId : undefined,
    project: []
  })
  function handleAddProject(){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        slectedProject: null
      }
    })
  }
  function handleSaveProject(Data){
    setProjectState(preProject=>{
      {
        const projectId = Math.random();
        const newProject = {
          ...Data,
          id: projectId
        };
        return {
          ...preProject,
          slectedProject : undefined,
          project: [...preProject.project,newProject]
        }
      }
    })
  }
  function handleSelectedProject(id){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        slectedProject: id
      }
    })
  }
  function handleCancelProject(){
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        slectedProject: id
      }
    })
  }

  function handleDeletProject(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        slectedProject: undefined,
        project: prevState.project.filter(
          (p) => p.id !== id
        ),
      };
    });
    
  }
  const selectedProject = projectState.project.find((project) => project.id == projectState.slectedProject);  

  let  content = <SelectedProject project={selectedProject} onDelete={handleDeletProject}></SelectedProject>
  if (projectState.slectedProject === null){
    content = <NewProject onAdd={handleSaveProject} onCancel={handleCancelProject}></NewProject>
  }else if(projectState.slectedProject === undefined){
    content = <NoProject onAddProject={handleAddProject}></NoProject>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddProject={handleAddProject} project={projectState.project} onSelectProject={handleSelectedProject}></SideBar>
      {content}
    </main>
  );
}

export default App;
