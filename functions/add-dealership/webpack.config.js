/* eslint-disable import/no-extraneous-dependencies */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
console.log("PATH: " + path.resolve(__dirname));
const functionName = path.resolve(__dirname).split("/").pop();
const outputPath = path.resolve(__dirname, "../../build", functionName);
console.log("OUTPATH: " + outputPath);

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    filename: "index.js",
    path: outputPath,
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};
