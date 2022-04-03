const counter = {};
const handler = {
    get:(obj, name) =>{
        if(name === 'number'){
            return this._num || 0;
        }
    },
    set:(obj, name, value) =>{
        if(name === 'number'){
            this._num = value;
            console.log(count);
            document.querySelector('#count').textContent = this._num;
        }
    }
};

const proxy = new Proxy(count, handler);
document.querySelector('#up').addEventListener('click',()=>{
    proxy.number++;
});
document.querySelector('#down').addEventListener('click',()=>{
    proxy.number--;
});
