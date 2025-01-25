const { gql } = require('apollo-server-express')

const TypeDefs = gql`
type BorderWaitTime {
    portName: String
    portCode: String
    delayMinutes: Int
    lastUpdated: String
}

type Query{
    getBorderWaitTime: [BorderWaitTime]
}
`;

module.exports = TypeDefs;