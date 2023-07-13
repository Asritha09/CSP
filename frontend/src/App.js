import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { MainContext } from '../src/ContextStore/MainContext'
import EmployeeList from './components/EmployeeList/EmployeeList';
import SearchEmployee from './components/SearchEmployee/SearchEmployee';
import SignUp from './components/Signup/SignUp';
import AboutUs from './components/About/AboutUs';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import OnlineEducation from './components/Eductaion/OnlineEducation'
import WomenEducation from './components/Eductaion/WomenEducation'
import SchoolEducation from './components/Eductaion/SchoolEducation'


function App() {
  const [employeeName,setEmployeeName]=useState('')
  return (
    <div>
      <MainContext.Provider value={{employeeName,setEmployeeName}}>
        {/* <SearchEmployee />
        <EmployeeList /> */}
         <Router>
            <Routes>
                  <Route exact path='/' element={<Login/>}></Route>
                  <Route exact path='/home' element={<Home/>}></Route>
                  <Route exact path='/search' element={<SearchEmployee/>}></Route>
                  <Route exact path='/details' element={<EmployeeList/>}></Route>
                  <Route exact path='/signup' element={<SignUp/>}></Route>
                  <Route exact path='about' element={<AboutUs/>}></Route>
                  <Route exact path='/online-education' element={<OnlineEducation/>}></Route>
                  <Route exact path='/women-education' element={<WomenEducation/>}></Route>
                  <Route exact path='school-education' element={<SchoolEducation/>}></Route>
                 
            </Routes>
        </Router>
      </MainContext.Provider>

    </div>
  );
}

export default App;
