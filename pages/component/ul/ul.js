
Component({
	relations:{
		"../li/li":{
			type:"child",
			linked: function(target) {
		       // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
		    },
		    linkChanged: function(target) {
		       // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
		    },
		    unlinked: function(target) {
		       // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
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
  	color:""
  },
  methods:{
  	inputChange:function(e){
	    this.setData({
	      color:e.detail.value,
	    });
	  },
  	changeColor(){
  		if(!this.data.color){
  			wx.showToast({
			  title: '颜色不能为空~',
			  icon: 'none'
			})
			return;
  		}
		this.setChildData('../li/li',this.data.color);
	},
	resetColor(){
		this.setData({color:"",});
		this.setChildData('../li/li',"");
	},
	setChildData(path,color){
		var nodes = this.getRelationNodes(path);
		if(nodes&&nodes.length>0){
			for(var i=0,len=nodes.length;i<len;i++){
			      nodes[i].setData({// 需要调用对方组件的setData()方法来设置数据
		           bg_color:color
				})
		    }
		}
	}
  }
});
