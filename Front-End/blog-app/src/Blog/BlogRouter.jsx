import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogHome from './BlogHome'
import CreatePost from './CreatePost'
import SignUp from './SignUp'
import Login from './Login'
import Feed from './Feed'
import MyPosts from './MyPosts'
import EditPost from './EditPost'
import ViewSinglePost from './ViewSinglePost'

function BlogRouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BlogHome/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Feed/:userId' element={<Feed/>}/>
                <Route path='/createPost/:userId' element={<CreatePost/>}/>
                <Route path='/MyPosts/:userId' element={<MyPosts/>}/>
                <Route path='/editPost/:userId/:_id' element={<EditPost/>}/>
                <Route path='/viewPost/:userId/:_id' element={<ViewSinglePost/>}/>

            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default BlogRouter