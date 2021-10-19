import '../styles/main.scss';

import BaseComponent from 'src/scripts/components/BaseComponent';

const init = () => {
    const tracksElement = document.querySelectorAll('[data-track]');
    const component = new BaseComponent(document, {});
};

document.addEventListener('DOMContentLoaded', () => init());
