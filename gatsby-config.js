module.exports = {
  siteMetadata: {
    title: 'Mon site'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: {
          'primary-color': '#BADA55'
        }
      }
    }
  ]
}
