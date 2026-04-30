// console.log("This is external JS file"); 
// document.write("sample output display using document object")



num = "java"
num = 'javascript'
num = `javascript ${10 + 30}`
console.log(num);
num = 50;
console.log(num);
num = `addition of 10 and 20 :${10 + 20}`
console.log()



num = true;
console.log(num);


class SampleExample {
    display() {
        console.log("This is non-static display method is sampleExample Class");
    }
    test(){
        console.log("test method");
    }
}


// function addition(){
console.log(10 + 20);
// }

s1 = new SampleExample()
s1.display()
s1.test()

// function addition() {
//     console.log(10 + 20);
// }

// addition()


num = 331;


result = num % 2 == 0 ? "even number " : "odd number"
console.log(result);


a=10;
b='10';
c=null
d=Symbol(10);
e=3435664n
let f;
console.log(c==d)
console.log(c===d);


console.log("type of a varaible is:",typeof a);
console.log("type of b varaible is:",typeof b);
console.log("type of c varaible is:",typeof c);
console.log("type of d varaible is:",typeof d);
console.log("type of e varaible is:",typeof e);
console.log(typeof f)

