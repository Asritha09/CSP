import React from 'react'
import SearchEmployee from '../SearchEmployee/SearchEmployee'
import '../EducationStyles/WomenEducation.css'
export default function WomenEducation() {
    return (
        <div>
            <div>
                <SearchEmployee />
                <div className='WomenEducation-image-section'>
                    <p className='Education-Is-Freedom'>Girl's education</p>
                </div>
                <div>
                    <p className='Aboutus-Content-one'> Gender equality in education benefits every child.</p>
                    {/* <p className='WhyEducation'>WHY EDUCATION IS IMPORTANT</p> */}
                    <p className='Content-two'>Investing in girls’ education transforms communities, countries and the entire world. Girls who receive an education are less likely to marry young and more likely to lead healthy, productive lives. They earn higher incomes, participate in the decisions that most affect them, and build better futures for themselves and their families.

                        Girls’ education strengthens economies and reduces inequality. It contributes to more stable, resilient societies that give all individuals – including boys and men – the opportunity to fulfil their potential.

                        But education for girls is about more than access to school. It’s also about girls feeling safe in classrooms and supported in the subjects and careers they choose to pursue – including those in which they are often under-represented.</p>
                </div>
            </div>
        </div>
    )
}
