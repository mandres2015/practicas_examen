// var socket = io()
var oculto = true

function showNots() {
    const not = document.getElementsByClassName('list-nots')
    if (oculto) {
        not[0].style.display = 'block';
        oculto = false
    }
    else{
        not[0].style.display = 'none';
        oculto = true
    }
}