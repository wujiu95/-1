//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    father:'我是父亲原生',
    son: '父亲传给子',
    son1:''
  },
  onLoad: function () {
 
  },
  sendEvent:function(res){
    console.log(res.detail)
    console.log("接收子组件传过来的值" + '....',res.detail)
    this.setData({
      son1:res.detail
    })
  }
})
