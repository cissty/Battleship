const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./app/js/script.js",
    translate: "./app/js/translate.js",
    games: "./app/js/game.js",
    style: "./app/scss/style.scss",
    game: "./app/scss/game.scss",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
      watch: true
    },
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
};
