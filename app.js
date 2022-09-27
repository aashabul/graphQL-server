const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.gmdfr.mongodb.net/?retryWrites=true&w=majority`
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening for request on port 4000");
});
