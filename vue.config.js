module.exports = {
    publicPath: './',
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
               target : 'www.baidu.com',
               changeOrigin : true,
               pathRewrite : {
                   '^/api' :  ''
               }
            }
        }
    }
}