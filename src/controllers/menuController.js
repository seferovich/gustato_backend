import Menu from "../models/menuModel.js"



const updateMenu = async (req, res) => {
    try {
        const items = req.body
        console.log(req.body)
        let menu = await Menu.findOne({})

        if (!menu) {
            // Create a new menu if none exists
            menu = new Menu(items)
        } else {
            // Update the menu
            menu.set(items)
        }

        // Save the menu to the database
        await menu.save()

        res.status(200).send(menu)
    } catch (error) {
        res.status(400).send({ message: "Failed to update the menu", error })
        console.log(error)
    }
}

const getMenu = async(req, res) => {
    try {
        let menu = await Menu.findOne({})
        if(!menu){
            menu = new Menu()
            await menu.save()
        }
        

        res.status(200).send(menu)
        

    } catch (error) {
        res.status(400).send(error)
    }
}



export const menuController = {
    updateMenu,
    getMenu
}