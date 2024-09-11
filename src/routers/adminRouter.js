import express from "express"
import { adminController } from "../controllers/adminController.js"
import auth from "../middleware/auth.js"
const adminRouter = express.Router()

adminRouter.post('/api/admin/create', adminController.register)
adminRouter.post('/api/admin/login', adminController.login)
adminRouter.post('/api/admin/logout', auth, adminController.logout)
adminRouter.delete('/api/admin/delete', auth, adminController.remove)
adminRouter.get('/api/admin/get', auth, adminController.getAdmin)



export default adminRouter