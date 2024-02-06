import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import Swal from 'sweetalert'

function Login() {

    const navigate = useNavigate()

    const [login, setlogin] = useState({})

    const handleChange=(event)=>{
        setlogin({...login,[event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) => {
      const { email, password } = login;
      event.preventDefault();
      const response = await axios.post('http://localhost:7000/loginUser', login);
      
      if (response.data.message === "Successful") {
          const userId = response.data.userId;
          console.log(response.data)
          
          localStorage.setItem('token',JSON.stringify(response.data.token))
          
          navigate(`/Feed/${userId}`);
          Swal("Login Successful")
      } else {
        Swal("Wrong Credentials!", "Login Failed")
      }
  };
    

  return (
    <div className='outerform'>
        
        <Form onSubmit={handleSubmit} className='form'>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
          <Form.Control type="text" placeholder="email" onChange={handleChange} name="email" className='textfield'/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

            <Form.Control type="password" placeholder="password" onChange={handleChange} name="password" className='textfield'/>

        </Form.Group>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button type="submit" className='loginBtn'>Login</button>
        </div>
        

        <p style={{textAlign:"center"}}>Don't have an account?</p>
        <div className='su'>
        <Link to={`/signup`}className='signuplink'>SignUp</Link>
        </div>
        
      </Form>

     

    </div>
  )
}

export default Login