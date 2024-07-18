const express = require('express');
const cors = require('cors');
const { connectDB } = require('../config/db.js');
const {apiRouter } = require('../routes/apiListRoute.js');
require('dotenv').config();

//app config
const app = express();
const port = process.env.PORT || 4000;


//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use('/api', apiRouter);
// app.use('/images', express.static('uploads'));
// app.use("/api/user", userRouter)
// app.use("/api/cart", cartRouter)
// app.use("/api/order", orderRouter)

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})