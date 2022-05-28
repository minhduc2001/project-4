const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://root:462001@cluster0.uu5lt.mongodb.net/music-player?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("ok");
    } catch (error) {
        console.log('err');
    }
}
module.exports = { connect };