let i = document.querySelector("#inicio")
let f = document.querySelector("#final")
let s = document.querySelector("#salto")
let t = document.querySelector("#print")

//coversor




function contador(){

    
        
    let inicial = Number(i.value)
    let final = Number(f.value)
    let salto = Number(s.value)

    console.log(s.value.length)

    if(i.value.length == 0 || f.value.length == 0){
        alert("Dados Faltando para a contagem")
    }else{

        if (s.value <= 0){
            alert("passo invalido, considerando como 1.")
            salto = 1
        }

        if (inicial <= final){

            t.innerHTML = ""
            for(c = inicial; c <= final; c += salto ){
                t.innerHTML += `<span> ${c} <span> ->`
                
            }

        } else{

                t.innerHTML = ""
                for(c = inicial; c >= final; c -= salto ){
                t.innerHTML += `<span> ${c} <span> ->`  
                }

        }

        t.innerHTML += `<span>Fim da contagem</span>`
    }   
}