const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081', // Webpack 项目的地址
                changeOrigin: true
            }
        }
    }
})


