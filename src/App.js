import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

//component
import MainContainer from './UI/Main/MainContainer';

function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  )
}

export default App;
