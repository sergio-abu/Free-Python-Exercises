const sounds = ['birds singing', 'crickets chirping']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () =>{
        stopCurrent()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn) 
})



function stopCurrent() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}