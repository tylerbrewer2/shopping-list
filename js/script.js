$(document).ready(function() {
	$(".unimportant").click(function() {
		console.log("you clicked unimportant");
		$(".items").prepend("<div class = 'box'><h4>Hello world</h4></div>");
	});
	$(".important").click(function() {
		console.log("you clicked important")
	});
});