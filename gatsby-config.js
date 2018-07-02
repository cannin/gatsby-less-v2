module.exports = {
  siteMetadata: {
    title: 'Mon site'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#BADA55'
        }
      }
    }
  ]
}
