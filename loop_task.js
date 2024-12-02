// //TASK 1

for(let i=0;i<=10;i++){
console.log(`${i}`);
}

// TASK 2

for(let i=2;i<=20;i=i+2){
console.log(`${i}`);
}

//Task 3

for(let i=1;i<=20;i=i+2){
    console.log(`${i}`);
}

//TASK 4

let sum = 0;
for(i=0;i<=20;i++){
sum+= i
}
console.log(`${sum}`)


//TASK 5   

let  fact = 1;
for(let i=5;i>=1;i--){
fact*=i;
}
console.log(`${fact}`);

//TASK 6

let tabel = Number( prompt("ENTER YOU TABEL NUMBER"))

for(let i=1;i<=16;i++){
console.log(`${i}x${tabel}=${i*tabel}`);
}


//Task 7

for(let i=10;i>=1;i--){
    console.log(`${i}`);
}

//TASK 8 

let fibonic_count = 11;
let first = 0;
let second = 1;

console.log("FIBONIC SERIS:-");
console.log(`${first}`);
console.log(`${second}`)
for(i=3;i<=fibonic_count;i++){
 let next = first+second;
 console.log(`${next}`);
 first = second;
 second = next;
}