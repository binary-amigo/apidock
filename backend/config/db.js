const mongoose = require('mongoose')


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://imrankh8602:webarebears@apidock-cluster0.em7nfw2.mongodb.net/api').then(()=>{
        console.log('MongoDB is connected');
    })
}

module.exports = { connectDB }