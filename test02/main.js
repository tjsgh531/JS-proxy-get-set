let count = 0;
let counter = document.querySelector('#count');
document.querySelector('#up').addEventListener('click', function() {
    count++;
    counter.textContent = count;
});
document.querySelector('#down').addEventListener('click', function(){
    count--;
    counter.textContent = count;
});