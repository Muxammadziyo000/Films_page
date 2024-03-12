var ElCarusel = document.querySelector('.carusel')
var count = 0
function Previous(){
    if(count > 0){
        count = count - 1
    }
    ElCarusel.style.transform = `translateX(-${1250 * count}px)`
}
function Next(){
    if(count < 2){
        count = count + 1
    }
    ElCarusel.style.transform = `translateX(-${1250 * count}px)`
}

