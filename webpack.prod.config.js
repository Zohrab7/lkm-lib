const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const config = {
    mode: "production",
    watch: true,
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'app',
        libraryTarget: 'umd'
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            /* JavaScript and JSX loader */
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    },
                },
                exclude: /node_modules/
            },
            /* TypeScript loader */
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            /* CSS loader*/
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                ],
                include: /\.module\.css$/
            },
            /* CSS and Style loader */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            /* SCSS loader */
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            /* PNG loader */
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            },
            /* File ( SVG JPG GIF ) loader */
            {
                test: /\.(svg|jpg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({configFile: "./tsconfig.json"}),
        ],
        extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ts'
        ]
    }
};

module.exports = config;