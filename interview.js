const links = document.querySelectorAll('a')
const audio = document.querySelector('audio')

function playSound () {
    if (!audio) return;
        audio.currentTime = 0;
        audio.play();
}

buttons.forEach(links => {
    links.addEventListener('mousedown', playSound)
})