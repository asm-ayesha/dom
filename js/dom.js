console.log('Hello from js')
const liCollection = document.getElementsByTagName('li');
for(let li of liCollection){
    console.log(li.innerText)
}

const headingCollection = document.getElementsByTagName('h1');

for(let h1 of headingCollection){
    console.log(h1.innerText)
}