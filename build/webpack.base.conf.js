const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
};
const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith(".pug")); // for pug ext
const ENTRY_POINTS_DIR = `${PATHS.src}/entry_points/`;
const ENTRY_POINTS = {
  main: `${ENTRY_POINTS_DIR}main.js`,
  index: `${ENTRY_POINTS_DIR}index.js`
};
module.exports = {
  externals: {
    paths: PATHS
  },
  entry: ENTRY_POINTS,
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: "/"
  },
  optimization: {
    minimize: false,
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       name: "vendors",
    //       test: /\.js$/,
    //       chunks: "all",
    //       enforce: true
    //     }
    //   }
    // } for js libraries
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true
        }
      },
      {
        test: /\.(woff(2)?|ttg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: `[name].[ext]`
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: "./postcss.config.js"
              },
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "expanded"
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      STYLES_DIR: "../scss/pages"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    ...PAGES.map(
      page =>
        new HtmlWebpackPlugin({
          minify: false,
          template: `${PAGES_DIR}/${page}`, // .pug
          filename: `./${page.replace(/\.pug/, ".html")}` // .html
        })
    ),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/images`,
          to: `${PATHS.assets}images`
        },
        {
          from: `${PATHS.src}/fonts`,
          to: `${PATHS.assets}fonts`
        }
      ]
    })
  ]
};
