
// IIFE (Immediately Invoked Function Expression)
(function() {
    'use strict';
    const CLOSE = 'Close';
    const OPEN = 'Open';

    let app = {
        toggleButton: document.querySelector('#toggleButton'),
        box: document.querySelector('.box h3'),
        state: {close: true},
    };

    app.open = function() {
        app.state.close = !app.state.close;
        app.toggleButton.value = CLOSE;
        app.showBox();
    }

    app.showBox = function() {
        app.box.style.opacity = 1;
    }

    app.close = function() {
        app.state.close = !app.state.close;
        app.toggleButton.value = OPEN;
        app.hiddeBox();
    }

    app.hiddeBox = function() {
        app.box.style.opacity = 0;
    }

    app.toggleButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (app.state.close) {
            app.open();
        } else {
            app.close();
        }
    });

})();