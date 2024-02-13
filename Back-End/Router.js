const express = require('express')
const createBlogUser = require('./Controller/BlogUserCreate')
const createBlogComment = require('./Controller/BlogCommentCreate')
const createBlogPost = require('./Controller/BlogPostCreate')
const editPost = require('./Controller/BlogPostEdit')
const loginUser = require('./Controller/LoginUser')
const editComment = require('./Controller/BlogCommentEdit')
const blogGetPosts = require('./Controller/BlogGetPosts')
const blogGetUser = require('./Controller/BlogGetUsers')
const protect = require('./MiddleWare/TokenVerify')
const blogCommentDelete = require('./Controller/BlogCommentDelete')
const blogPostDelete = require('./Controller/BlogPostDelete')
const getSinglePost = require('./Controller/BlogGetSinglePost')
const blogGetSingleUser = require('./Controller/BlogGetSingleUser')
const userPosts = require('./Controller/UserPosts')

const uploaded = require('./MiddleWare/ImageUpload')

 

const router = express.Router()

const middleware = [protect]



router.route('/createUser').post(createBlogUser)
router.route('/createComment').post(createBlogComment) 
router.route('/createPost').post(middleware,uploaded.single('image'),createBlogPost) 
router.route('/editPost/:id').put(middleware,editPost)
router.route('/editComment/:id').put(editComment)
router.route('/deleteComment/:id').delete(blogCommentDelete) 
router.route('/deletePost/:id').delete(blogPostDelete) 
router.route('/loginUser').post(loginUser)
router.route('/getPosts').get(middleware,blogGetPosts)
router.route('/getUser').get(middleware,blogGetUser)
router.route('/userPosts/:id').get(middleware,userPosts)
router.route('/getSingleUser/:id').get(blogGetSingleUser)
router.route('/getSinglePost/:id').get(getSinglePost) 

  
module.exports=router 