import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors" 
import adminRouter from "./routers/adminRouter.js"
import menuRouter from "./routers/menuRouter.js"


// Config
dotenv.config()
const app = express()
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}))
app.use(helmet())
app.use(cors())
app.use(adminRouter)
app.use(menuRouter)


export default app