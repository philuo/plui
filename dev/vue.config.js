// @ts-nocheck
module.exports = {
  outputDir: 'build',
  assetsDir: 'static',
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境下的配置更改
      config.externals = {
        vue: 'Vue',
      };
    } else {
      // 开发环境下的配置更改
    }
  },
};
