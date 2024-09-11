import mongoose from "mongoose"
import app from "./app.js"


const PORT = process.env.PORT || 9000
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(PORT, () => console.log(`Server is up on port ${PORT}`))
}).catch((e) => console.log(`${e}, did not connect.`))