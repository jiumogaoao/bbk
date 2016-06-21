$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				anchors: ['homepage', 'whatpage','buypage','howpage','pointpage','apppage','commentpage','gopage','endpage'],
				'css3': true,
				'sectionsColor': ['','#9bdaec', '#ffc528', '#ffffff','#765db2','#ffffff','#868683','#ffd200','#f4f4f4'],
				'scrollOverflow':true,
				'afterLoad': function(anchorLink, index){
					if(index<4){
						$("#head .nav").removeClass("selected");
						$("#head .nav#what").addClass("selected");
					}else if(index<6){
						$("#head .nav").removeClass("selected");
						$("#head .nav#how").addClass("selected");
					}else if(index<8){
						$("#head .nav").removeClass("selected");
						$("#head .nav#app").addClass("selected");
					}else{
						$("#head .nav").removeClass("selected");
						$("#head .nav#buy").addClass("selected");
					}
				},
				'onLeave': function(index, nextIndex, direction){

				}
			});
			/*banner*/
			var bannerClock=0;
			function bannerRun(){
				bannerClock=bannerClock%3;
				$("#section0 .roll").css("left", "-"+bannerClock+"00%");
				$("#section0 .whitePoint").removeClass("hl");
				$("#section0 .whitePoint").eq(bannerClock).addClass("hl");
			}
			bannerRun();
			var bannerDelay=setInterval(function(){
				bannerClock++;
				bannerRun();
			},3000);
			/*app滚动*/
			var appScroll = 0;
			function S6Scroll(){
				$("#section6 #roll").css({
					"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
					"transition-duration": "1000ms",
					"transform":"translate(-"+(appScroll*427)+"px, 0px) translateZ(0px)"
				})
			}
			$("#section6 #left").unbind("click").bind("click",function(){
				if(appScroll<$("#section6 #roll img").length-3){
					appScroll++;
					S6Scroll();
				}
			});
			$("#section6 #right").unbind("click").bind("click",function(){
				if(appScroll>0){
					appScroll--;
					S6Scroll();
				}
			});
			/*评论滚动*/
			var commentScroll=0;
			var commentTime=setInterval(function(){
				if(commentScroll<$("#section7 #roll .point").length-1){
					commentScroll++;
				}else{
					commentScroll=0;
				}
				$("#section7 #roll").css({
					"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
					"transition-duration": "1000ms",
					"transform":"translate(-"+(commentScroll*1092)+"px, 0px) translateZ(0px)"
				})
			}, 2000);
			$("#section0").unbind("click").bind("click",function(){
				window.location.href="/Welcome/注册/";
				});
			$(function(){  
 
  //判断浏览器是否支持placeholder属性
  supportPlaceholder='placeholder'in document.createElement('input'),
 
  placeholder=function(input){
 
    var text = input.attr('placeholder'),
    defaultValue = input.defaultValue;
 
    if(!defaultValue){
 
      input.val(text).addClass("phcolor");
    }
 
    input.focus(function(){
 
      if(input.val() == text){
   
        $(this).val("");
      }
    });
 
  
    input.blur(function(){
 
      if(input.val() == ""){
       
        $(this).val(text).addClass("phcolor");
      }
    });
 
    //输入的字符不为灰色
    input.keydown(function(){
  
      $(this).removeClass("phcolor");
    });
  };
 
  //当浏览器不支持placeholder属性时，调用placeholder函数
  if(!supportPlaceholder){
 
    $('input').each(function(){
 
      text = $(this).attr("placeholder");
 
      if($(this).attr("type") == "text"){
 
        placeholder($(this));
      }
    });
  }
 
});
		});