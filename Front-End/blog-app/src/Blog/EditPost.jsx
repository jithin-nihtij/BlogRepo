import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import swal from 'sweetalert'

function EditPost() {

  const naviagte = useNavigate()

  const {userId} = useParams()
  console.log("userid",userId)

  const {_id } = useParams()
  console.log("id",_id)
  
  const [post, setpost] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:7000/getSinglePost/${_id}`)
      .then((disp) => {
        setpost(disp.data);
        console.log("single post", disp.data);
      })
      .catch((error) => {
        console.error("Error fetching single post:", error);
      });
  }, [_id]);
  

  const [title, settitle] = useState(post.title)
  const [content,setContent] = useState(post.content)

  const handleTitle=(event)=>{
    settitle(event.target.value)
  }

  const handleContent=(event)=>{
      setContent(event.target.value)
  }

  const token = JSON.parse(localStorage.getItem('token'));

  const handleUpdate = async (event)=>{
    event.preventDefault()
    const confirmation = await swal({
      title: 'Are you sure?',
      text: 'You want to make changes!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes!'
    })
    if(confirmation){
      await axios.put(
        `http://localhost:7000/editPost/${_id}`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        
      );
      swal(
        
        'Your Post has been edited',
        'Success'
      )
     
    }
    naviagte(`/MyPosts/${userId}`)
  }

  return (
    <div className='editPage'>
    
      <img src={post.image} style={{width:"100%",objectFit:"cover"}} alt="" />
    
        <div className='editForm'>
        <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="title"
            defaultValue={post.title}
            onChange={handleTitle}
            className='editField'
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         
          <textarea 
            className='editArea'
            placeholder="content"
            defaultValue={post.content}
            onChange={handleContent} />

        
        </Form.Group>
      <div className='editBtnn'>
      <button type="submit" className='makechanges'>Make Changes</button>
      </div>
       
      </Form>
        </div>
       

    </div>
  )
}

export default EditPost