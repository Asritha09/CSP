import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Markdown from "markdown-to-jsx";
import '../EmployeeList/EmployeeList.css';
import { MainContext } from '../../ContextStore/MainContext';
import SearchEmployee from '../SearchEmployee/SearchEmployee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const { employeeName } = useContext(MainContext);
  const [post, setPost] = useState("");
if(employeeName==="doctor"){
  import(`../../Markdownfiles/Doctor.md`) 
.then((res) => {
  fetch(res.default)
    .then((res) => res.text())
    .then((res) => setPost(res))
    .catch((err) => console.log(err));
})
}

if(employeeName==="lawyer"){
  import(`../../Markdownfiles/Lawyer.md`) 
.then((res) => {
  fetch(res.default)
    .then((res) => res.text())
    .then((res) => setPost(res))
    .catch((err) => console.log(err));
})
}
if(employeeName==="teacher"){
  import(`../../Markdownfiles/Teacher.md`) 
.then((res) => {
  fetch(res.default)
    .then((res) => res.text())
    .then((res) => setPost(res))
    .catch((err) => console.log(err));
})
}

const professions=[
  {
    name:"Doctor",
    imgLink:"https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
  },
  {
    name:"Lawyer",
    imgLink:"https://img.freepik.com/premium-photo/looking-camera-young-attractive-asian-female-lawyer-working-office-with-contract-law-books-when-sitting-desk-law-legal-services-advice-justice-real-estate-concept_35675-2099.jpg"
  },
  {
    name:"Teacher",
    imgLink:"https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2023/03/How-to-become-a-teacher-after-12th.jpg"
  },
  {
    name:"Doctor",
    imgLink:"https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
  },
]


  
  return (
    <div>
      <SearchEmployee/>
      <div className="Employee-component">
      <h1 style={{textAlign:"center"}}>{employeeName} Details</h1>
       <Markdown>{post}</Markdown>
      </div>
    </div>
  );
};

export default EmployeeList;
