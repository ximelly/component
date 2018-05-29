
Page({
  data:{
    myDate: 'Hello World',
    showComponent:false,
    index:0,
    ulList:['水果','生活用品','文具'],
    liList:{
      '水果':['苹果','香蕉','葡萄'],
      '生活用品':['杯子','纸巾'],
      '文具':['圆珠笔','笔记本','橡皮檫']
    }
  },
  onShow:function () {

  },
  addBtn:function () {
  	this.setData({
  		showComponent:!this.data.showComponent
  	});
  },
  childReady:function () {
    console.log("index监听test组件btnClick事件~");
  },
  childReady2:function () {
  	console.log("index监听test组件btnClick事件：冒泡~");
  },
  changeList:function(){
    let index=this.data.index+1>=3?0:this.data.index+1;
    this.setData({
      index:index
    });
  },
  deleteList:function(){
    let operity=this.data.ulList[this.data.index];
    this.data.liList[operity].shift();
    this.replaceDataOnPath(['liList',operity],this.data.liList[operity]);// 这里更新data.liList[operity]
    this.applyDataUpdates();
  },
  addList:function(){
    let operity=this.data.ulList[this.data.index];
    this.data.liList[operity].push(operity+"新增项");
    this.replaceDataOnPath(['liList',operity],this.data.liList[operity]);// 这里更新data.liList[operity]
    this.applyDataUpdates();
  },
  moveList:function(){
    let operity=this.data.ulList[this.data.index];
    if(this.data.liList[operity]&&this.data.liList[operity].length>=2){
      let list=this.data.liList[operity];
      let last=list[list.length-1];
      list[list.length-1]=list[0];
      list[0]=last;
      this.replaceDataOnPath(['liList',operity],list);
      this.applyDataUpdates();
    }
  }
});
