$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				anchors: ['homepage', 'pomopage', 'whatpage','buypage','howpage','pointpage','apppage','commentpage','gopage','endpage'],
				'css3': true,
				'sectionsColor': ['#6e55cc','','#9bdaec', '#ffc528', '#ffffff','#765db2','#ffffff','#868683','#ffd200','#f4f4f4'],
				'scrollOverflow':true,
				'afterLoad': function(anchorLink, index){
					console.log(anchorLink)
					console.log(index)
					if(index<5){
						$("#head .nav").removeClass("selected");
						$("#head .nav#what").addClass("selected");
					}else{
						$("#head .nav").removeClass("selected");
						$("#head .nav#how").addClass("selected");
					}
				},
				'onLeave': function(index, nextIndex, direction){

				}
			});
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
				console.log(commentScroll);
				$("#section7 #roll").css({
					"transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
					"transition-duration": "1000ms",
					"transform":"translate(-"+(commentScroll*1092)+"px, 0px) translateZ(0px)"
				})
			}, 2000);
		});