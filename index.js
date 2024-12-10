import dotenv from "dotenv";
import connectionDB from "./src/db/connectionDB.js";
import { app } from "./src/app.js";

const port = process.env.PORT || 8000;

dotenv.config();

connectionDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running on ${port}`)
    })
}).catch((error) => {
    console.log("MONGO db connection error!!! ", error)
})

