const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3005
mongoose.connect('mongodb://localhost:27017/tejas_bhirud',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");


app.use("/api", categoryRoutes);
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use('/uploads', express.static('uploads'));



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))