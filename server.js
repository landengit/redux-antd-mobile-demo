/**
 * webpack
 * 
 * landenli
 */

const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const webpackConfig = require('./config/webpack.dev')


const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8080, (err) => {
  if (err) {
    return console.error(err) // eslint-disable-line no-console
  }
  console.log('Listening at http://localhost:8080') // eslint-disable-line no-console
})
