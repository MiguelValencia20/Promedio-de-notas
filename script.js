let notas = [5,10,8,9,2]

function mostrar_notas(){
    let lista = document.getElementById("notas")

    for (let nota of notas){
        let objeto = document.createElement("li")
        objeto.textContent = nota
        lista.append(objeto)
    }
}


function promedio(){
    let suma = 0
    for(let i = 0; i < notas.length; i++ ){
        suma =  +suma + +notas[i]
    }
    let promedio = suma / notas.length
    let resultado = document.getElementById("promedio")
    resultado.textContent = promedio
}

function mayor(){
    let nota_mayor = 0
    for(let i = 0; i < notas.length; i++ ){
        if(notas[i] > nota_mayor){
            nota_mayor = notas[i]
        }
    }
    let resultado = document.getElementById("mayor")
    resultado.textContent = nota_mayor
}

function consultar(){
    let aplazar = 'No tiene que aplazar'
    for(let i = 0; i < notas.length; i++ ){
        if (notas[i] <= 4){
            aplazar = 'Tiene que aplazar'
        }
    }
    let resultado = document.getElementById("aplazar")
    resultado.textContent = aplazar
}