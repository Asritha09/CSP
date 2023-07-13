import React from 'react'
import '../Signup/SignUp.css'
import { useNavigate } from 'react-router-dom'
// import Header from './Header'

export default function Login() {
    const navigate=useNavigate()
    return (
        <div>
            {/* <Header/> */}
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className='Form'>

                <label className='Label'>Username</label>
                <input type='text' className='Input'></input>

                
                <label className='Label'>password</label>
                <input type='password' className='Input'></input>
            
                <p className='GetInvolved'  onClick={()=>navigate('/search')}>Login</p>

                <p className='DontHave'>Don't have an Account ? <span style={{fontWeight:"bold",color:"#1877f2",cursor:"pointer"}}
                onClick={()=>navigate('/signup')}
                >SignUp</span></p>
            </div>
        </div>
    )
}
