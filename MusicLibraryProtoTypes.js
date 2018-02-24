var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlist.push(playlist);
}

 var Track = function(title, rating, length) {
    this.title = title;
    this.length = length;
    if(rating <= 5 && rating >= 1) {
      this.rating = rating;
    } else {
      console.log("Rating should be from 1 to 5 ");
    }
 }

 var Playlist = function(name) {
    this.name = name;
    this.tracks = [];

  }

 Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
 }

 Playlist.prototype.overallRating = function() {
  const rating = this.tracks.reduce((previous, key) => {return previous + key.rating}, 0);
 return rating / this.tracks.length;
 }

 Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((previous, key) => {return previous + key.length}, 0);

}




var track1 = new Track('The Words I Couldn’t Say', 5, 20);
var track2 = new Track('When I’m Away', 4, 25);
var track3 = new Track('With All My Heart and Soul', 1, 30);
var track4 = new Track('Girls Can Break Hearts, Too', 2, 12);
var track5 = new Track('A Darker Kind of Day', 2, 30);

var playlist1 = new Playlist("Colorful Darkness");
playlist1.addTrack(track2);
playlist1.addTrack(track3);
console.log(playlist1.overallRating());
console.log(playlist1.totalDuration());

var library = new Library("Shay", "Maxim");
library.addPlaylist(playlist1);
console.log(library.playlist);

