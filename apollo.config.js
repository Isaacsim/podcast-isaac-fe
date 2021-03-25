module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagname: "gql",
    service: {
      name: "podcast-isaac",
      url: "http://localhost:4000/graphql",
    },
  },
};
