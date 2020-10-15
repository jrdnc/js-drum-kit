// note: backticks let us put in expression (${..}); called 'templated liberals'

function playSound(e) {
    // console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // holds most recently pressed, valid key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // holds html div associated with most recently pressed, valid key
    if (!audio) return; // stop function if not one of specified keys in html
    audio.currentTime = 0; // rewind sound to start for each 'keydown' action
    // play audio of given key
    audio.play();
    key.classList.add('playing');
    // console.log(e);

}

// remove transition after it's ended
function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // add event listener to each key and ends transition event after completed
