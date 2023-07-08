import React from 'react';
import Header  from './components/Header';
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <>
    
    
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" component={<Login/>}/>
      </Routes>
    </Router>
    </>
  );


}

export default App;


