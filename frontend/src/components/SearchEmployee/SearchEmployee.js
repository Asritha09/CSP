import React, { useState, useContext } from 'react'
import '../SearchEmployee/SearchEmployee.css'
import { useNavigate,useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { MainContext } from '../../ContextStore/MainContext';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchEmployee() {
  const [searchActive, setSearchActive] = useState(false);
  const { setEmployeeName } = useContext(MainContext)
  const [isOpen, setIsOpen] = React.useState(false);
    
 
  
      const handleMouseEnter = () => {
          setIsOpen(true);
      };
  
      const handleMouseLeave = () => {
          setIsOpen(false);
      };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };
  const navigate = useNavigate()
  const location=useLocation()
  const { pathname } = location

  const professions = [
    {
      name: "doctor",
      imgLink: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
    },
    {
      name: "lawyer",
      imgLink: "https://img.freepik.com/premium-photo/looking-camera-young-attractive-asian-female-lawyer-working-office-with-contract-law-books-when-sitting-desk-law-legal-services-advice-justice-real-estate-concept_35675-2099.jpg"
    },
    {
      name: "teacher",
      imgLink: "https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2023/03/How-to-become-a-teacher-after-12th.jpg"
    },

  ]

  return (
    <div>
      <div className="header">
        <div className='Logo-and-company'>
          <img src='logo123.png'
            alt='logo' className='Logo'></img>
          <div className='Company'>
            <p style={{ fontSize: "25px", color: "white", paddingLeft: "10px", fontWeight: "bold", paddingTop: "10px" }}>Guider </p>

          </div>

        </div>
        <div className='search-part'>
          <div className="search-icon" onClick={toggleSearch}>
            <BsSearch />
          </div>
          <input
            type="text"
            className={`search-input ${searchActive ? 'active' : ''}`}
            placeholder="Search by first name"
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          {searchActive && <p className='HomePageHeaderItems' onClick={() => navigate('/details')}>Search</p>}

          <p className='HomePageHeaderItems' onClick={() => navigate('/home')}>Home</p>
          <p className='HomePageHeaderItems' onClick={() => navigate('/about')}>About US</p>
          <p className='HomePageHeaderButtons' onClick={() => navigate('/')}>Logout</p>
          <Dropdown
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        show={isOpen}
                    >
                        <Dropdown.Toggle variant="light" id="dropdown-hover" className='HomePageHeaderItems'>
                            <span>Our Misssion</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>navigate('/online-education')}>Online Education</Dropdown.Item>
                            <Dropdown.Item onClick={()=>navigate('/women-education')}>Women Education</Dropdown.Item>
                            <Dropdown.Item onClick={()=>navigate('/school-education')}>School Education</Dropdown.Item>
                        </Dropdown.Menu>
          </Dropdown>


        </div>
      </div>
      {
        pathname==='/search' &&
      
      <div className="Employees-List">
        {professions.length > 0 ? (
          <ul className="employee-list" >
            {professions.map((employee, id) => (
              <div className="employee" style={{ cursor: "pointer" }} key={id} onClick={() => {
                navigate('/details')
                setEmployeeName(employee.name)
              }}>

                <li className="employee-item">
                  <img src={employee.imgLink} alt="Avatar" className="employee-avatar" />
                </li>
                <span className="employee-name">{employee.name}</span>
              </div>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center", color: 'white' }}>No employees found.</p>
        )}
      </div>
}
    </div>
  )
}
