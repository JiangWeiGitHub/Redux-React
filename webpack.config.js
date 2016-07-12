 module.exports = {
     entry: './src/index.js',
     output: {
         path: './bin',
         filename: 'bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3']
             }
         }]
     }
 };
