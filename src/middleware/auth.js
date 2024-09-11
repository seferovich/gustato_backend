import jwt from "jsonwebtoken"
import Admin from "../models/adminModel.js"


const auth = async (req, res, next) => {
    try{
        const token = req.header("Authorization")?.replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const admin = await Admin.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if(!admin){
            throw new Error('Not found')
        }
        req.token = token 
        req.admin = admin
        next()
    } catch (e) {
        res.status(401).send(e)
    }
}


export default auth