document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
		 window.onresize=function(){
        	document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
    	};
$(function(){
	$('.life').click(function(){
		 $('.life').removeClass('cli').eq($(this).index()).addClass('cli');
	})
})
$(function(){
	$('.fun').click(function(){
		 $('.fun').removeClass('cli').eq($(this).index()).addClass('cli');
	})
})