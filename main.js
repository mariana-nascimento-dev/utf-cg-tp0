const audio = document.getElementById("music")
const buttonM = document.getElementById("ctrl")
const buttonI = document.getElementById("imgs")

let index = 0
const slides = document.querySelectorAll(".slide")

buttonM.addEventListener("click", playMusic)
buttonI.addEventListener("click", changeImg)

function playMusic() {
    if (audio.paused){
        audio.play()
    } else {
        audio.pause()
    } 
}

function changeImg() {
    slides[index].classList.remove("active")

    index++

    if (index >= slides.length){
        index = 0
    }

    slides[index].classList.add("active")
}
