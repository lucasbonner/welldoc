// For node to know our absolute file path we will be using the internal module path
const path = require("path");

// Our export here is the configuration webpack will use 
module.exports = {
  // [mode] will determine how our code will be bundled. 
  // "development" will be human readable 
  // "production" will be minified
  mode: "development",
  // [entry] this is the file where the bundling starts from. 
  entry: "./src/index.jsx",
  // [output] is a configuration object to determine how and where to bundle our code
  output: {
    // [path] is where to output
    path: path.join(__dirname, 'client/dist'),
    // [filename] is the name of the file 
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
  	test: /\.css$/i,                                                                                                                                                             
  	use: ["style-loader", "css-loader", "sass-loader"],                                                                                                                          
	},
    ]
  },
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: "eval-cheap-module-source-map",
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  }
}
