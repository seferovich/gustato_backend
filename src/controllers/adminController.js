import Admin from "../models/adminModel.js";


const register = async (req, res) => {
    const admin = new Admin(req.body)
    try{
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(201).send({admin, token})
    }catch(e){
        res.status(400).send(e)
        console.log(e)
    }
}

const login = async (req, res) => {   
    try{
        const admin = await Admin.findByCredentials(req.body.username, req.body.password)
        const token = await admin.generateAuthToken()
        return res.status(200).send({admin, token})
    }catch(e){
        return res.status(500).send(`Incorrect password or username!`)
        console.log(e)
    }
}

const logout = async (req, res) => {
    try{
        req.admin.tokens = req.admin.tokens?.filter((token) => {
            return token.token !== req.token
        })
        await req.admin.save()
        res.send('Logged out')
    }catch(e){
        res.status(500).send(e)
    }
        
}


const getAdmin = async (req, res) => {
    try{
        res.status(200).send(req.admin)
    }catch(e){
        res.status(500).send(e)
    }
        
}

const remove = async (req, res) => {
    try {
        await req.admin.remove()
        res.send(req.admin)
    } catch (e) {
        res.status(500).send(e)
    }
}


export const adminController = {
    register,
    login,
    logout,
    getAdmin,
    remove
}