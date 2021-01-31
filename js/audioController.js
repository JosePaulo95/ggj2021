let audios = [];

audios.push(new Audio('audio/music/jobin-cena1.ogg'));
audios.push(new Audio('audio/music/jobin-cena2.ogg'));
audios.push(new Audio('audio/music/jobin-cena3.ogg'));
audios.push(new Audio('audio/music/jobin-cena1.ogg'));



let AudioController = {
	playSound: function (index) {
		audios[index].addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);
		audios[index].play();
	},
	stop: function () {
		audios.map(a => a.pause())
	}
}