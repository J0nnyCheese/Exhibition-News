// pages/index/index.js
Page({
  /**
   * Page initial data
   */
  data: {
    items: []
  },

  guide: function(e) {
    wx.navigateTo({
      url: '../guide/guide',
    })
  },

  appointment: function (e) {
    wx.navigateTo({
      url: '../appointment/appointment',
    })
  },

  map: function (e) {
    wx.navigateTo({
      url: '../map/map',
    })
  },

  newsList: function (e) {
    wx.navigateTo({
      url: '../newsList/newsList' ,
    })
  },

  // enterNewsDetails: function(e) {

  // },

  connect: function() {
    var self = this;
    wx.request({
        url: 'http://127.0.0.1:8080/student/StudentsServlet',
        data : {},
        dataType: JSON,
        header: {
          'content-type':'application/json'
        },
        method: 'GET',
        success(res) {
          var jsonobj = JSON.parse(res.data);
          // ksonobj convert to array and copy to {{items}}
          var jsonarr = [];
          for (var i = 0; i < jsonobj.length; i ++) {
            jsonarr[i] = jsonobj[i];
          }
          // console.log(JSON.stringify(jsonarr));
          self.setData({ //设置用于当前页面的新闻数据
            items: jsonarr
          })
          getApp().globalData.items = jsonarr; //设置全局的新闻数据，用于查看所有新闻，优化：和当前页面的新闻数据(items)合并（是一样的数据）
        },
        fail(res) {
          console.log("Servlet not activate or other connection errors.")
        }
    })
  },

  enterNews: function(e) {
    console.log(JSON.stringify(e.currentTarget.id))
    wx.navigateTo({
      url: '../news/news?id=' + e.currentTarget.id,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    var app = getApp();
    this.connect();
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