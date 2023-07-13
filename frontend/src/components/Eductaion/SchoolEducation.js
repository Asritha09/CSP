import React from 'react'
import SearchEmployee from '../SearchEmployee/SearchEmployee'
import '../EducationStyles/SchoolEducation.css'
import {AiFillCaretRight} from 'react-icons/ai'
export default function SchoolEducation() {
    return (
        <div>
            <div>
                <SearchEmployee />
                <div className='SchoolEducation-image-section'>
                    <p className='Education-Is-Freedom'>School education</p>
                </div>
                <div>
                    {/* <p className='Aboutus-Content-one'> Gender equality in education benefits every child.</p> */}
                    {/* <p className='WhyEducation'> What is Online Education?</p> */}
                    <p className='Content-two' style={{marginTop:"30px"}}>Basic education begins at a school level. In this level, knowledge and linguistics skills 
                    are imparted to the child. School education provides an excellent opportunity for students to acquire knowledge 
                    in the field of literature, mathematics, science, politics, history, and numerous other important subjects. 
                    Education also plays a major role in shaping the curious minds of young children. It allows them to develop their own
                     personalities and identity.</p>

                    <p className='WhyEducation'>Social Skills</p>
                    <div className='Content-two' style={{marginBottom:"30px"}}>
                        <p><AiFillCaretRight/> Hobbies and Interest </p>
                        <p><AiFillCaretRight/> Communication Skills</p>
                        <p><AiFillCaretRight/> Critical Thinking and Problem Solving Skills</p>
                        <p><AiFillCaretRight/> Creativity Skills</p>
                        <p><AiFillCaretRight/> Decision Making Skills</p>
                        <p><AiFillCaretRight/> Collaborative Skills</p>
                        <p><AiFillCaretRight/> Management Skills</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
