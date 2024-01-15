// const exit = document.querySelector('.exit');
// const click = document.querySelector('.click');
// const text = document.querySelector('.text');

// exit.addEventListener('click',()=>{
// text.style.display = "none"});
// click.addEventListener('click',()=>{
//     text.style.display = ''
// })
// text.addEventListener('mouseover',()=>{
//     exit.style.background = 'green' ;
//     click.style.background = 'yellow'

// })
// exit.addEventListener('click',()=>{
//     click.style.background= 'none'
// });
// click.addEventListener('click',()=>{
//    exit .style.background= 'none'
// });

const btn= document.querySelector('.btn');
const div = document.querySelector('.div');
const btn1= document.querySelector('.btn1')
const btn2= document.querySelector('.btn2');
const h1 = document.querySelector('.h1');
const img = document.querySelector('.img');
const smile = document.querySelector('.smile');
const btn3= document.querySelector('.btn3')
const h2 = document.querySelector('.h2');
const sad= document.querySelector('.sad')

img.style.display = 'none'
smile.style.display = 'none'
sad.style.display = 'none'
btn.addEventListener('click',()=>{
    div.style.background = 'yellow'
    h1.replaceChildren('>') 
    h2.replaceChildren('O') 
    img.style.display = ''
    smile.style.display = 'none'
    sad.style.display = 'none'




})
btn1.addEventListener('click',()=>{
    div.style.background = 'yellow'
    h1.replaceChildren('O')
    h2.replaceChildren('O') 
    img.style.display = 'none'
    smile.style.display = ''
    sad.style.display = 'none'
})
   btn2.addEventListener('click',()=>{
    div.style.width = "200px"
    div.style.height = '250px'
    div.style.rotate= '150deg'
    sad.style.display = ''
    img.style.display = 'none'
    smile.style.display = 'none'
    div.style.color= 'white'
   }) 
   btn3.addEventListener('click',()=>{
    div.style.width = "200px"
    div.style.height = '200px'
    h1.replaceChildren('-')
    h2.replaceChildren('+')
    img.style.display = 'none'
    smile.style.display = 'none'
    sad.style.display = 'none'
    

   

   })