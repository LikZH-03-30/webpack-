const { VueLoaderPlugin } = require("vue-loader");
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// webpack.config.js

module.exports = {
  mode: "development",
  entry: "./src/main.js", //入口
  output: {
    path: join(__dirname, "lib"),
    filename: "webpack-demo.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public/index.html"),
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
  devServer: {
    open: true,
    port: 30000,
  },
  module: {
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.less$/,
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|gif)$/i,
        type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     //字节
        //     maxSize: 2 * 1024
        //   }
        // }
        generator: {
          filename: "images/[hash:6][ext]",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      {
        test: /\.js$/i,
        /* {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        } */
        use: ["babel-loader"],
      },
      [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ],
    ],
  },
};
