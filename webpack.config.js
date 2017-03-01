var webpack= require('webpack');
module.exports = {
 
  entry:{
    
    first:'./src/main.js',
  },
  output: {
   // path: __dirname + "../../js",//打包后的文件存放的地方
    filename: "./public/[name].js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      { test: /\.js$/, 
        exclude: /node_modules/,
       loader: "babel?presets[]=es2015",
     },
    
    ]
  },
  //  devServer: {
  //   contentBase:'./public',//本地服务器所加载的页面所在的目录
  //   port:'3030',
  //   colors: true,//终端中输出结果为彩色
  //   historyApiFallback: true,//不跳转
  //    inline: true//实时刷新
  // },
  plugins: [
        new webpack.optimize.UglifyJsPlugin({
          output: {
        comments: false,  // remove all comments
      },
    compress: {
        warnings: false
        }
       }) 
    ],
   


}