
function getBlogs(req,res){
    res.send("using mvcs")
}

function postBlogs(req,res){
    res.send("using nothing but mvs")
}

module.exports ={getBlogs,postBlogs}