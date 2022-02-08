 window.addEventListener('keydown', function(e) {
     let audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`);
     const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`);
     console.log(key);

     if (!audio) return; // Does nothing if an invalid key is pressed

     audio.currentTime = 0; // Rewind to the start
     audio.play();
 })