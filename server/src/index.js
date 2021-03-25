const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    
})
// TODO: Finish this up (check 'connecting a database' from GraphQL)

server
    .listen()
    .then(({ url }) => {
        console.log(`Server is running on ${url}`)
    });