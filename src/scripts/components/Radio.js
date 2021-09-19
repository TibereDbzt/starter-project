export default class Radio {

    constructor (tracks = []) {
        this.tracks = [...tracks];
    }

    addTrack (track) {
        this.tracks.push(track);
    }

}
