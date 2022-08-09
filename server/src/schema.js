// gql
// 1. It's a tagged template literal, used for wrapping GraphQL strings like the schema definition below
// 2. It converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas, and it also enables syntax highlighting
const { gql } = require('apollo-server');

const typeDefs = gql`
    "The Query type's fields define which data clients can query from our schema."
    type Query {
        "Get Tracks for Home Page"
        tracksForHome: [Track!]!

        "Fetch a specific track, provided a track's ID"
        track(id: ID!): Track
    }

    "Author of a complete Track or a Module"
    type Author {
        "Unique Identifier of an Author"
        id: ID!

        "Author's first ad last name"
        name: String!

        "Author's profile picture URL"
        photo: String
    }

    "Track: represents a particular learning track"
    type Track {
        "Author of Track"
        author: Author!

        "The track's complete description, can be in Markdown format"
        description: String

        "Unique Identifier of a Track"
        id: ID!

        "Track duration"
        length: Int

        "The track's complete array of Modules"
        modules: [Module!]!

        "Number of modules in Track"
        modulesCount: Int

        "The number of times a track has been viewed"
        numberOfViews: Int

        "Track thumbnail URL"
        thumbnail: String

        "Title of Track"
        title: String!
    }

    type Module {
        "Unique Identifier of a Module"
        id: ID!

        "Module's length in minutes"
        length: Int

        "Module's title"
        title: String!
    }
`;

module.exports = typeDefs;
