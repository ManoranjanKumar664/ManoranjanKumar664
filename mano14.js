/* 
let input1=document.getElementById("input1");
input1.addEventListener("change",fun1);
function fun1(){
    console.log(this.value);
}

let input2=document.getElementById("input1");
input2.addEventListener("change",fun2);
function fun2(){
    console.log(this.value);
}

let input3=document.getElementById("input1");
input3.addEventListener("change",fun3);
function fun3(){
    console.log(this.value);
} */

let mano="manoranjan";
let a1=mano.charAt(4);
console.log(a1);
let a2=mano.lastIndexOf("a");
console.log(a2);
let a3=mano.startsWith("o");
console.log(a3);
let a4=mano.endsWith("r");
console.log(a4);
let a5=mano.includes("s");
console.log(a5);


let a8=mano.search("o");
console.log(a8);
let a9=mano.indexOf("o");
console.log(a9);
let a10=mano.slice(0,7);
console.log(a10);

let a12=mano.substring(0,7);
console.log(a12);

let a13=mano.split(" ");
console.log(a13);

let receive;
function f()
{
    let mano=50+300;
    return mano;
}
receive=f();
console.log(receive);

let brother;
let input1=document.getElementById("input1");
console.log(input1);
input1.addEventListener("change",function(event){
    let val=event.target.value;
    brother=val;
});
console.log(brother);