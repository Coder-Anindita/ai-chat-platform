import express from "express"
import dotenv from "dotenv"
import connectToDatabase from "./db/connectToDatabase.js"
import cors from "cors"
import testRoute from "./test/test.routes.js"
import operaionRoutes from "./routes/operation.routes.js"
dotenv.config()


const app=express()
const PORT=8080;

app.use(express.json({limit:"50kb"}))
app.use(cors())
app.use("/api/v1/test",testRoute)
app.use("/api/v1",operaionRoutes)
app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
    connectToDatabase()
})






// let testFunction=async(req,res)=>{
//     try{
//         let response=await fetch("https://api.openai.com/v1/chat/completions",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//                 "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
//             },
//             body:JSON.stringify({
//                 model:"gpt-4o-mini",
//                 messages: [{
//                         role: "user",
//                         content: req.body.message
                    
//                 }]

//             })
//         })

//         let result=await response.json()
//         if(response.ok){
//             console.log(result.choices[0].message.content)
//             res.send(result.choices[0].message.content)

//         }

//     }
    
//     catch(e){
//         console.log(e)
//     }


// }

// app.post("/test",testFunction)