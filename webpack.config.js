
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve('./app/components/Main.jsx'),
      Nav: path.resolve('./app/components/Nav.jsx'),
      Timer: path.resolve('./app/components/Timer.jsx'),
      Countdown: path.resolve('./app/components/Countdown.jsx'),
      applicationStyles: path.resolve('./app/styles/app.scss'),
      Clock: path.resolve('./app/components/Clock.jsx'),
      CountdownForm: path.resolve('./app/components/CountdownForm.jsx'),
      Controls: path.resolve('./app/components/Controls.jsx')
    },
    extensions: ['.js','.jsx']
  },
  module:{
    loaders:[{
      loader:'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
};
