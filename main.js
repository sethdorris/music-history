var songs = [];
var artist = [];
var album = [];

songs[songs.length] = "Legs";
songs[songs.length] = "The Logical Song";
songs[songs.length] = "Another Brick in the Wall";
songs[songs.length] = "Welco(me to the Jungle";
songs[songs.length] = "Ironi!c";
songs[songs.length] = "Burn"
songs[songs.length] = "Burn"

artist[artist.length] = "ZZTop";
artist[artist.length] = "Supertramp";
artist[artist.length] = "Pink Floyd";
artist[artist.length] = "Guns & Roses";
artist[artist.length] = "Alanis Morisette";
artist[artist.length] = "In This Moment";
artist[artist.length] = "Mad at Gravity";

album[album.length] = "Eliminator";
album[album.length] = "Breakfast in America";
album[album.length] = "The Wall";
album[album.length] = "Appetite for Destruction";
album[album.length] = "Jagged Little Pill";
album[album.length] = "Blood";
album[album.length] = "Resonance";


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

    mainContent.innerHTML += "<div>";
	mainContent.innerHTML += "<h4 class=\"first-song-name\">" + songs[i] + "</h4>";
	mainContent.innerHTML += "<span class=\"info-spacer\">" + artist[i] + "</span>" + "<span class=\"info-spacer\">" + album[i] + "</span>" + "<span class=\"genre\">" + "Rock" + "</span>";
	mainContent.innerHTML += "</div>";
}

console.log(songs);
