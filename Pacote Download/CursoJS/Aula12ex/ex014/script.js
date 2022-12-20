function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#897867'
    } else if (hora >= 12 && hora <= 16) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#ffdfe2'
    } else if (hora > 16 && hora < 19){
        //BOM FIM DE TARDE
        img.src = 'fimdetarde.png'
        document.body.style.background = '#e48161'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#162745'
    }
}