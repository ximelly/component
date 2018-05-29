
Component({
	relations:{
		"../ul/ul":{
			type:"parent",
			linked: function(target) {
		       // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
		       console.log("child-ul-linked");
		    },
		    linkChanged: function(target) {
		       // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
		       console.log("child-ul-linkChanged");
		    },
		    unlinked: function(target) {
		       // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
		       console.log("child-ul-unlinked");
		    }
		}
	},
  data:{
  },
  methods:{

  }
});
