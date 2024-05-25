import React from 'react'
import './index.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './Header';
import Mainarea from './Mainarea';

import Loginpage from './Loginpage';
export const App = () => {
  return (
      <Router>
          <Routes>
    <Route path="/" exact element={<Loginpage/>} />
    <Route path="/Header" exact element={<Header/>} />
    <Route path="/Mainarea" exact element={<Mainarea/>} />
    </Routes>
    </Router>
      );
    };

export default App;
