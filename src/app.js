import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js"


//routes declaration
//like we have done earliear of making the routes using app.get....we cannot do here as our routes are stored in another folder and for
//industry level practice we will use middlewares ie... app.use()
app.use("/api/v1/users",userRouter)

//https://localhost:8000/api/v1/users/register

export default  app 