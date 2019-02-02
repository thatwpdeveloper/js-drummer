(function () {
    'use strict';

    function DrumMachine() {

        const self = this;
        this.keys = Array.from(document.querySelectorAll('.key'));

        this.removeTransition = function (e) {
            if (e.propertyName === 'background-color') {
                e.target.classList.remove('playing');
            }
        }

        this.removeClassAtEnd = function () {

            self.keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));

            self.keys.forEach(key => key.addEventListener('mousedown', this.removeTransition));

        }

        this.playSoundFromKeyboard = function (e) {
            const keyToPlay = e.keyCode;
            self.playSound(keyToPlay);

        }

        this.playSoundFromClick = function (e) {
            const keyToPlay = e.srcElement.dataset.key;
            self.playSound(keyToPlay);

        }

        this.playSound = function (keyToPlay) {

            const audio = document.querySelector(`audio[data-key="${keyToPlay}"]`);
            const key = document.querySelector(`button[data-key="${keyToPlay}"]`);

            if (!audio) {
                return;
            }

            key.classList.add('playing');
            audio.currentTime = 0;
            audio.play();
        }

        this.setListeners = function () {

            window.addEventListener('keydown', this.playSoundFromKeyboard);
            window.addEventListener('click', this.playSoundFromClick);
        }

        this.init = function () {

            this.setListeners();

            this.removeClassAtEnd();
        }


    }

    let drumMachine = new DrumMachine();
    drumMachine.init();

})();

// function removeTransition(e) {
//
//     console.log(e.propertyName);
//
//     if (e.propertyName === 'background-color'){
//         e.target.classList.remove('playing');
//     }
//
// }
//
// function playSoundFromKeyboard(e) {
//     const keyToPlay = e.keyCode;
//
//     playSound(keyToPlay);
// }
//
// function playSoundFromClick(e) {
//     const keyToPlay = e.srcElement.dataset.key;
//
//     playSound(keyToPlay);
// }
//
//
//
//
// function playSound(keyToPlay) {
//
//
//     const audio = document.querySelector(`audio[data-key="${keyToPlay}"]`);
//     const key = document.querySelector(`button[data-key="${keyToPlay}"]`);
//
//     if (!audio) {
//         return;
//     }
//
//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// }
//
// const keys = Array.from(document.querySelectorAll('.key'));
//
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// keys.forEach(key => key.addEventListener('mousedown', removeTransition));
//
// window.addEventListener('keydown', playSoundFromKeyboard);
// window.addEventListener('click', playSoundFromClick);