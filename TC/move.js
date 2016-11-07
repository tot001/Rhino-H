var timer=null;
function startMove (obj,iTarget) {
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=(iTarget-obj.offsetLeft)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);

		 	if (obj.offsetLeft==iTarget) {
				clearInterval(timer);
			}
			else{
				obj.style.left=obj.offsetLeft+speed+"px";
			}
		
	},30);
};

// var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
// function startScroll (obj){
// 	obj.style.top=document.documentElement.clientHeight-obj.offsetHeight+scrollTop+"px";
// }