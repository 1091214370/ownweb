window.onload=function(){
	var lis=document.getElementsByClassName('navli');
	var lists=document.getElementsByClassName('list');
	var icons=document.getElementsByClassName('iconfont')
	lis[0].style.background="#16d069";
	lis[0].style.fontSize="20px";
	icons[0].style.fontSize="35px";
	lists[0].style.display="block";
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var s=0;s<lis.length;s++){
				lis[s].style.background="";
				lis[s].style.fontSize="";
				icons[s].style.fontSize="";
				lists[s].style.display="none";
			}
			var a=this.index;
			lis[a].style.background="#16d069";
			lis[a].style.fontSize="20px";
			icons[a].style.fontSize="35px";
			lists[a].style.display="block";
		}
	}
}