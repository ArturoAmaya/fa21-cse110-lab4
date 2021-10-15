function myfunc (){
    let d =new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let intervalID = setInterval(myfunc, [1000]);