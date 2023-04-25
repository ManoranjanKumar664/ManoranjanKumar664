
let mano={
    name:"manoranjan",
    second_name:"baskey",
    class:10,
    show:function(){
        console.log(this.name);
    },
    put(){
        console.log(this.class);
    }
};
console.log(mano.name);
console.log(mano.rollno);
mano.rollno=32;
console.log(mano.rollno);
mano.show();
mano.put();
mano.take=function(){
    console.log("everthing is good now");
};
mano.take();

function fun1()
{
    console.log("very fun");
}

mano.lelo=fun1;
mano.lelo();