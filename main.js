$(document).ready(function(){

	$(".column_submit").click(function(){
		var user = $(".column_input").val();
		
		if(user == ""){
			$(".input_warn").show();
			$(".input_warn").html("Please enter your name");
			$(".input_warn").css("color","red")
			return false;
		}
		if (user.length <= 2 || user.length >= 26) {
			$(".input_warn").show();
			$(".input_warn").html("Characters should be between 3 & 25 letters ");
			$(".input_warn").css("color", "red");
			return false;
		}


	})

	$('.column_mail').on("keyup",function(){

		if($(this).val().indexOf('@') > 0 && $(this).val().indexOf('.') > 0){
			$("#email").html("Valid email");
			$("#email").css("color","#78e08f");
		}else{
			$("#email").html("Invalid email address")
			$("#email").css("color","#eb2f06")
		}
	})

	$('.column_mail').focusout(function(){
		$("#email").html("");
	})

	
	$("#scroll_top").click(function(){
		// window.scrollTo(0,0) 
		$("html, body").animate({scrollTop : 0}, "3000" )
	})
})

// Javascript

// const btn_scroll = document.getElementById("#scroll_top");

// btn_scroll.addEventListener("click", function(){
// 	window.scrollTo(0,0) 
// 	// the first zero is x axis(ie top) and the second one is y axis(ie left)
// 	// will work on IE but no animation :(

// 	// window.scrollTo({
// 	// 	top : 0,
// 	// 	left:0,
// 	// 	behaviour : "smooth"

// 	// })
// }); 