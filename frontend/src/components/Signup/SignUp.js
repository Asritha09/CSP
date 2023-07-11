import React from 'react'
import '../Signup/SignUp.css'
// import Header from './Header'

export default function SignUp() {
    return (
        <div>
            {/* <Header/> */}
            <h1 style={{textAlign:"center"}}>SignUp</h1>
            <div className='Form'>

                <label className='Label'>Name</label>
                <input type='text' className='Input'></input>

                <label className='Label'>Phone Number</label>
                <input type='number' className='Input'></input>

                <label className='Label'>Email</label>
                <input type='email' className='Input'></input>
                
                <label className='Label'>What is Yor Goal ?</label>
                <input type='text' className='Input'></input>


                <label className='Label'>Designation</label> 

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>

                    <div style={{ display: 'flex' }}>
                        <input type='radio' className='RadioInput' name='radio' value="Faculty"></input>
                        <span className='RadioOption'> Faculty</span>
                    </div>

                  

                    <div style={{ display: 'flex' }}>
                        <input type='radio' className='RadioInput' name='radio' value="Student"></input>
                        <span className='RadioOption'> Student</span>
                    </div>


                </div>



                <label className='Label'>Hobbies</label>  


                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>


                    <div style={{ display: 'flex' }}>
                        <input type='checkbox' className='RadioInput' name='radio' value="Satisfactory"></input>
                        <span className='RadioOption'> Playing</span>
                    </div>


                    <div style={{ display: 'flex' }}>
                        <input type='checkbox' className='RadioInput' name='radio' value="Good"></input>
                        <span className='RadioOption'> Reading</span>
                    </div>


                    <div style={{ display: 'flex' }}>
                        <input type='checkbox' className='RadioInput' name='radio' value="Satisfactory"></input>
                        <span className='RadioOption'> Studying</span>
                    </div>


                    <div style={{ display: 'flex' }}>
                        <input type='checkbox' className='RadioInput' name='radio' value="Good"></input>
                        <span className='RadioOption'> Watching</span>
                    </div>


                </div>

                <p className='GetInvolved'>SignUp</p>
            </div>
        </div>
    )
}
