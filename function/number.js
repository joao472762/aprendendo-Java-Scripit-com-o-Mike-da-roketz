function num(n){
    console.log(`o número é ${n}`)
    console.log('A TABUADA É ')
    for(var c = 1; c <= 10; c++ ){
        console.log(`${n} x ${c} = ${n * c}`)
    }
    var resultado = 1
    console.log('E O SEU FRACIONAL É')
    for(var f = n ; f >= 1 ; f -= 1){
        console.log(`${f} X `,end='')
        resultado *= f

    }
    console.log(`o resultaodo é ${resultado}`)
}
let sum = function(number1, number2){
    console.log(number1 + number2)
}
sum(2,3)