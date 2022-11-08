console.log("1 --" + true || true)
console.log("2 --" + true || false)
console.log("3 --" + false || true)
console.log(false || true)


onsole.log(true && true)
console.log(true && false)
 
let temperatura = 0;
let item_2 = 20;
let item_3 = 50;

if (item_1 > 3 || item_2 < 15 && item_3 == 50) {
     console.log("Idi kuhat'")
 } else {
     console.log("Hodi golodniy")
 }


 while(temperatura < 40) {
    
     if (temperatura < 10){
         console.log("temperatura = ", temperatura, "Holodno!")
      } else if (temperatura >= 10 && temperatura < 30){
         console.log("temperatura = ", temperatura, "Teplo!")
      } else{
         console.log("temperatura = ", temperatura, "AD")
 }

 temperatura++

     console.log(item_1, " = Idi kuhat'")
     console.log(item_2, " = -----")
     item_1++
     item_2++

 for (let i = 0; i < 10; i++ ){

     console.log(i, "= FOR")
 }

 let names = ['Kate',
              'Alex', 
              'Ivan',
              'Ignat',
              'Andrey',
              'Vika']

 for (item_1 of names){

     console.log(item_1)
 }

let names = ['Kate',
             'Alex', 
             'Ivan',
             'Ignat',
             'Andrey',
             'Vika']

for (item_1 of names){

    if (item_1 == 'Ignat')
        break
    console.log(item_1)
}
