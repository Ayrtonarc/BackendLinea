const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type WaitTime {
    border: String
    portName: String
    crossingName: String
    hours: String
    date: String
    time: String
    portStatus: String
    commercialVehicleLanes: String
    passengerVehicleLanes: String
    pedestrianLanes: String
    constructionNotice: String
  }

  type Query {
    getWaitTimes: [WaitTime]
  }
`;

module.exports = typeDefs;