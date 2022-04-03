const watcher = (variable, callback) => new Proxy(variable, {
    set: (obj, prop, value) =>{
        obj[prop] = value;
        callback(obj);
    },
    get: (obj, prop) =>{
        return prop in obj ? obj[prop] : undefined;
    },
});

let defaultState = {value : 0};
let proxyState = watcher(defaultState, state => console.log(state));

console.log(proxyState);

proxyState = 1;