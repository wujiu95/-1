//logs.js
const util = require('../../utils/util.js')
Component({
  //B在这里接收与data类似可以直接在wxml上用
  properties: {
    grade: {
      type: String,//类型
      value: 'default value'//默认值
    }
  },
  data:{

  },
  ready: function () {
    // this.triggerEvent("sendEvent", "我来自子组件");
    this.triggerEvent('sendEvent', '我来自子组件');
  },
  methods:{
    // 向父组件发送值
    sendMesgToFather: function(){
      console.log(111)
      this.triggerEvent("sendEvent", "我来自子组件1"); // sendEvent自定义名称事件
    }
  }

})

