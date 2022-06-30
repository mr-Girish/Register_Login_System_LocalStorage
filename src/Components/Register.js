import React, { useState } from 'react'

const Register = () => {
    const[Fname,SetFname]=useState('')
    const[Lname,SetLname]=useState('')
    const[email,SetEmail]=useState('')
    const[password,SetPassword]=useState('')
    const[confirmpass,SetConfirmpass]=useState('')


    const Singup=()=>{
        var data={
            "first name":Fname,
            "last name":Lname,
            "Email":email,
            "Password":password,
            "Confirm password":confirmpass
        }
        console.log(data)
        localStorage.setItem("FormData",JSON.stringify(data))
        console.log(typeof data)
    }
  return (
    <div>
        <h1>Register page</h1>
        <form action="">
            <div className='form_group'>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='Enter Your First Name' onChange={(e)=>SetFname(e.target.value)} />
            </div>

            <div className='form_group'>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Enter Your Last Name'  onChange={(e)=>SetLname(e.target.value)}  />
            </div>
            <div className='form_group'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter Your Email Name'  onChange={(e)=>SetEmail(e.target.value)} />
            </div>
            <div className='form_group'>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password'  onChange={(e)=>SetPassword(e.target.value)} />
            </div>
            <div className='form_group'>
                <label htmlFor="">Confirm Password</label>
                <input type="text" placeholder='Confirm Password'  onChange={(e)=>SetConfirmpass(e.target.value)} />
            </div>
        </form>
        <button onClick={Singup}>Singup</button>
    </div>
  )
}

export default Register