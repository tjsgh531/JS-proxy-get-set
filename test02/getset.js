let count ={};
Object.defineProperty(count, 'number', {
    get: function(){
        return this._num || 0;
    },
    set: function(num){
        this._num = num;
        console.log(this._num);
        document.querySelector('#count').textContent = this._num;
    },
});

document.querySelector('#up').addEventListener('click',()=>{
    count.number++;
});
document.querySelector('#down').addEventListener('click',()=>{
    count.number--;
})