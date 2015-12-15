$(document).ready(function( ) {
	
	//2
	$("h1").text("Lab 9");
	
	//3
	$("#header").html("<h3>Working with JQuery</h3>");
	
	//4
	$("input[type='button']").each(function(index, element)
	{
		$(element).addClass("btn-background");
	});
	
	//5
	$("#buttons").addClass("red-border");
	
	//6
	$("p").each(function(index,element)
	{
		$(element).addClass("blue");
	});
	
	//7
	$("#first").on("click", greenBorder);
	
	function greenBorder()
	{
		$("p:first").addClass("green-border");
	}
	
	//8
	$("#last").on("click", orangeBorder);
	
	function orangeBorder()
	{
		$("p:last").addClass("orange-border");
	}
	
	//9
	$("#para3").on("click", purpleBorder );
	
	function purpleBorder()
	{
		$(this).prev().addClass("purple-border");
	}
	
	//10
	$("#para2").on("click", yellowBorder );
	
	function yellowBorder()
	{
		$(this).next().addClass("yellow-border");
	}
	
	//11
	$("#remove").on("click", removeFooter)
	
	function removeFooter()
	{
		$("#footer").remove();	
	}
	
	
});