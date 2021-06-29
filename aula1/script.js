document.body.style.backgroundColor = '#0001'
function somar(){
    //primeiro estou mudando a cor de fundo, para ver se o Java.Scrip está realmete funcionado
    document.body.style.backgroundColor = "#fff"

    //Aqui estou pegando os dados do (input)com o id="numero1" do meu html, para utilizar no java
    let num1= document.getElementById('numero1')

    /*estou fazendo o mesmo processo para pegar o segundo numero 
    Observação: para declarar uma variavel e usando o let, mas você pode usar o para declrar uma variavel usando ((var) var num2=) ou usando ((const)) const num2 = )
    */
    let num2 = document.getElementById('numero2')

    //estou passando o input que veio como ums string para um numero obs: use o window.alert(`o número é ${n1}`) para conferir se o número aparece e para ter certeza que ele é mesmo um numero (Number), faça uma operação simples com (`o numero é igual a R${n1 + 2}`)
    let n1 = Number (num1.value)

    // aqui estou fazendo o mesmo processo só que com o segundo número
    // Observação: para passar um número (para Inteiro (INT) você pode usar paseInt), (para numero com numeros depois da vírgula os (float), você usa o (parseFloat)) e se não quiser utilizar nada use apenas o (Number)
    n2 = Number (num2.value)

    // Agora estamos pegando aquela div com o id="res" com a funcionalidade de respoder a pergunta do usuário
    let resposta = window.document.getElementById
    ('res')

    // Por fim 
    resposta.innerHTML = `a soma de ${n1} + ${n2} é igual a ${n1 + n2}`

}
console.log('ei anord')