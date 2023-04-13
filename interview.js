const links = document.querySelectorAll('a')
const audio = document.querySelector('audio')

function playSound () {
    if (!audio) return;
        audio.currentTime = 0;
        audio.play();
}

links.forEach(a => {
    a.addEventListener('click', () => {
        playSound
        console.log('it ran')
    })
})