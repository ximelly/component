
var myBehavior = require('../behavior');
Component({
  behaviors: [myBehavior],
  data:{
    componentData:"model组件"
  },
  methods:{
  	childReady3:function(e){
  		console.log(e);
  	}
  }
});
