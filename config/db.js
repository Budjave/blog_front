const dotenv = require('dotenv')
const mongoose = require('mongoose')
const colors = require('colors')
dotenv.config()
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongodb holbogdloo ${mongoose.connection.host}` .bgMagenta.white)
    } catch (error) {
        console.log(`mongodb holbogdsongui ${error}`.bgRed.white)
    }
}

module.exports = connectDB
// const connectDB = async () =>{
//     const connect = await mongoose.connect(process.env.DB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,

//     });
//     reut
// }