import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyStartPage from './components/SurveyStartPage';
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< SurveyStartPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
