$(function () {
	console.log("hello world");
	$(".devoure-burger").on("click", function (event) {
		var id = $(this).data("id");
		console.log("the id to devoure ", id);
		// Send the PUT request.
		$.ajax("/api/update/" + id, {
			type: "PUT",
			data: 1
		}).then(
			location.reload()
		);
	});

	$(".new-burger").on("click", function (event) {
		event.preventDefault();
		var newBurger = {
      name: $("#burger-name").val().trim()
		};
		if(newBurger.name !== ''){
			$.ajax("/api/add/", {
				type: "POST",
				data: newBurger
			}).then(
				location.reload()
			);
		}
	});
	
});

