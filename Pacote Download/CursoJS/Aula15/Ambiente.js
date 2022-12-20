let num = [2,4,6,8]
num.push(9)
num.sort()
console.log(`Nosso vetor é o ${num}`) 
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos=0;pos<num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {
    console.log(num[pos])
}

let pos = num.indexOf(10)
console.log(`O valor 10 não existe e o JavaScript traduz como ${pos}`)
let poss = num.indexOf(8)
console.log(`O valor 8 está na posição ${poss}`)