'use strict';

let playSound = function (e) {
  let audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return; // Does nothing if an invalid key is pressed
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('playing');
};

let removeTransition = function (e) {
  if (e.propertyName != 'transform') return;
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
