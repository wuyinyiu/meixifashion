/********头部滚动出现********/
$(window).scroll(function(){
	var top=$(window).scrollTop()
	var header_height=$('#header').height()
	console.log(header_height);
	if(top>header_height){	
		console.log('a')
		$('.fix_top').css('display','block');
	}else{
		$('.fix_top').css('display','none')
	}
})
