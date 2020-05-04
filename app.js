'use strict';
const record = new Map();
record.set(0,0);
record.set(1,1);

function fib(n){
    if(record.has(n)){
        return record.get(n);
    }
    const value = fib(n-2) + fib (n-1)
    record.set(n, value);
    return value;
}
const length = 100;
for (let index = 0; index <= length; index++) {
    console.log(index + "番目の数値は" + fib(index));    
}

