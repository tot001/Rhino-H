//ClassName
function getByClass (oParent,oClass)
{
	var aResylst=[];
	var aEle=oParent.getElementsByTagName('*');
	//从父节点中取出需要的子节点

	for (var i = 0; i < aEle.length; i++)
	{
		if (aEle[i].className==oClass)
		//从所有的元素中找到 className==oClass 的元素
		{
			aResylst.push(aEle[i]);
			//把相同的className 存起来
		}; 
	};
	return aResylst;
}



function startMove(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
	for (var attr in json){
		var cur=0;
		// if (json[attr]=='opacity') {
		// 	cur=Math.round(parseFloat(getStyle(obj,attr))*100);
		// }
		// else{
		// 	cur=parseInt(getStyle(obj,attr));
		// }

		// if (json[attr]=='opacity') {
		// 	obj.style.filter='alpha(opacity:'+(cur+speed)+')';
		// 	obj.style.opacity=(cur+speed)/100;
		// }
		// else{
		// 	obj.style[attr]=cur+speed+"px";
		// }

		var speed=(json[attr]-cur)/6;
		 speed=speed>0?Math.ceil(speed):Math.floor(speed);//Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；

		 if (obj.offsetWidth==json[attr]) {
		 	clearInterval(obj.timer);
		 }

		 else {
		 	obj.style.width=obj.offsetWidth+speed+"px";
		  };
		};
	},30);
}






//缓冲运动
window.onscroll=function(){
		var Odiv1=document.getElementById('div1');
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

		if (scrollTop<=15) {
			Odiv1.style.display="none";
		}
		else{
			Odiv1.style.display="block";
		};
		Odiv1.onclick=function(){			
		$("html,body").animate({scrollTop:"0px"},200);
		};

		Move(parseInt((document.documentElement.clientHeight-Odiv1.offsetHeight)/2+scrollTop));	
};
		var timer=null;
	function Move(iTarger){
			clearInterval(timer);
				var Odiv1=document.getElementById('div1');
			timer=setInterval(function(){
				var speed=(iTarger-Odiv1.offsetTop)/5;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if (Odiv1.offsetTop==iTarger)
				 {
				 	clearInterval(timer);
				 }
				 else
				 {
				 	Odiv1.style.top=Odiv1.offsetTop+speed+"px";
				 }
			},30);
	};