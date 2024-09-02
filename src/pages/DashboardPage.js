// src/pages/DashboardPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  const projects = useSelector(state => state.projects.projects);
  return <Dashboard projects={projects} />;
};

export default DashboardPage;
