const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js', //[name].js 해줘도 됨
        path: path.join(__dirname, 'dist'),
    }
};