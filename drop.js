
function dropDown(){
    var elem = document.getElementById('drop');
    var id = setInterval(frame, 5);
    var op = 0
    function frame() {
        elem.style.display = 'block';
    if (elem.style.opacity >= 1) {
        clearInterval(id);
    } else {
        op += .035;
        elem.style.opacity = op;
    }
}
}