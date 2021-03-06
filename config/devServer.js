const {paths} = require("./index");

const devServer = {
  contentBase: paths.client("static"),
  port: 3000,
  historyApiFallback: {
    rewrites: [
      {
        from: /^\/(?:.*\/)?(font|img)(\/?[^/]+)$/,
        to: function(context) {
          return context.parsedUrl.pathname.replace(/^\/(?:.*\/)?(font|img)(\/?[^/]+)$/, "/$1$2");
        },
      },
      {
        from: /^\/(?:(?!font\/)[^/]+\/)+([^/]+\.(?:css|js)(?:\?.*)?)$/,
        to: function(context) {
          return context.parsedUrl.pathname.replace(
            /^\/(?:(?!font\/)[^/]+\/)+([^/]+\.(?:css|js)(?:\?.*)?)$/,
            "/$1"
          );
        },
      },
    ],
  }
};

module.exports = {
  devServer,
};