const {
  override,
  adjustStyleLoaders,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins
} = require("customize-cra");
const path = require("path");
const theme = require('./package.json').theme;


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "./src/styles/settings/index.scss",
        },
      });
    }
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
  }),
  addLessLoader({
    modifyVars: theme
  }),
  addPostcssPlugins([
      require('postcss-px-to-viewport') ({
        unitToConvert: "px",
        viewportWidth: 375,
        unitPrecision: 5,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [".ignore", ".hairliness"],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 667,
      })
    ])
);
