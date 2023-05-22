const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;


//routes

const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); //dotenv ile env dosyasındaki MONGO_URI'yi çekiyoruz
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
};

//middlewares
app.use(express.json());
app.use(cors());


app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);


app.listen(port, () =>{
    connect();
    console.log(`Server started on port ${port}`)
});