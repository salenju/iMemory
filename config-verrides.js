const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer");
const {
    addLessLoader,
    addWebpackAlias,
    useEslintRc,
    fixBabelImports,
    override,
    addDecoratorsLegacy,
} = require("customize-cra");

const path = require("path");
const theme = require("./theme");

function resolve(dir) {
    return path.join(__dirname, dir);
}

const addCustomize = () => (config) => {
    // if (process.env.CICD_ENV === 'production') {
    //   config.output.publicPath = 'https://cdn.emarineonline.com.cn/corporate/'
    // }

    const env = config.mode;
    if (env === "production") {
        config = rewireWebpackBundleAnalyzer(config, env, {
            analyzerMode: "static",
            reportFilename: "report.html",
        });
    }
    return config;
};

module.exports = override(
    addCustomize(),
    addDecoratorsLegacy(),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
        localIdentName: "[local]--[hash:base64:5]", // 自定义 CSS Modules 的 localIdentName
    }),

    addWebpackAlias({
        "@": resolve("src/"),
        "@Utils": resolve("src/utils"),
        "@Page": resolve("src/page"),
        "@Const": resolve("src/const"),
        "@Components": resolve("src/components"),
    }),

    // antd按需引入
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
    }),

    useEslintRc(resolve(".eslintrc.js")) // use .eslintrc.js
);
