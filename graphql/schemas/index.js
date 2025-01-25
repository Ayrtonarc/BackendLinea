// graphql/schemas/index.js

const { gql } = require('apollo-server-express');
const apiType = require('./cbp');

const rootType = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

module.exports = [
    rootType,
    apiType
];