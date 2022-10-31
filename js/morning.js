$(document).ready(function(){
	//상단메뉴 마우스오버시 각 항목별 하위메뉴 슬라이드 다운
	$(".mainMenu").on("mouseenter click", function(){
		$(".mainMenu").removeClass("active");
		$("#white").stop().animate({height:"80px"});
		
		//$(".subMenu").stop().slideUp();
		//그것(마우스 갖다댄 것)의 다음요소
		$(".subMenu").stop().slideDown();
	});  
	// 마우스오버와 마우스아웃 메소드를 사용할때의 문제점은 버블링 현상이 있음. 중첩된 요소들이 가각에 기능이 작동한다. 해당 지정 요소에서만 이벤트가 발생하지 않고 상위(부모)요소에서도 동일한 이벤트가 발생하는 문제점.
	//mouseover() 메소드를 대신하여 mouseenter(), mouseout() 메소드를 대신하여 mouseleave()를 사용한다.
	$(".subMenu").mouseleave(function(){
		$(".subMenu").stop().slideUp();
	});
	
	//하위메뉴에 마우스 갖다댈 때 메인메뉴 활성유지
	$(".subMenu").mouseenter(function(){
		$(".mainMenu").removeClass("active");
		$(this).prev().addClass("active");
	});
	
	/*
	//하위메뉴에 마우스 아웃 할때 올라간다
	$("header>nav").mouseleave(function(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
		$("#white").stop().animate({height:0});
	});
	
	
	//메뉴 마지막 항목이 포거스를 잃을때
	$(".last").blur(function(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
		$("#white").stop().animate({height:0});
	});
	*/
	
	$("header>nav").mouseleave(function(){ 
	menu();
	});
	
	$(".last").blur(function(){
	menu();
	});
	
		function menu(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
		$("#white").stop().animate({height:0});	}
		
		

		
	
	///왼쪽방향 자동 슬라이드
	setInterval(leftMove,3000);
	function leftMove(){
		$("#sliding div").stop().animate({left:"-1100px"}, 2000,function(){$(this).append($(this).children().first());
		$(this).css("left",0);
	}); }
	
	
	
	//공지사항보이기
	$(".show").click(function(){
		$("#popup").fadeIn();
	});
		//공지사항닫기
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		});
	
	//키보드 자판에서 어떤키를 눌렀는지 감지한다.
	$(document).keydown(function(event){
		if(event.key==="Escape"){$("#popup").fadeOut();
		}
	});
	
});///////end