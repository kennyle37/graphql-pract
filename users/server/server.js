const express = require('express');
const expressGraphQL = require('express-graphql'); //QL needs to be capitalized by convention
const schema = require('../schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true //graphiql is one time where we dont capitalize ql
}))

app.listen(5000, () => {
  console.log('Listening to port!');
});