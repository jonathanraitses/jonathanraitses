module.exports = {
    // Support for: commonjs, node, mocha, es2020
    env: {
        mocha: true,
        browser: true,
    },
    // required for experimental features (arrow functions in classes)
    parser: 'babel-eslint',
    parserOptions: {
        // Required for certain syntax usages
        ecmaVersion: 2020,
    },
    // Extends airbnb configuration with prettier.
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    rules: {
        // Indent with 4 spaces
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        'prettier/prettier': ['error'],
        'import/no-unresolved': 'off', // throws errors on bit.dev
        'import/no-named-as-default': 0,
        'no-unused-vars': 1,
        'no-console': process.env.NODE_ENV !== 'production' ? 0 : 1,
    },
    // Override rules for test and spec files
    overrides: [
        {
            files: ['*.test.js', '*.spec.js'],
            rules: {
                'no-unused-expressions': 'off',
            },
        },
    ],
};