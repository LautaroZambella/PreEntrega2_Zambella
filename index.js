//// calculadora promedios de alumnos


let decision = parseInt(prompt("Pulse 1 para calcular promedios, 2 para dejar de hacerlo"))
const clase =[]
class estudiante {
    constructor(nombre, materia, promedio) {
        this.nombre = nombre 
        this.materia = materia
        this.promedio = promedio 
    }
}

const subject = prompt("Ingrese la materia: ")



while (decision !== 2) {
    const nombreAlumno = prompt("Ingrese el nombre del estudiante: ")
    const parciales = parseInt(prompt("Ingrese numero de parciales: "))
    let nota = 0

    if ((!isNaN(parciales)) && (parciales > 0)) {



        function promedio(parciales) {
            for (let i = 1; i <= parciales;) {
                let inputNota = prompt("Ingrese la nota numero" + " " + i);
                let notaNumero = parseInt(inputNota);
    
                if (!isNaN(notaNumero)) {
                    nota += notaNumero;
                    if (i === parciales) {
                        nota = nota / parciales;
                    }
                i++;
                } else {
                    alert("No ingresó una nota válida");
                }
            }
        }
    

        function promocion (nota) {
            if (nota >= 6.5) {
                alert("Felicitaciones, el estudiante "  + nombreAlumno + " " + "promociono la materia")
            }
            else if ((nota < 6.5) && (nota >= 4 )) {
                alert("El estudiante " + nombreAlumno + " " + "tendra que rendir el final")
            }
            else {
                alert("El estudiante " + nombreAlumno + " " + "debera recursar la materia")
            }
  
        }

        promedio(parciales)
        alert(nombreAlumno + " " + "tiene un promedio de: " + nota)

        promocion(nota) 
        let nashe = new estudiante(nombreAlumno, subject, nota)
        clase.push(nashe)
        console.log(clase)

        function hablar (){
            let mensaje = '';
            clase.forEach((nashe)=>{
                mensaje = mensaje + " " + nashe.nombre + " tiene un promedio de: " + nashe.promedio + " en la materia: " + nashe.materia + "\n"
            })
            alert(mensaje)
        }
        let eliminar = parseInt(prompt("ingrese 1 para eliminar al ultimo estudiante" + "\n" + "Pulse cualquier otra tecla para no eliminar al ultimo estudiante"))
        if (eliminar === 1 ){
             clase.pop()
        }
        decision = parseInt(prompt("Pulse 1 para calcular promedios, 2 para dejar de hacerlo"))
    }
    else {
        alert("No ingreso un numero de parciales valido")
    }
    }
    let ordenado = prompt("Ingrese 1 para ordenar segun las notas, cualquier otra cosa para no hacerlo")
    if (ordenado == 1 ) {
        clase.sort((a,b)=> {
            if (a.promedio > b.promedio) {
                return 1
            }
            if (a.promedio < b.promedio) {
                return -1
            }
            return 0
        })
    }
    hablar()
    let notaMinima = parseInt(prompt("Ingrese la nota minima que quiera buscar: "))
    const filtrado = clase.filter((producto) => producto.promedio >= notaMinima)
    let mensajeFiltrado = ""
    filtrado.forEach((aja) => {
        mensajeFiltrado = mensajeFiltrado + aja.nombre + " tiene un promedio de " + aja.promedio + " superior o igual a la nota especificada " + notaMinima + "\n"
    });
    alert(mensajeFiltrado);
