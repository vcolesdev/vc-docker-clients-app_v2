// Docs: https://typescript-eslint.io/getting-started
// Plugins:
// - eslint-config-prettier: https://github.com/prettier/eslint-config-prettier
module.exports = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
};