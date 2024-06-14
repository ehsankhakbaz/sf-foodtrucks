import express from 'express';
import graphqlServer from './graphql/index.js';

const app = express();
const main = async () => {
    await graphqlServer.start();
    graphqlServer.applyMiddleware({
        app,
    });
};

main();
export default app;