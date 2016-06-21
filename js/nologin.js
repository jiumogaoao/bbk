// JavaScript Document
/***********************通用****************************/
$("#head #login").unbind("click").bind("click",function(){
	window.location.href="/Welcome/登录/";
	});
$(".checkbox").unbind("click").bind("click",function(){
	if(this.checked){
		$(this).addClass("hl");
		}else{
			$(this).removeClass("hl");
			}
	});
var pop=function(text){
	$("#popMain").html(text);
	$("#pop").show();
	}
$("#popClose").unbind("click").bind("click",function(){
	$("#pop").hide();
	$("#popMain").html("");
	});
/***********************登录****************************/
(function(){
	if(!$("#login_page").length){
		return false;
		}
	/*点注册*/
	$("#login_page #regest").unbind("click").bind("click",function(){
		window.location.href="/Welcome/注册/";
		});
	/*点登录*/
	$("#login_page #login").unbind("click").bind("click",function(){
		var name=$("#login_page #name").val();/*账号*/
		var key=$("#login_page #key").val();/*密码*/
		var remember=$("#login_page #remember").val();/*自动登录*/
		if(!name){
			pop("请填写账号");
			return false;
			}
		if(!key){
			pop("请填写密码");
			return false;
			}
		var auto = $.trim($("#remember:checked").val());
		$.post('/用户/登录验证',{"手机号":name,"密码":key,"自动登录":auto},function(json){
			var data = eval("("+json+")");
			if(data.状态 == 200 ){

				pop("登录成功");

			}else{

				pop(data.状态说明);
			}
		});
	});
})();
/***********************注册****************************/
(function(){
	if(!$("#regest_page").length){
		return false;
		}
	/*获取验证码*/
	var codeLock=false;
	var codeClock=0;
	var codeDelay="";
	$("#regest_page .inputFrame .picCodeGet").unbind("click").bind("click",function(){
		var src=$(this).attr("src").split("?")[0];
		$(this).attr("src",src+"?_="+new Date().getTime());
	});
	$("#regest_page .inputFrame .codeGet").unbind("click").bind("click",function(){
		if(!codeLock){
			var phone=$("#regest_page #phone").val();/*手机号*/
			if(!phone){
				pop("请填写手机号");
				return false;
				}
			if(!/^1[3|4|5|7|8]\d{9}$/.test(phone)){
				pop("手机号格式有误");
				return false;
				}
			var picCode=$("#regest_page .inputFrame #picCode").val();/*图片验证码*/
			if(!picCode){
				pop("请填写图片验证码");
				return false;
			}
			codeLock=true;
			$.post('/用户/发送验证码',{"手机号":phone,"验证码":picCode},function(json){
				var data = eval("("+json+")");
				if(data.状态 == 200 ){
					codeDelay=setInterval(function(){
						if(codeClock<60){
							$("#regest_page .inputFrame .codeGet").html((60-codeClock)+"s后可重发");
							codeClock++;
						}else{
							clearInterval(codeDelay);
							codeClock=0;
							$("#regest_page .inputFrame .codeGet").html("获取验证码");
							codeLock=false;
						}
					},1000);


				}else{
					pop(data.状态说明);
					codeClock=0;
							$("#regest_page .inputFrame .codeGet").html("获取验证码");
							codeLock=false;
				}
			});
			

		}
	});
	/*点立即注册*/
	$("#regest_page #regest").unbind("click").bind("click",function(){
		var phone=$("#regest_page #phone").val();/*手机号*/
		var key=$("#regest_page #key").val();/*设置密码*/
		var key2=$("#regest_page #key2").val();/*确认密码*/
		var code=$("#regest_page #code").val();/*验证码*/
			if(!phone){
				pop("请填写手机号");
				return false;
				}
			if(!/^1[3|4|5|7|8]\d{9}$/.test(phone)){
				pop("手机号格式有误");
				return false;
				}
			if(!key){
				pop("请设置密码");
				return false;
				}
			if(!key2){
				pop("请确认密码");
				return false;
				}
			if(key!=key2){
				pop("两次输入密码不相符，请重新输入");
				return false;
				}
			if(!code){
				pop("请输入验证码");
				return false;
				}
		$.post("/用户/注册",{"手机号":phone,"密码":key,"验证码":code},function(json){
			var data = eval("("+json+")");
			if(data.状态 == 200 ){
				window.location.href=data.数据.跳转地址;

			}else{
				pop(data.状态说明);
			}

		});
	});
})();
/***********************注册成功****************************/
(function(){
	if(!$("#regestSC_page").length){
		return false;
		}
	/*点击下一步*/
	$("#regestSC_page #next").unbind("click").bind("click",function(){
		
		});
})();
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
$(document).ready(function(){
	var readyDelay= setTimeout(function(){
		$("body").addClass("active")
	},100);
});