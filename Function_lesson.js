// Функция
function yolochka1(item_1, item_2){

    let mass = 'Hello!'
    console.log(mass, item_1, item_2)
    console.log(mass, item_1 + item_2)
}

yolochka1(11, 22)


// Стрелочная функция (=>)
let t1 = 10
let t2 = 20
let t3 = 30
let t4 = 40


let f1 = () => console.log('Hello World!')
let f2 = (t11, t22) => console.log ('Sum = ', t11 + t22)

f1()
f2(t1, t2)

// Стрелочная функция (=>) которая зависит от входного условия (true/false)
// like if

let f33 = (t1 > t2) ?

    (tt1, tt2) => console.log('order = ', tt1 + tt2) :
    (tt1, tt2) => console.log('order = ', tt1 - tt2) ;

    f33(t3, t4)



// Прототипы
    function yolochka33(){};


    yolochka33.prototype.fast = function (){
        console.log('FAST !!')
    }

    yolochka33.prototype.green = function (sun, co2){
        console.log('GREEN ==', sun, '+', co2)
    }

    yolochka33.prototype.shishki = function (){
        console.log('shishki == Yolki')
    }

    let forest = new yolochka33()

    forest.fast()
    forest.green(4500, 50)
    forest.shishki()