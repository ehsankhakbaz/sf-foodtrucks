import { port } from './config/environment/index.js';
import app from './app.js';
import connectDB from './db/index.js';

const start = async () => {
    try {
        console.log('Connecting to database');
        connectDB().then(
        () => {
            console.log("Connected to MongoDB Successfully");
            return app.listen(port);
        })
        .then((res) => {
            console.log (`GraphQL is up at port ${port}, yay!`);
        });
        
    } catch {
        console.log (`GraphQL didn't start`);
    }

    app.get('/', (req, res) => {
        res.send('<h1>Hey, The SF Foodtrucks API is up!</h1>View the frontend: <a href="http://localhost:3000/">http://localhost:3000/</a>')
    })
};

start();