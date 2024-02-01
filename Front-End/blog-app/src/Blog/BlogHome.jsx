import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./BlogHome.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function BlogHome() {
  const [post, setpost] = useState([]);
  const [date, setdate] = useState();

 

  return (
    <div>
      <Navbar className="blogNav">
        <Container>
          <Navbar.Brand href="#home">
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="signFlex">
            <Nav>
              <Link to={`/login`} className="link">
                <Nav.Link href="#link" className="lgin">
                  Log In
                </Nav.Link>
              </Link>
              <Link to={`/signup`} className="link">
                <Nav.Link href="#link" className="signup">
                  Sign Up
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="parallax">
        <Parallax pages={3} style={{ backgroundColor: "black" }}>
          <ParallaxLayer offset={0} speed={1}>
            <img
              style={{ height: "100vh" }}
              src="https://images.unsplash.com/photo-1598024055266-e772a5f8c128?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div>
              <h1 className="adventure">Join Us</h1>
              <h1 className="adventure">Share Your Adventures</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-4}>
            <div className="heading">
              <h1>Share Your Story: Blogging Made Simple</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={5}>
            <div className="community">
              <h1>Create A Community</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={5}>
            <div className="community">
              <h1>Create A Community</h1>
              <h1>Create A Community</h1>
              <h1>Create A Community</h1>
              <h1>Create A Community</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={-7} factor={2.5} horizontal>
            <div className="effortless">
              <h1>Effortles Publishing</h1>
              <h1>Effortles Publishing</h1>
              <h1>Effortles Publishing</h1>
              <h1>Effortles Publishing</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={-6}>
            <img
              style={{ height: "100vh", objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1588257857801-bd6bf998c023?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={4}>
           
              <div className="signuppara">
                <h1>Sign Up.</h1>
                <h1>Create.</h1>
                <h1>Publish.</h1>
              </div>

             
         
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default BlogHome;
