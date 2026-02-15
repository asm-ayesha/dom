function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}



document.getElementById('btn-make-red').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})


document.getElementById('btn-make-gold').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold';
})