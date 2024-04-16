import './App.scss'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToggleButtons from './pages/ToggleButtons';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import MirrorElementWindow from './pages/MirrorElementWindow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="toggle-buttons" element={<ToggleButtons />} />
          <Route path="mirror-element" element={<MirrorElementWindow />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
