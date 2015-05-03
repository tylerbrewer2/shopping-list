$(document).ready(function() {
	$(".unimportant").click(function() {
		console.log("you clicked unimportant");
		$(".items").append("<div class = 'box'><h4>Goodbye world</h4></div>");
	});
	$(".important").click(function() {
		$(".items").prepend("<div class = 'box'><h4>Hello world</h4></div>");
		console.log("you clicked important")
	});
	$(".items").click(function(e) {
		$(e.target).remove();
	});
});