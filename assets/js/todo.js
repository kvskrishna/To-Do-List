$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){	// This this refers to the spanthat has been clicked on
		$(this).remove();	// This this is the parent of span i.e li
	});
	event.stopPropagation();
});
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + newTodo + "</li>")
	}
});
$(".fa-pencil").on("click",function(){
	$("input[type='text']").fadeToggle(300);
});