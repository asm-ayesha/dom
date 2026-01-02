console.log('Hello from js')
const liCollection = document.getElementsByTagName('li');
for(let li of liCollection){
    console.log(li.innerText)
}

const headingCollection = document.getElementsByTagName('h1');

for(let h1 of headingCollection){
    console.log(h1.style.color='red')
}

const sections = document.querySelectorAll('section')
for(let section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5px';
    section.style.backgroundColor = 'lightgray';
}