import React from 'react'
import '../About/AboutUs.css'
// import Header from './Header'
import SearchEmployee from '../SearchEmployee/SearchEmployee'

export default function AboutUs() {
    return (
        <div>
            <div>
                <SearchEmployee />
                <div className='Aboutus-image-section'>
                    <p className='Education-Is-Freedom'>Education is Mother of Leadership</p>
                </div>
                <div>
                    <p className='Aboutus-Content-one'>We believe that education is the key for better economic opportunities, healthier families, individual freedom and empowerment. We recognize that education is not just a fundamental right; but also a powerful force that brings social change, innovation and transformation in a country.</p>
                    {/* <p className='WhyEducation'>WHY EDUCATION IS IMPORTANT</p> */}
                    <p className='Content-two'>Children are the faces of the future and their education is one of the most critical factors to help a community rise above poverty.
                        This is aimed in improving the level of education and literacy in rural communities in Ghana and helping disadvantaged children realize and accomplish their full potential.
                        We seek to ensure quality education for children in rural communities in order to create equal opportunities for all children to participate in and benefit from economic growth. This way we aim to directly contribute to the Sustainable Development Goals worldwide.</p>
                </div>
            </div>
        </div>
    )
}
