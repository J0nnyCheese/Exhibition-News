// pages/news/news.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: '',
    author: '',
    content: '',
    // newsdate: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    var WxParse = require('../wxParse/wxParse.js');//加载wxParse
    this.initialize(options);//初始化内容
    var article = this.data.content;
    WxParse.wxParse('article', 'html', article, this, 1);
  },

  initialize: function(options) {
    var app = getApp();
    this.setData({
      title: getApp().globalData.items[options.id].title,
      author: getApp().globalData.items[options.id].author,
      content: getApp().globalData.items[options.id].content,
      // newsdate: getApp().globalData.items[options.id].date
    })
    
    // console.log(this.data.content);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})