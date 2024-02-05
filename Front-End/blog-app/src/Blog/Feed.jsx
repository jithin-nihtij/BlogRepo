import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./Feed.css";
import { Button, Card } from "react-bootstrap";
import swal from "sweetalert";
import moment from "moment-timezone";

function Feed() {
  const { userId } = useParams();

  const [post, setpost] = useState([]);

  const [search, setsearch] = useState("");

  const [filteredPosts, setFilteredPosts] = useState([]);

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  

  useEffect(() => {
    axios
      .get("http://localhost:7000/getPosts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((disp) => {
        const formattedPosts = disp.data.map((post) => {
          const formattedDate = moment(post.createdAt)
            .tz("YourTimeZone")
            .format("DD/MM/YYYY");
          const editedDate = post.editedAt
            ? moment(post.editedAt).tz("YourTimeZone").format("DD/MM/YYYY")
            : null;

          return {
            ...post,
            createdAt: formattedDate,
            editedAt: editedDate,
          };
        });

        formattedPosts.sort(
          (a, b) =>
            new Date(b.editedAt || b.createdAt) -
            new Date(a.editedAt || a.createdAt)
        );

        setpost(formattedPosts);
        setFilteredPosts(formattedPosts)
        console.log(formattedPosts);
      });
  }, []);

  const handleChange = (event) => {
    
    setsearch(event.target.value);

    if(event.target.value){

      const filteredPosts = post.filter((item) =>
      item.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filteredPosts)

    }

    else{
      setFilteredPosts(post)
    }
  };


 

  const logout = async () => {
    const confirmation = await swal({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log out!",
    });
    if (confirmation) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="body">
      <nav className="feedNav">
        <div>
          <svg width="60" height="60" viewBox="0 0 250 80.65">
            <defs id="SvgjsDefs1226"></defs>
            <g
              id="SvgjsG1227"
              featurekey="nameFeature-0"
              transform="matrix(2.2776226562843735,0,0,2.2776226562843735,-3.645162078868662,-27.329875374393605)"
              fill="#111111"
            >
              <path d="M23.01 20.688 c0 1.9432 -0.65408 3.8078 -1.8158 5.3116 c1.162 1.504 1.8161 3.3685 1.8161 5.3116 c0 4.7908 -3.8974 8.6884 -8.6884 8.6884 l-2.2625 0 c-0.58252 0 -1.1411 -0.23141 -1.5529 -0.64316 l-8.2628 -8.2628 c-0.85784 -0.85756 -0.85756 -2.248 0 -3.1056 s2.248 -0.85756 3.1056 0 l7.6196 7.6196 l1.3528 0 c2.3688 0 4.296 -1.9274 4.296 -4.296 c0 -1.3956 -0.6838 -2.7096 -1.829 -3.5156 c-0.58468 -0.4112 -0.93252 -1.0813 -0.93252 -1.7961 s0.34781 -1.3849 0.93252 -1.7961 c1.1452 -0.80568 1.829 -2.12 1.829 -3.5156 c0 -2.3688 -1.9274 -4.296 -4.296 -4.296 l-8.3289 0 l0 3.9768 l7.6192 7.6196 c0.85784 0.85756 0.85784 2.248 0 3.1056 c-0.85756 0.85784 -2.248 0.85784 -3.1056 0 l-8.2628 -8.2628 c-0.41176 -0.41176 -0.64316 -0.9704 -0.64316 -1.5529 l0 -7.0824 c0 -1.2128 0.98328 -2.196 2.196 -2.196 l10.525 0 c4.7908 0 8.6884 3.8974 8.6884 8.6884 z M45.208 36.2506 c0.62808 0.62808 0.8158 1.5727 0.47596 2.3932 s-1.1406 1.3555 -2.0289 1.3555 l-16.525 0 c-1.2128 0 -2.196 -0.98328 -2.196 -2.196 l0 -23.608 c0 -1.2128 0.98328 -2.196 2.196 -2.196 s2.196 0.98328 2.196 2.196 l0 21.412 l9.0278 0 l-4.5136 -4.5136 c-0.85784 -0.85756 -0.85784 -2.248 0 -3.1056 c0.85756 -0.85756 2.248 -0.85756 3.1056 0 z M56.082 19.412 c5.6764 0 10.294 4.6176 10.294 10.294 s-4.6176 10.294 -10.294 10.294 s-10.294 -4.6176 -10.294 -10.294 s4.6176 -10.294 10.294 -10.294 z M56.082 35.608 c3.2543 0 5.902 -2.6476 5.902 -5.902 s-2.6476 -5.902 -5.902 -5.902 s-5.902 2.6476 -5.902 5.902 s2.6476 5.902 5.902 5.902 z M86.659 19.412 c1.2128 0 2.196 0.98328 2.196 2.196 l0 23.608 c0 1.2128 -0.98328 2.196 -2.196 2.196 s-2.196 -0.98328 -2.196 -2.196 l0 -7.1249 c-1.6657 1.167 -3.6908 1.8543 -5.8744 1.8543 c-5.6612 0 -10.267 -4.6056 -10.267 -10.267 s4.6056 -10.267 10.267 -10.267 c2.1952 0 4.23 0.69476 5.9008 1.873 c0.15676 -1.0593 1.067 -1.873 2.1697 -1.873 z M78.58900000000001 35.5528 c3.2392 0 5.8744 -2.6353 5.8744 -5.8744 s-2.6353 -5.8744 -5.8744 -5.8744 s-5.8744 2.6353 -5.8744 5.8744 s2.6353 5.8744 5.8744 5.8744 z M101.07000000000002 19.412 c5.6764 0 10.294 4.6176 10.294 10.294 s-4.6176 10.294 -10.294 10.294 s-10.294 -4.6176 -10.294 -10.294 s4.6176 -10.294 10.294 -10.294 z M101.07000000000002 35.608 c3.2543 0 5.902 -2.6476 5.902 -5.902 s-2.6476 -5.902 -5.902 -5.902 s-5.902 2.6476 -5.902 5.902 s2.6476 5.902 5.902 5.902 z"></path>
            </g>
          </svg>
        </div>

        <div className="search">
          <form >
          <input
            type="text"
            name=""
            id=""
            placeholder="search blogger"
            onChange={handleChange}
          />
          </form>
          
        </div>

        <div>
          <a onClick={logout} className="logout" style={{}}>
            Log Out
          </a>
        </div>
      </nav>

      {filteredPosts.map((item) => (
        <div className="feed">
          <Card className="feedCard">
            <p>@{item.username}</p>
            <img src={item.image} />
            <Card.Body>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </Card.Body>
            <p style={{ fontSize: "10px" }}>{item.createdAt}</p>

            {item.editedAt && (
              <p style={{ fontSize: "10px" }}>Edited at: {item.editedAt}</p>
            )}
          </Card>
        </div>
      ))}

      <div className="iconLinks">
        <Link to={`/MyPosts/${userId}`}>
          <BsFillGrid3X3GapFill className="mpBtn" />
        </Link>
        <Link to={`/createPost/${userId}`}>
          <IoMdAdd className="addBtn" />
        </Link>
      </div>
    </div>
  );
}

export default Feed;
