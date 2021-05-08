// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 固定写法，数据库初始化
      // 拿到数据库的实例
      let db = wx.cloud.database();

      // 链接数据表
      let goods = db.collection('m_goods');

      // get 查询
      // goods.get({
      //   // 请求成功
      //   success(res) {
      //     console.log('数据', res);
      //   },
      //   fail(err) {}
      // });
      // es6 写法
      // goods.get().then( res => {
      //   console.log('数据', res);
      //   this.setData({
      //     goods_list : res.data
      //   });
      // })
      // .catch( err => {

      // })
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