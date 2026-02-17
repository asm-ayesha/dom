// function makeYellow() {
//     document.body.style.backgroundColor = 'yellow';
// }
// function makeGreen() {
//     document.body.style.backgroundColor = 'green';
// }

// const btnMakeBlue = document.getElementById('btn-make-blue');
// btnMakeBlue.onclick = function makeBlue() {
//     document.body.style.backgroundColor = 'blue';
// }



// document.getElementById('btn-make-red').addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// })


// document.getElementById('btn-make-gold').addEventListener('click', function () {
//     document.body.style.backgroundColor = 'gold';
// })





document.getElementById('btn-update-title').addEventListener('click', function(){
    console.log("gyuyf")
    const pageTitleEl = document.getElementById('page-title');
    pageTitleEl.innerText = 'upadte this text'
})



document.getElementById('btn-update').addEventListener('click', function(){
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value ;
    console.log(name)
    const nameP = document.getElementById('name');
    nameP.innerText = name;
})

