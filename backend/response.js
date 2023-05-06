const response=(status,data,msg,res)=>{
  res.status(status).json({
    data,
    msg
  })
}
module.exports=response