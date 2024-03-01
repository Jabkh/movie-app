import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayMovies from './components/DisplayMovie';
import FormMovies from './components/FormMovies';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayMovies/>} />
        <Route path="/movies/add" element={() => <FormMovies />} />
        <Route path="/movies/edit/:id" element={(props) => <FormMovies {...props} />} />
      </Routes>
    </Router>
  );
};

export default App;
