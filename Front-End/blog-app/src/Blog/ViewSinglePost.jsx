import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ViewPost.css";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert'

function ViewSinglePost() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:7000/getSinglePost/${_id}`).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, [_id]);

  const handleDelete = async (id) => {
    const confirmation = await Swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to get it back!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes!'
  });
    if (confirmation) {
       await axios.delete(
        `http://localhost:7000/deletePost/${id}`
      );
      Swal(
        'Deleted!',
        'Your post has been deleted.',
        'success'
    );
      navigate(`/MyPosts/${userId}`);
    }
  };

  return (
    <div className="viewPage">
      <div className="btns">
        <Link to={`/editPost/${userId}/${_id}`}>
         <CiEdit className="editBtn"/> 
        </Link>
        <Link>
        <MdDelete onClick={() => handleDelete(_id)} className="deleteBtn"/>
        </Link>
        
      </div>

      <div>
        {post && (
          <>
            <p>@{post.username}</p>
            <img src={`http://localhost:7000/uploads/${post.image}`} alt={post.title} />
            <div className="content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

export default ViewSinglePost;
