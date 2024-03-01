const mongoose = require("mongoose");
const uri = "mongodb+srv://naveen70:neevan07@cluster0.vzfpkjj.mongodb.net/";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };
