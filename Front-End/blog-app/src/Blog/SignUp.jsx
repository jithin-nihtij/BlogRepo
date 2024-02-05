import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import swal from 'sweetalert'

function SignUp() {

    const navigate = useNavigate()

    const [user, setuser] = useState({
        username:"",
        email:"",
        password:""
})
    const handleChange=(event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }

    const handleSubmit=async(event)=>{
        const {username,email,password} = user
        event.preventDefault()
        const userCreate = await axios.post('http://localhost:7000/createUser',user)
        console.log(userCreate.data)
        navigate('/login')
        swal({
          icon: 'success',
          title: 'Success',
          text: 'Account created successfully!',
      });

    }


  return (

    <div className='signupouter'>

        <Form onSubmit={handleSubmit} className='signupinner'>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="text" placeholder="username" onChange={handleChange} name="username" required className='signText'/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="email" placeholder="email" onChange={handleChange} name="email" required className='signText'/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

            <Form.Control type="password" placeholder="password" onChange={handleChange} name="password" required className='signText'/>

        </Form.Group>
        
        <div style={{display:"flex",justifyContent:"center"}}>
        <button type="submit" className='signupBtn'>Create</button>
        </div>


        <p style={{textAlign:"center",color:"white"}}>Already have an account?</p>
        <div className='li'>
        <Link to={`/login`} className='loginLink'>Login</Link>
        </div>
        

      </Form>

     
    </div>
  )
}

export default SignUp