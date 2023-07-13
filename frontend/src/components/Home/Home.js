import React from 'react'
import '../Home/Home.css'
import SearchEmployee from '../SearchEmployee/SearchEmployee'

export default function Home() {
    return (
        <div>
            <SearchEmployee/>
            <div className='HomePage-image-section'>
                <p className='Education-Is-Freedom'>Education is freedom</p>
            </div>
            <div>
                <p className='Content-one'>WE BELIEVE EVERY CHILD DESERVES ACCESS TO QUALITY EDUCATION. EDUCATION MEANS OPPORTUNITIES, EMPOWERMENT AND PROTECTION FROM EXPLOITATION. EDUCATION IS FREEDOM.</p>
                <p className='WhyEducation'>WHY EDUCATION IS IMPORTANT</p>
                <p className='Content-two'>Education is not how well you can read and write but whether you can communicate with and understand the world around you. A good education not only teaches you skills but also helps you
                    broaden your horizons, gain better perspective, and teaches you to think for yourself. People today are quite aware and comfortable speaking about social injustices and other pressing
                    issues. This can be attributed to the increased access to education around the world, which in turn has
                    made society more accepting and open-minded. Therefore, education is an element of human evolution. The importance of education is also pronounced in areas of creativity and innovation.
                    Education encourages thinking outside the box and experimenting with new ideas.</p>
            </div>
        </div>
    )
}
