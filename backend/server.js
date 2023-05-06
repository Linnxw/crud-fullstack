const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const cors=require("cors")
const db=require("./connection")
const response=require("./response")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get("/user/:id",(req,res)=>{
  const {id}=req.params
  const sql=`SELECT * FROM user WHERE id = '${id}'`
  db.query(sql,(err,rows,fields)=>{
    if(err) throw err
    response(200,rows,"menampilkan data user",res)
  })
})
app.get("/user",(req,res)=>{
  const sql='SELECT * FROM user'
  db.query(sql,(err,rows,fields)=>{
    if(err) throw err
     response(200,rows,"berhasil mendapatkan data user",res)
    
  })
})

app.post("/user",(req,res)=>{
  const {nama,email,alamat}=req.body
  const sql=`INSERT INTO user (nama,email,alamat) VALUES ('${nama}','${email}','${alamat}')`
  db.query(sql,(err,fields)=>{
    if(err) throw err
    response(200,req.body,"berhasil menambahkan data",res)
  })
})

app.put("/user/:id",(req,res)=>{
  const {nama,email,alamat}=req.body
  
  const sql=`UPDATE user SET nama = '${nama}', email = '${email}', alamat = '${alamat}' WHERE id = '${req.params.id}'`
  db.query(sql,(err,fields)=>{
    if(err) throw err
    response(200,req.body,"berhasil edit data",res)
  })
})

app.delete("/user/:id",(req,res)=>{
   const sql=`DELETE FROM user WHERE id = '${req.params.id}'`
   db.query(sql,(err,fields)=>{
     if(err) throw err
     response(200,{},"berhasil hapus data",res)
   })
})
app.listen(3000,()=>{
  console.log("server runing")
})