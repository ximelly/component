
Component({
	relations:{
		"../li/li":{
			type:"child",
			linked: function(target) {
		       // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
		       console.log("ul-child-linked");
		    },
		    linkChanged: function(target) {
		       // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
		       console.log("ul-child-linkChanged");
		    },
		    unlinked: function(target) {
		       // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
		       console.log("ul-child-unlinked");
		    }
		}
	},
	properties:{
	    componentTitle:{
	      type:String,
	      value:"ulTitle",
	      observer:function(newVal,oldVal){//监听属性值改变
	      } 
	    }
	  },
  data:{
  },
  methods:{

  }
});
