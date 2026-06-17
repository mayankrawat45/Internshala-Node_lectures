const { getBlogs, postBlogs } = require("../controller/Blog");

function Blog(app){
    app.get('/blogs',getBlogs)
    app.post('/blogs',postBlogs)
}

module.exports=Blog;