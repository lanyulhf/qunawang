$(function(){
	
})
//侧边二级菜单
$(".jia").toggle(function(){
	$(this).parents(".lih").find(".toggle-ul").show(200)
},function(){
	$(this).parents(".lih").find(".toggle-ul").hide(200)
	
})
//菜单栏
$(".menu").toggle(function(){
	$(".pub-header-left").addClass("clickmenu");
	$(".font-Strong").addClass("draw");
	$(".fixleft-toggle").addClass("clickmenu");
	$(".fixleft-toggle a").addClass("draw");
	$(".pub-fixleft").addClass("clickmenu");
	$(".list a").addClass("draw");
	$(".litwo").addClass("draw");
},function(){
	$(".pub-header-left").removeClass("clickmenu");
	$(".font-Strong").removeClass("draw");
	$(".fixleft-toggle").removeClass("clickmenu");
	$(".fixleft-toggle a").removeClass("draw");
	$(".pub-fixleft").removeClass("clickmenu");
	$(".litwo").removeClass("draw");
	$(".list a").removeClass("draw");
	
})
//点击箭头收缩
$(".downjt").toggle(function(){
	$(this).parents(".list").find(".fixleft-toggle").hide();
},function(){
	$(this).parents(".list").find(".fixleft-toggle").show();
})

//小球on ，off
$(".pub-on").toggle(function(){
	$(this).find("span").animate({
		left:"-4",
		opacity:0.7
	},500)
	$(this).find("span").css({
		background:"white",
	})
	$(this).animate({
		opacity:0.4
	},500)
	$(this).css({
		background:"#836670"
	})
},function(){
	$(this).find("span").css({
		background:"white",
	})
	$(this).find("span").animate({
		left:'12',
		opacity:1
	},500)
	$(this).animate({
		opacity:1
	},500)
	$(this).css({
		background:"#16A085"
	})
})

/*$(".lih").hover(function(){
	$(this).find(".bgli").animate({
		left:"0",
	},200)
},function(){
	$(this).find(".bgli").animate({
		left:"-100%",
	},200)
})*/

$(".ichover").hover(function(){
	$(this).parents(".lih").find(".toggle-ul-hover").show();
},function(){
	$(this).parents(".lih").find(".toggle-ul-hover").hide();
})

	var sa={
		title:{
			text:[1,2]
		},
		color:"2"
	}
