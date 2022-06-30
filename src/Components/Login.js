import React, { useState } from 'react'

const Login = () => {
    const[loginemail,Setloginemail]=useState('');
    const[loginPassword,SetLoginPassword]=useState('');
    const Logiin=()=>{
        console.log(localStorage.getItem('FormData'));
        const ff=localStorage.getItem('FormData');
        console.log(ff['first name'])
        console.log(loginemail)
        console.log(loginPassword)
    }
  return (
    <div>
        <h1>Login page</h1>
        <form action="">
           
            <div className='form_group'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter Your Email Name' onChange={(e)=>Setloginemail(e.target.value)} />
            </div>
            <div className='form_group'>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password' onChange={(e)=>SetLoginPassword(e.target.value)} />
            </div>
           
        </form>
        <button onClick={Logiin}>Login</button>
    </div>
  )
}

export default Login