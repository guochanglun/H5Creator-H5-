function Music(){
	this.play = true;
	this.audio = document.getElementById('song');
	if(data.bgm.length != 0){
		$(this.audio).attr("src","res/" + data.bgm);
	}
	if(!data.autoplay){
		this.toggle();
	}
}

Music.prototype.toggle = function() {
	if(this.play){
		this.play = false;
		this.audio.pause();
		$("#music").css("background-image", "url(\"img/stop.png\")");
	}else{
		this.play = true;
		this.audio.play();
		$("#music").css("background-image", "url(\"img/play.png\")");
	}
	$("#music").toggleClass('music-rotate');
};
