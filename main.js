$(document).ready(function() {
	$.ajax({
		url: "songs.JSON"
	}).done(function(data) {
		console.log(data);
		for (var i = 0; i < data.songs.length; i++) {
			$('#main-content').append("<div class='content-song'>" + data.songs[i] + "</div>");
			$('#main-content').append("<div class='content-artist'>" + "<em>by:</em> "+ data.artist[i] + "<span class='content-album'>" 
				+ "<em>off the album: </em>" + data.album[i] + "</span>" + "</div>");
		}
	})



	$('#more').click(function(){
		$.ajax({
			url: "songs2.JSON"
		}).done(function(data) {
			console.log(data);
			for (var i = 0; i < data.songs.length; i++) {
			$('#main-content').append("<div class='content-song'>" + data.songs[i] + "</div>");
			$('#main-content').append("<div class='content-artist'>" + "<em>by:</em> "+ data.artist[i] + "<span class='content-album'>" 
				+ "<em>off the album: </em>" + data.album[i] + "</span>" + "</div>");
		}
	})
	})
});


