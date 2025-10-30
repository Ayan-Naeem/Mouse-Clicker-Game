let clickCount = 0

const display = document.getElementById("counter")
const anime = document.getElementById("animations")

function updater(){
    clickCount++;
    display.textContent = clickCount
    if (clickCount === 1) {
        anime.textContent = "LET'S GOO!!"
    }else if(clickCount >= 10 && clickCount < 50){
        anime.textContent = "GREAT!! DOUBLE DIGITS!!"
    }else if (clickCount >=50 && clickCount < 100) {
        anime.textContent = "TAKE SOME REST BROO"
    }else if(clickCount >= 100){
        anime.textContent = "SUPERB! TRIPLE DIGITS"
        anime.style.color = "#B20000"
    }
}

function resetbtn(){
    clickCount = 0
    display.textContent = clickCount
    anime.textContent = "START BY CLICKING THE DONUTS"
    anime.style.color = "white"
}