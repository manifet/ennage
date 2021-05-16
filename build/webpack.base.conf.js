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
  .filter(fileName => fileName.endsWith(".pug"));
// PAGES in .pug extension for split into separate pages (check HtmlWebpackPlugin)

const ENTRY_POINTS_DIR = `${PATHS.src}/entry_points/`;
const ENTRY_POINTS = {
  main: `${ENTRY_POINTS_DIR}main.js`,
  index: `${ENTRY_POINTS_DIR}index.js`,
  team: `${ENTRY_POINTS_DIR}team.js`,
  projects: `${ENTRY_POINTS_DIR}projects.js`,
  blog: `${ENTRY_POINTS_DIR}blog.js`,
  404: `${ENTRY_POINTS_DIR}404.js`,
  article: `${ENTRY_POINTS_DIR}article.js`,
  supreme_sausage: `${ENTRY_POINTS_DIR}supreme_sausage.js`,
  contacts: `${ENTRY_POINTS_DIR}contacts.js`,
  law_info: `${ENTRY_POINTS_DIR}law_info.js`
};
// ENTRY_POINTS for each page (only the code that is needed for the page)

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
    minimize: false
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
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: `${PATHS.assets}fonts/`
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
      STYLES_DIR: "../scss/pages",
      SCRIPTS_DIR:"../js"
    }
    // imports in entry points
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    ...PAGES.map(
      page =>
        new HtmlWebpackPlugin({
          minify: false,
          template: `${PAGES_DIR}${page}`, // still in the png extension
          filename: `./${page.replace(/\.pug/, ".html")}`, // .html
          inject: false
        })
    ),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/images`,
          to: `${PATHS.assets}images`,
          globOptions:{
            ignore: ["**/png_sprites/**"] // sources of png sprites
          }
        },
        {
          from: `${PATHS.src}/fonts`,
          to: `${PATHS.assets}fonts`
        }
      ]
    })
  ]
};
