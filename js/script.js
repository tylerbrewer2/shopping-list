$(document).ready(function() {
	$(".unimportant").click(function() {
		var inputText = $(".text-input").val();
		$(".items").append("<div class = 'box'><h4>" + inputText + "</h4></div>");
	});
	$(".important").click(function() {
		var inputText = $(".text-input").val();
		$(".items").prepend("<div class = 'box'><h4>"+ inputText + "</h4></div>");
	});
	$(".items").click(function(e) {
		$(e.target).remove();
	});
});