const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development', //배포할 땐 production
    devtool: 'eval', //배포할 땐 hidden-source-map
    resolve: {
        extensions: ['.js', '.vue'],  //확장자 처리해주는 거 (main.js에 import한 vue파일 뒤에 .vue 안써도 됨)
    },
    entry: {
        app: path.join(__dirname, 'main.js')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', //[name].js 해줘도 됨 //package.json에는 파일 이름만 쓰기!!
        path: path.join(__dirname, 'dist'),
    }
};