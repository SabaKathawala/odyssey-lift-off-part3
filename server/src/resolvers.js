const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // resolves a specific Track by its id
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Track: {
    // resolves Author details for a track
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    // resolves all Modules details for a track
    modules: ({ id }, _, { dataSources } ) => {
        return dataSources.trackAPI.getTrackModules(id);
    }
  },
};

module.exports = resolvers;
