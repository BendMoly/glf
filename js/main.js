// 第一张图的车移动
$("#page1 #car").animate({
	left : 0
},1000);

function page2(){
	// 第二张的文字逐行移动
	
	$("#page2line1").animate({
		left : 0
	},500,function(){
		$("#page2line2").animate({
			left : 0
		},500,function(){
			$("#page2line3").animate({
				left : 0
			},500,function(){
				$("#page2line4").animate({
					left : 0
				},500,function(){
					$("#page2line5").animate({
						left : 0
					},500,function(){
						$("#page2line6").animate({
							left : 0
						},500,function(){
							$("#page2line7").animate({
								left : 0
							},500,function(){
								$("#page2line8").animate({
									left : 0
								},500,function(){
									$("#page2line9").animate({
										left : 0
									},500,function(){
										$("#page2line10").animate({
											left : 0
										},500)
									})
								})
							})
						})
					})
				})
			})
		})
	})
	
	
	
	
	
	
	
	
	
}
function page3(){
	//第三张引擎移动
	$("#engine").animate({
		left : 0
	},500);
}
function page4(){
	// 第四张文字移动
	$("#page4line img").animate({
		left : 0
	},500)
}


var $wrap = $("#wrap");
var $inner = $("#inner");
var $div = $inner.children();
var t=0;
var index = 0;
var movebol = false;
var timeS = 0;
$wrap.on("touchstart",function (e) {		
	var disY = event.touches[0].clientY;
	timeS = new Date();
	$wrap.on("touchmove",function () {
		if (movebol) {return};
		var y = event.touches[0].clientY;
		t = y - disY ;
		
		if (t<0 && index==4) {
			var t2 = t/3-index*$(window).height();
		}else if(t>0 && index==0){
			var t2 = t/3-index*$(window).height();
		}else{
			var t2 = t-index*$(window).height();
		}
		
		$inner.css("top",t2)
	})
})

$wrap.on("touchend",function  () {
	var nowDate = new Date();
	var time =nowDate - timeS
	if (time<500) {
		if (t<0) {
			index++;
			if (index>4) {
				index=4;
			};
		}else if(t>0){
			index--
			if (index<0) {
				index=0;
			};	
		}
		
		move()
	}else{
		var h = $(window).height()/2;
		if (t<-h) {
			// alert("上")
			index++;
			if (index>4) {
				index=4;
			};
		}else if(t>h){
			index--
			if (index<0) {
				index=0;
			};		
		}

		move()
	}
	t=0;
})
function move () {
	if (movebol) {return};
	movebol = true;
	var h = $(window).height();
	$inner.animate({
		top:-index*h,
	},300,function  () {
		movebol = false;
		if (index==0) {
			$("#page1 #car").animate({
				left : 0
			},1000);
			$("#lun").show();
		}else{
			$("#car").css("left","-100%");
			$("#lun").hide();
		}
		if(index==1){
			page2();
		}else{
			$("#pageline2 img").stop()
			$("#page2line1,#page2line2,#page2line3,#page2line4,#page2line5,#page2line6,#page2line7,#page2line8,#page2line9,#page2line10").css("left","-100%");
		}
		if(index==2){
			page3();
		}else{
			$("#engine").css("left","-100%");
		}
		if(index==3){
			page4();
		}else{
			$("#page4line img").css("left","-100%");
		}
	})
}
function loading(){
	var loading = document.getElementById('loading');
	var op = loading.getElementsByTagName('p');
	var index = 0;
	var imgs = ["bg1.jpg","bg2_1.png","bg2.jpg","bg3.jpg","bg4_1.jpg","bg4.jpg","bg4.png","bg5.png","button.png","car.png","car1.png","car2.png","fa.png","logo.png","lun.png","nei.jpg","nei.png","page2_line1.png","page2_line2.png","page2_line3.png","page2_line4.png","page2_line5.png","page2_line6.png","page2_line7.png","page2_line8.png","page2_line9.png"]
	for (var i = 0; i < imgs.length; i++) {
		var img = new Image();
		img.src = "img/"+imgs[i];
		img.onload = function(){
			index++;
			var p = parseInt(index/imgs.length*100);
//			alert(p);
			op[1].innerHTML = p+"%";
			if(index==imgs.length){
				alert("finish!!!");
	//			loading.style.display = "none";
				$("#loading").delay(1000).css("display","none");
			}
		}
	
	}
}
loading();


