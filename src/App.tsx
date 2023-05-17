import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login_signup/Login';
import DashBoard from './Components/DashBoard';
import RequiredAuth from './ContextApi/RequiredAuth';
import useAuth from './hook/useAuth';
import HomePage from './Components/HomePage';
import { Nav } from './Components/Nav';
import Footer from './Components/Footer';
import { SignUp } from './Components/Login_signup/SignUp';
import { Notes } from './Components/toDO/Notes'
import '../src/css/Footer.css'
function App() {
  const { requiredAuthFlag } = useAuth();
  return (
    <>

      {/* <Nav /> */}
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/dashBoard' element={<DashBoard />} />
        <Route path='/notes' element={<Notes />} />
        <Route element={<RequiredAuth allowedParam={requiredAuthFlag} />}>
          <Route path='/dashBoard' element={<DashBoard />} />
          <Route path='/notes' element={<Notes />} />
        </Route>
      </Routes>
      <Footer />
      {/* <Login /> */}
    </>
  );
}

export default App;
