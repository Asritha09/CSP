import React from 'react'
import SearchEmployee from '../SearchEmployee/SearchEmployee'
import '../EducationStyles/OnlineEducation.css'
export default function OnlineEducation() {
    return (
        <div>
            <div>
                <SearchEmployee />
                <div className='OnlineEducation-image-section'>
                    <p className='Education-Is-Freedom'>Online education</p>
                </div>
                <div>
                    {/* <p className='Aboutus-Content-one'> Gender equality in education benefits every child.</p> */}
                    <p className='WhyEducation'> What is Online Education?</p>
                    <p className='Content-two'>Simply put Online education refers to a method of carrying out teaching and learning
                        processes through technology. Students and teachers make use of internet technology to experience learning
                        opportunities outside the vicinity of a traditional classroom. Students and teachers interact with each other
                        through options like virtual classes/sessions, Chabot’s, emailing, messaging, etc.</p>

                    <p className='WhyEducation'>How Does Online Education Work?</p>
                    <p className='Content-three'>Online study is conducted through a Learning Management System (LMS). Students log in and access the dashboard to find the course content which is generally in the format of modules, further divided into lessons. They also have the option to connect with the teachers, join a virtual session, chat with peers/teachers, etc. through the dashboard. Some online schools have also gone miles ahead with mobile applications, a fixed number of online classes, and ‘on-request’ educator support, etc. for an enhanced experience.

                        Like traditional education, this modern education medium too requires coursework completion within the defined deadlines. Students need to complete and upload their assignments, post which the teachers share their feedback. In a 100% virtual learning environment assignments are also conducted virtually. All the details of the student’s performance (assignments, post-lesson tests, assessments, etc.) are recorded within the LMS.

                        This information is collated and used to gauge the effectiveness of the online teaching and learning processes. And even to plan a remedial action for the identified learning gaps. Some platforms allow offline assignments, while others can stick to completely online formats.</p>
                </div>
            </div>
        </div>
    )
}
