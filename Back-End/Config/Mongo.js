
const mongoose = require('mongoose')

const connection = async()=>{

    try{
        const connect = await mongoose.connect("mongodb+srv://jithinpnihtij:Jithin12345678@jithinp.6cusfhd.mongodb.net/?retryWrites=true&w=majority")
        console.log('Database is connected')
        
    }
    catch(err){
        console.log(`error${err}`)
        process.exit()
    }
}

module.exports = connection