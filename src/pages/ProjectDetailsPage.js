// src/pages/ProjectDetailsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RichTextEditor from '../components/RichTextEditor';
import { useDispatch } from 'react-redux';
import { updateTaskDescription } from '../features/projects/projectSlice';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const projectData = useSelector(state=>state.projects.projects);
//  console.log(projectData)

//  const tasksData = useSelector(state=>state.projects.projects);
//   let data = tasksData.map((project)=>{
//     project.tasks.map((task)=>{
//        task}).filter((data)=>{
//       return data.id ===parseInt(id)

//     })
//    })


    const tasks = projectData[0].tasks.filter((task)=>task.id === parseInt(id))
  // const project = useSelector(state =>
  //   state.projects.projects.filter(proj => proj)
  // );
  // console.log(project);
  const dispatch = useDispatch();

  if (!tasks) return <div>task not found</div>;

  const handleDescriptionChange = (taskId, value) => {
    dispatch(updateTaskDescription({ projectId: projectData[0].id, taskId, description: value }));
  };

  return (
    <div>
      <h1>{projectData[0].name}</h1>
      {tasks.map(task => (
        <div key={task.id}>
        <h3>{task.name}</h3>
          {/* <Task task={task} /> */}
          <RichTextEditor
            value={task.description}
            onChange={(value) => handleDescriptionChange(task.id, value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailsPage;
