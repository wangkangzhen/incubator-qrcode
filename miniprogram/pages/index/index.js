// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotxtmade() {
    wx.navigateTo({
      url: '/pages/txtmade/txtmade'
    })
  },
  goimgmade() {
    wx.navigateTo({
      url: '/pages/imgmade/imgmade'
    })
  },
  goqrlist() {
    wx.navigateTo({
      url: '/pages/qrlist/qrlist'
    })
  },
  gomylist() {
    wx.navigateTo({
      url: '/pages/myqrlist/myqrlist'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.removeStorage({
      key: 'qrimg',
      success (res) {
      }
    })
    wx.removeStorage({
      key: 'qrtxt',
      success (res) {
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})