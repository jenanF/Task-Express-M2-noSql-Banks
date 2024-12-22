const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(
        "mongodb+srv://JENAN:of5mCOwK89n32NYB@cluster0.f60jm.mongodb.net/"
    );
    console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;

