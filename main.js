var songs = [];
var artist = [];
var album = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Burn - by In This Moment on the Album Blood");
songs.push("Burn - by Mad at Gravity on the Album Resonance");

var mainContent = document.getElementById("main-content");

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/\>/g, "-");
	songs[i] = songs[i].replace(/!/g, "");
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace(/#/g, "");
	songs[i] = songs[i].replace(/$/g, "");
	songs[i] = songs[i].replace(/%/g, "");
	songs[i] = songs[i].replace(/^/g, "");
	songs[i] = songs[i].replace(/&/g, "");
	songs[i] = songs[i].replace(/\*/g, "");
	songs[i] = songs[i].replace(/\(/g, "");
	songs[i] = songs[i].replace(/\)/g, "");	

	mainContent.innerHTML += songs[i] + "<br>";
}




console.log(songs);
