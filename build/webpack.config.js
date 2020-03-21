const { resolve } = require("./utils");
const emptyJsPath = resolve("empty.js");
let ignorePlugins = ["plugin3"];

// TODO 配置还没写
module.exports = {
  mode: "development",
  entry: resolve("src", "index.js"),
  resolve: {
    extensions: [".js"],
    alias: {
      "@/core": resolve("src", "core"),
      "@/plugins": resolve("src", "plugins"),
      "@/utils": resolve("src", "utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.compilation.tap("ignorePlugins", compilation => {
          compilation.hooks.buildModule.tap("ignorePluginsPath", module => {
            if (module.resource) {
              const pluginName =
                module.resource.match(/([\w_-]*).js/) &&
                module.resource.match(/([\w_-]*).js/)[1];
              if (ignorePlugins.includes(pluginName)) {
                module.resource = emptyJsPath;
              }
            }
          });
        });
      }
    }
  ]
};
