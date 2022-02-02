
let arr = [];

function valget(val) {
    
    arr.push(val)
    document.querySelector(`.top-monitor`).innerHTML = arr.join('');
    document.querySelector(`.main-monitor`).innerHTML = eval(arr.join('')).toFixed(2);

}

let allclear = () =>{
    
    arr = [];

    document.querySelector(`.top-monitor`).innerHTML = 0;
    document.querySelector(`.main-monitor`).innerHTML = '';

}

let back = () =>{
    
    arr.pop();

    if ( arr == '' ) {
        document.querySelector(`.top-monitor`).innerHTML = '0';
        document.querySelector(`.main-monitor`).innerHTML = '';
    }else {
        document.querySelector(`.top-monitor`).innerHTML = '';
        document.querySelector(`.main-monitor`).innerHTML = eval(arr.join(''));
    }
    

}

function fainalres() {
    
    let result = document.querySelector(`.top-monitor`).innerHTML = eval(arr.join('')).toFixed(2);
    arr = [];
    arr.push(result)
    document.querySelector(`.main-monitor`).innerHTML = arr.join('');

}