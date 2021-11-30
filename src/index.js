import './less/index.less'

// Your code goes here!

const home = document.querySelector('nav a:nth-of-type(1)');
const about = document.querySelector('nav a:nth-of-type(2)');
const blog = document.querySelector('nav a:nth-of-type(3)');
const nav = document.querySelector('nav')



home.onclick = function() {
   // home.textContent = 'There is no home';
   about.style.color = 'red'
}


about.addEventListener('mousedown', function(){
    console.log('Down')
    about.textContent = 'Why have you done this!?';
})


about.addEventListener('mouseup', function(){
    console.log('up')
    about.textContent = 'Great, It is broken';
})


blog.addEventListener('mouseover', function() {
    console.log('yooo')
    blog.textContent = 'yooo'
})
blog.addEventListener('mouseleave', function() {
    console.log('see ya')
    blog.textContent = 'see ya'
})


nav.addEventListener('dblclick', function() {
    nav.textContent = 'I dont work u can chill out now'
    nav.style.color = 'Red'
    nav.style.fontSize = '40px'
})

//contact.addEventListener()

function escKey(evt) {
    console.log(evt)
    if (evt.key === 'Escape') {
        nav.textContent = 'You have clicked Escape'
        nav.style.fontSize = '50px'
    }
}

document.addEventListener('keydown', escKey);

function escKeyup(evt) {
    console.log(evt)
    if (evt.key === 'Escape') {
        nav.textContent = 'Why do you want to leave'
        nav.style.fontSize = '50px'
    }
}

document.addEventListener('keyup', escKeyup);


document.addEventListener('pointermove', function(){
   document.body.style.backgroundColor = 'gray'
})

document.body.addEventListener('auxclick', function(){
    document.body.style.backgroundColor ='purple'
}) 
