// 1. Declare uma vairável do nome wight
var weight 

// 2. Que tipo de dado é a variavel acima
console.log(typeof(weight))

// 3. Declare uma variável e atribua valores para cada um dos dados (nome, idade,estrelas, inscrição):

/*const name = 'Asheley'
let age = 12
var wight = 30.2
var star = 9.9
isSubscribed = true */
 

/* 
    4: A variaável student(estudante) acima é do que tipo de dados
    res: console.log(typeof(student))

    4.1 Atribua a ela as mesmas propideddes e valores do exercico 3
*/
let student = {
    name: 'Aloy',
    age: 24,
    weight: 69.2,
    stars: 9.0,
    isSubscribed: true
}

/* 
    4.2 Mostre in console a seguinte mensagem 

    <name> tem idade <age> e pesa  <wight> kg>

    Atenção, substitua <nome> <age> e <wight>
    pelos valores de cada propiedade do objeto*/

    console.log(`${student.name} tem ${student.age} e pesa ${student.weight}`)

/* 
    5. Declare uma variaável do tipo Array, do o nome students e atribua a ela nenhum valor,ou seja, somente o Array vazio */

    let students = []
    //console.log(students)//

/*
    6. Reatribua os valores da variável acima, colocando dentro dela o objeto student questão 4, (Não mas usar o objeto ciado e isnserir ele no Arry)*/
    students = [
        'maria',
        student
    ]
    // para mostrar o comando  na sua tela use o comando (console.log(students))

    /*
    7. Coloque no console o valor da posiçção zero do Array acima */
    console.log(students[0])
    
    /*
    8. Crie um novo student e coloque ana posição q do Aray srudents */
    const adele = {
        nome: 'Adele',
        idade: 32
    }
    students = [
        'maria',
        adele
    ]
    
students[2] = student
console.log(students)