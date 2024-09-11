import express from "express"
import { menuController } from "../controllers/menuController.js"
import auth from "../middleware/auth.js"
const menuRouter = express.Router()

menuRouter.post('/api/menu/update', auth, menuController.updateMenu)
menuRouter.get('/api/menu/getMenu', menuController.getMenu)


export default menuRouter