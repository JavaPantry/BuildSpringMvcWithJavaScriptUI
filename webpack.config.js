const path = require('path')

module.exports = {
  //entry: './src/index.js',
  entry: './src/main/js/index.js',
  output: {
		filename: 'bundle.js',
		//path: path.resolve(__dirname, 'dist')
		//path: path.resolve(__dirname, './src/main/webapp/WEB-INF/views/home')
		//path: path.resolve(__dirname, './src/main/webapp/resources/js')
		path: path.resolve(__dirname, './src/main/webapp')
		// TODO: path: path.resolve(__dirname, 'target/scaffolding-mvc-version'),

	},
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
         }
       }

       ,{
         test: /\.scss$/,
         use: [{
           loader: 'style-loader'
         }, {
           loader: 'css-loader'
         }, {
           loader: 'sass-loader'
         }]
       }

       ,{
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader'
           }
         ]
       }

     ]
   }
}