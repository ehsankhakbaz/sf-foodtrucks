const mongoose = require("mongoose");
const { mongo } = require('../config/environment/index.js');

let isConnected;
let db;

const connectDB = async () => {
    if (isConnected) return db;

    try {
        db = await mongoose.connect(mongo.uri, {});
        isConnected = db.connections[0].readyState;
        return db;
    } catch (err) {
        throw new Error(err);
    }
};

export default connectDB;