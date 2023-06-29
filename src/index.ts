import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

import person from "./routers/peopleRouters";

app.use(person);


app.listen(process.env.PORT, () => {
    console.log('Server is running at port: ' + process.env.PORT);
})