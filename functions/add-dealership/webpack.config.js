/* eslint-disable import/no-extraneous-dependencies */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const path = require("path");

const functionName = path.resolve(__dirname).split("/").pop();
const outputPath = path.resolve(__dirname, "../../build", functionName);

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
  plugins: [
    //ignore the drivers you don't want. This is the complete list of all drivers -- remove the suppressions for drivers you want to use.
    new FilterWarningsPlugin({
      exclude: [
        /mongodb/,
        /mssql/,
        /mysql/,
        /mysql2/,
        /oracledb/,
        /pg/,
        /pg-native/,
        /pg-query-stream/,
        /react-native-sqlite-storage/,
        /redis/,
        /sqlite3/,
        /sql.js/,
        /typeorm-aurora-data-api-driver/,
      ],
    }),
  ],
  target: "node",
};
