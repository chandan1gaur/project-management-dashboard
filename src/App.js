// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DashboardPage from './pages/DashboardPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Router>
    </DndProvider>
  );
};

export default App;

