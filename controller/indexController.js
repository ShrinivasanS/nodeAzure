
const hello=(req,res)=>{
    console.log("Hello Request ")
    res.json({
        'message':"Hello There"
    })
}

module.exports={
    hello
}