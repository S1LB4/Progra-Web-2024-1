const leftbtn = document.querySelector(".L-btn");
const rightbtn = document.querySelector(".btn-R");

leftbtn.addEventListener('click', function(event){
    console.log('check');
    const conect = document.querySelector('.product-slide');
    conect.scrollLeft -= 1100;
    event.preventDefault();
});
rightbtn.addEventListener('click', function(event){
    console.log('check');
    const conect = document.querySelector('.product-slide');
    conect.scrollRight += 1100;
    event.preventDefault();
})

const leftbtn1 = document.querySelector(".btn-1a");
const rightbtn1 = document.querySelector(".btn-1b");

leftbtn1.addEventListener('click', function(event){
    console.log('check');
    const conect = document.querySelector('.product-slide-1');
    conect.scrollLeft -= 1100;
    event.preventDefault();
});
rightbtn1.addEventListener('click', function(event){
    console.log('check');
    const conect = document.querySelector('.product-slide-1');
    conect.scrollRight += 1100;
    event.preventDefault();
})