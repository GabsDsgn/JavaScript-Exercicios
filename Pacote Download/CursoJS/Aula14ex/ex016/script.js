function contar() {
    var res = window.document.getElementById('res')
    let start = window.document.getElementById('txti')
    let end = window.document.getElementById('txtf')
    let pass = window.document.getElementById('txtp')
    var c = 0

    if(start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Passo Inválido!')
            //p = 1
        }
        if(i < f) {
            //Progressiva
            for (let c = i;c <= f;c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {
            //Regressiva
            for(let c = i;c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}