function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'youngh.png')
            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'male.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'youngm.png')
            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'woman.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldm.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}