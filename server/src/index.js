const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
    
})

server
    .listen()
    .then(({ url }) => {
        console.log(`Server is running on ${url}`)
    });