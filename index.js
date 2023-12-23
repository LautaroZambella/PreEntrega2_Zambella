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
let parcialesCheck = true

if (parciales <= 0) {
    parcialesCheck = false
}
function promedio (parciales) {
    if (parcialesCheck == true) {
    for (let i = 1; i <= parciales; i++){
        nota = nota + parseInt(prompt("Ingrese la nota numero" + " " + i))
        if (i == parciales) {
            nota = nota/parciales
        }
    }
  }
  else {
    alert(nombreAlumno + " " + "no ha tomado parciales")
  }
}

function promocion (nota) {
    if (parcialesCheck == true) {
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
}

promedio(parciales)
if (parcialesCheck == true) {
alert(nombreAlumno + " " + "tiene un promedio de: " + nota)
}
promocion(nota)
// 
let nashe = new estudiante(nombreAlumno, subject, nota)
clase.push(nashe)
//  nashe = new estudiante("Julian", "futbol", 10)
// alert(nashe.nombre + " " + nashe.materia + " " + nashe.promedio)
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
 hablar()

