


      //////App code 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css'; // Assuming you have Tailwind configured here
import First from './pages/pg1';
import Sec from './pages/pg2';
import Third from './pages/pg3';
// import About from './sections/About'; // About component
// import Contacts from './sections/Contacts'; // Contacts component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='bg-blue-800 fixed w-full z-10 flex md:flex md:flex-grow flex-row justify-end space-x-1 '>
          <NavLink to="/" className={({ isActive }) => isActive ? "py-4 px-2 text-white border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Pg1
          </NavLink>
          <NavLink to="/pg2" className={({ isActive }) => isActive ? "py-4 px-2 text-white border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Pg2
          </NavLink>
          <NavLink to="/pg3" className={({ isActive }) => isActive ? "py-4 px-2 text-white border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Pg3
          </NavLink>
          {/* <NavLink to="/contacts" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Contacts
          </NavLink>  */}
        </nav>

        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/pg2" element={<Sec/>} />
          <Route path="/pg3" element={<Third />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



