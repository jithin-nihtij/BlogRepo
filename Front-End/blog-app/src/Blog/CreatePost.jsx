import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import './CreatePost.css'
import swal from "sweetalert";

function CreatePost() {
  
  const navigate = useNavigate()

  const {userId}  = useParams()
  console.log(userId);

 
 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setauthor] = useState(userId)
  const [image, setImage] = useState(null);

  

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const token = JSON.parse(localStorage.getItem('token'));
    console.log('Token:', token);

    const formData = new FormData();
    formData.append('title',title)
    formData.append('content',content)
    formData.append('author',author)
    if(image){
      formData.append('image',image)
    }

      try {
       
        const response = await axios.post(
          "http://localhost:7000/createPost",
          { title, content, author, image },
          {
            headers: {
              'Content-Type':'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        
        navigate(`/Feed/${userId}`)
        console.log(response.data);
        swal({
          icon: 'success',
          title: 'Success',
          text: 'Post created successfully!',
      });
      
      } catch (error) {
        console.error("Error creating post:", error);
      }
    };
  

  return (
    <div className="createBody">

    
    <div className="createOuter">
      <Form onSubmit={handleSubmit} className="createInner" encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="title"
            value={title}
            onChange={handleTitle}
            className="createTitle"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <textarea name="postContent" placeholder="content"
            value={content}
            onChange={handleContent}
            className="createContent" />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlFile1">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={handleImage} />
          </Form.Group>
          
        <div className="createBtnDiv">
        <Button type="submit" className="CreateBtn">Create</Button>
        </div>
        
      </Form>
    </div>
    </div>
  );
}

export default CreatePost;
