const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [new HtmlWebpackPlugin()],

  resolve: {
    alias: {
      "@templates": path.resolve("./src/templates/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.twig$/,
        use: [
          {
            loader: "twigjs-loader",
          },
        ],
      },
    ],
  },
};
