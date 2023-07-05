const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./app/js/script.js",
    validateUser: "./app/js/validate-user.js",
    translate: "./app/js/translate.js"
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
      filename: "styles.css",
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
