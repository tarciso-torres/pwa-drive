require('./style.scss');

class Init {
    constructor() {
        let partial = require('./partial.html');
        let app = document.getElementById('app');
        app.innerHTML = partial;
    }
}

new Init('Tarciso');