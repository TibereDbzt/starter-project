import '../styles/main.scss';

import Radio from 'components/Radio';
import Track from 'components/Track';

const init = () => {
    const tracksElement = document.querySelectorAll('[data-track]');
    const radio = new Radio();
    tracksElement.forEach(trackElement => {
        radio.addTrack(
            new Track(trackElement, trackElement.dataset.trackUrl)
        );
    });
};

window.addEventListener('load', () => {
    init();
});
