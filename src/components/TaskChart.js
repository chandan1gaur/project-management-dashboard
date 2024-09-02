// src/components/TaskChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = ({ projects }) => {
  const data = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [
      {
        label: '# of Tasks',
        data: [
          projects.reduce((sum, project) => sum + project.tasks.filter(task => task.state === 'To Do').length, 0),
          projects.reduce((sum, project) => sum + project.tasks.filter(task => task.state === 'In Progress').length, 0),
          projects.reduce((sum, project) => sum + project.tasks.filter(task => task.state === 'Done').length, 0),
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default TaskChart;
