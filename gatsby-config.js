/*principal arquivo do gatsby, faz config relacionados aos plugins e outras config que podemos definir, instalar plugins aqui*/

module.exports = {
  siteMetadata: {
    title: `My blog`,
    position: 'Felipe Lullio Backend Develper',
    description: `a blog about frotend developemnt and other cool stuff`,
    author: `@my-blog`,
  },

  //array que recebe plugins
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      //objeto que passamos o resolve(nome do nosso plugin) e passa as options dele, nome dos arquivos e diretório onde está os arquivos, vai ler todos arquivos que estão no diretório

      // se quiser trabalhar com outras pastas, basta duplicar o código abaixo e mudar o caminho/path, digamos que tem pdfs

      
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
