export default class Track {

    constructor (element, url) {
        this.elements = {
            gui: element,
            playButton: element.querySelector('[data-track-play-button]'),
            volumeButton: element.querySelector('[data-track-volume-button]'),
        };
        this.url = url;
        this.isPlaying = false;
        this.volume = 0;

        this.load();
        this.init();
    }

    init () {
        this.elements.playButton.addEventListener('click', () => this.switchPlaying());
        this.elements.volumeButton.addEventListener('input', (e) => this.setVolume(e.currentTarget.value));
    }

    load () {
        this.audio = new Audio(this.url);
    }

    switchPlaying () {
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play();
            this.audio.muted = false;
        }
        this.isPlaying = !this.isPlaying;
    }

    setVolume (value) {
        this.audio.volume = value / 100;
    }

};
