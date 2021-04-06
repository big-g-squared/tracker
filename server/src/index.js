const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Module = require('./resolvers/Module')
const Class = require('./resolvers/Class')

const resolvers = {
    Query,
    Mutation,
    Module,
    Class
}

const prisma = new PrismaClient()
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: ({ req }) => {
        return {
            ...req,
            prisma
        }
    }
})
// TODO: Finish this up (check 'connecting a database' from GraphQL)

server
    .listen()
    .then(({ url }) => {
        console.log(`Server is running on ${url}`)
    });