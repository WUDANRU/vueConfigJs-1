module.exports = {

    plugins: {

        'autoprefixer': { browsers: 'last 5 version' } //报错 Error: No PostCSS Config found in.. ,解决：在项目根目录新建postcss.config.js文件

    }

}