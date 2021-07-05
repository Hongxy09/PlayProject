// pages/test/test.js
let a1=0,a2=0,a3=0,b1=0,b2=0,b3=0,c1=0,c2=0,c3=0
var resold=0,resnew=0,resdec=0,elect=0
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  geta1(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    a1=val
    // console.log("returndata:",a1,"returntype:",typeof a1)
  },
  geta2(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    a2=val
  },
  geta3(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    a3=val
  },
  getb1(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    b1=val
  },
  getb2(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    b2=val
  },
  getb3(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    b3=val
  },
  getc1(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    c1=val
  },
  getc2(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    c2=val
  },
  getc3(e){
    // 获取用户输入的变量
    console.log("get data:",e.detail.value,"datatype:",typeof e.detail.value)
    let val=Number(e.detail.value)
    console.log("returnval:",val,"returntype:",typeof val)
    c3=val
  },

  typechange(val){
    // 改变选择位置会执行的函数
    console.log("执行了选择改变函数，返回的值是：",val.detail.value)
    elect=Number(val.detail.value)
    console.log("将选择的选项的value赋值给elect参数，其类型和值分别为：",elect,typeof elect)
  },
  calfun(){
    // 返回计算结果
    console.log("点击了计算按钮")
    let valdec=0,valTwo=0,valOne=0
    // 暴击套计算公式1.38
    if(elect==1.38){
      valOne=elect*(a1)*(1+(0.3+a2)*(0.5+a3))
      valTwo=elect*(a1+c1-b1)*(1+(0.3+a2+c2-b2)*(0.5+a3+c3-b3))
      valdec=valTwo-valOne
      }
      // 攻击套计算公式1.58
    else{
      valOne=elect*(a1)*(1+(a2)*(0.5+a3))
      valTwo=elect*(a1+c1-b1)*(1+(a2+c2-b2)*(0.5+a3+c3-b3))
      valdec=valTwo-valOne
    }
    console.log("检查数值组a：",a1,a2,a3)
    console.log("检查数值组b：",b1,b2,b3)
    console.log("检查数值组c：",c1,c2,c3)
    console.log("calres1:",valOne,"calres1type:",typeof valOne)
    console.log("calres2:",valTwo,"calres2type:",typeof valTwo)
    console.log("calres3:",valdec,"calres3type:",typeof valdec)
    this.setData({
      resold:valOne,
      resnew:valTwo,
      resdec:valdec
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("用户进行了下拉页面动作")
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
    console.log("用户进行了分享页面动作")
  }
})