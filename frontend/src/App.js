import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { MainContext } from '../src/ContextStore/MainContext'
import EmployeeList from './components/EmployeeList/EmployeeList';
import SearchEmployee from './components/SearchEmployee/SearchEmployee';
import SignUp from './components/Signup/SignUp';


function App() {
  const [employeeName,setEmployeeName]=useState('')
  return (
    <div>
      <MainContext.Provider value={{employeeName,setEmployeeName}}>
        {/* <SearchEmployee />
        <EmployeeList /> */}
         <Router>
            <Routes>
                  <Route exact path='/' element={<SearchEmployee/>}></Route>
                  <Route exact path='/details' element={<EmployeeList/>}></Route>
                  <Route exact path='/signup' element={<SignUp/>}></Route>
                  {/* <Route exact path='/about-us' element={<AboutUs/>}></Route>
                  <Route exact path='/women-education' element={<WomenEducation/>}></Route>
                  <Route exact path='/online-education' element={<OnlineEducation/>}></Route>
                  <Route exact path='/school-education' element={<SchoolEducation/>}></Route>
                  <Route exact path='/getinvolved' element={<GetInvovled/>}></Route>
                  <Route exact path='/feedback' element={<Feedback/>}></Route> */}
            </Routes>
        </Router>
      </MainContext.Provider>

    </div>
  );
}

export default App;
