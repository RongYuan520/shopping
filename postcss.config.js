module.export = {
  plugins: {
    viewportWidth: 375, // 视口宽度，对应的是设计稿的宽度（370 retina）
    viewportHeight: 667, // 视口高度，对应的是设计稿的高度，（375* 667）默认UI都是这个稿，iphone6
    unitPrecision: 5, // px转vw整除的小数点保留几位
    viewportUnit: 'vw', //根据vw or vh进行计算
    minPixeValue: 1, // 小于这个值不进行转换，仍保持1px
    mediaQuery: false, // 是否允许媒体查询中转换单位，我们使用了这个框架就不允许了，以这个框架为准
    selectorBlackList: ['ignore']
  }
}