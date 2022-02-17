const mongoose = require("mongoose");

const dbName = "productsDb";

mongoose.connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> {
        console.log(`You are connected to ${dbName} database dude`);
    })
    .catch((err)=>{
        console.log(`There was an error connecting to the db, read: ${err}`);
    })
