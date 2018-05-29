
var myBehavior = require('../behavior');
Component({
  behaviors: [myBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses:['parent-class'],
  properties:{
    parentMessage:{
      type:String,
      value:"",
      observer:function(newVal,oldVal){//监听属性值改变
        /*console.log(this.selectComponent(".select"));*/
      } 
    }
  },
  data:{
    componentData:"组件内部数据"
  },
  methods:{
    btnClick:function(){
      var myEventDetail = {};// detail对象，提供给事件监听函数
      var myEventOption = {bubbles: true,composed: true};// 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption);
    },
  }
});
