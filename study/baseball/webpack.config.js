const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
extensions:['js','.vue']
    },
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
        filename: 'app.js', //[name].js 해줘도 됨 //package.json에는 파일 이름만 쓰기!!
        path: path.join(__dirname, 'dist'),
    }
};