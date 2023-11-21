const audioMuerte = new Audio('./assets/audio/muerte.mp3')
const audioShoot = new Audio('./assets/audio/shoot.mp3')
const audioCollision = new Audio('./assets/audio/collision.mp3')
const audioVictoria = new Audio('./assets/audio/victoria.mp3')
const audioVictoria2 = new Audio('./assets/audio/victoria2.mp3')
const audioOver = new Audio('./assets/audio/over.mp3')
const audioTransporte = new Audio('./assets/audio/transporte.mp3')
const audioLevel = new Audio('./assets/audio/tone.mp3')

audioLevel.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
});

function mutear() {
    audioMuerte.muted = !audioMuerte.muted
    audioShoot.muted = !audioShoot.muted
    audioCollision.muted = !audioCollision.muted
    audioVictoria.muted = !audioVictoria.muted
    audioVictoria2.muted = !audioVictoria2.muted
    audioOver.muted = !audioOver.muted
    audioTransporte.muted = !audioTransporte.muted
}

function loadAudioBackground(status) {
    audioLevel.muted = status
}
