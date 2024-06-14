# Getting Started with SF-FoodTrucks Node App

This project is a fun one! For foodies in San Francisco who fancy eating outside and are chasing the food trucks around the city.\
Running this app, you can import the SF public food truck data, select the type of food you like, and see a list of options with their addresses.\
In this repo, there's a back-end Node.js app with a connection to MongoDB and a GraphQL API. There's also a front-end React app in `/client`

## Available Back-end Scripts `/`

In the project directory, you can run:

### `yarn db:import`

Imports the data into a MongoDB server. MongoDB Atlas is suggested.\ 
The source of the data is from San Francisco's food truck open dataset. A copy of the data is available in .csv and `db/source`. You can replace that with the latest file at any time.

### `yarn dev`
Runs the app in the development mode.\
The app will reload if any code changes happen.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser. But since it is the back-end app, there's not much to see. You also need to run the next command in the `/client` directory on a different terminal to launch the front end.

### `yarn run build`

Builds the app for production.\


## Available Front-end Scripts `/client`

### `cd client`
### `yarn start`

Navigate to the /client directory on a separate terminal.
`yarn start` launches the front-end React app on a browser on [http://localhost:3000](http://localhost:3000)

### `cd client`
### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Functionality Roadmap

The next cool features we can add to this app are:
- Integrating OpenAI's ChatGPT 
    - Feeding and indexing the open data to the ChatGPT 
    - Introducing a dialogue box on the UI for a conversational chat to help you find the food truck you need
- Integrating OpenAI's ChatGPT and Twilio
    - Similar to the previous item, but on a different channel: SMS. Being able to send a text to a number powered by generative AI and find the food truck you need for the day!

## Development Roadmap

- Adding MongoDB in a container
- Dockerizing the project
- Making the production build to be released on AWS Fargate for fast and reliable deployment
