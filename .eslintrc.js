module.exports = {
    env: {
        browser: true,
        es6: true,
        amd: true,
        node: true,
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["warn", 4],
        // quotes: ["warn", "single"],
        semi: ["warn", "never"],
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "react/prop-types": 0,
    },
};
