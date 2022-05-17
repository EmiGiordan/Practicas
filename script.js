/* crear un sistema deje ingresar a mayores de 18 años
y al primero de las 2 AM ingrese gratis */
// this.ingresoMayor()

// function ingresoMayor(edad){
//     edad = prompt("Ingrese su edad.");
//     if ( edad < 18 ) {
//         alert("No puede ingresar.");
//     } else {
//         alert("Puede ingresar.");
//         this.ingresoHora()
//     }
// }
// function ingresoHora(hora){
//     hora = prompt("Ingrese hora.");
//     if ( hora >= 2 ) {
//         primerIngreso = prompt("¿Es el primero en ingresar?");
//         if (primerIngreso.toLowerCase().includes("si")) {
//             alert("Ingresa gratis.")
//         }
//     } else { alert("Paga entrada.")}
// }

/* crear un mini sistema de ausentes y presentes
pasados los 30, libre. Máximo 10%.
sumar p y a */
// var alumno = {
//     presente: 0,
//     ausente: 0,
// }

// for ( i = 0; i < 30; i++) {
//     this.tomarAsistencia()
// }

// if ( alumno.presente + alumno.ausente == 30) {
//     if (alumno.ausente > 3) {
//         alert("Alumno libre.")
//     } else { alert("Alumno vigente.")}
// }

// alert(`El alumno tiene ${alumno.presente} asistencias
// y ${alumno.ausente} inasistencias`)

// function tomarAsistencia(asistencia) {
//     asistencia = prompt("Ingrese asistencia del alumno","P")
//         if (asistencia == "P") {
//             alumno.presente += 1;
//         } else { alumno.ausente += 1
//         }
// }

/* Mostrar 3 celulares con color, peso, resolución, camara y memoria ram. Prender, reiniciar, tomar fotos y grabar. + 1 cualidad c/u. */
// class Celulares {
//     constructor(modelo, color, peso, resolucion, camara, resolucionCamara, memoriaRam, ) {
//         this.modelo = modelo
//         this.color = color
//         this.peso = peso
//         this.resolucion = resolucion
//         this.camara = camara
//         this.resolucionCamara = resolucionCamara
//         this.memoriaRam = memoriaRam
//         this.encendido = false
//     }

//     prenderCelular(){
//         alert(`Encendiendo dispositivo ${celular.modelo}`);
//         this.encendido = true
//     }

//     reiniciarCelular(){
//         if (this.encendido = true) {
//             alert(`Reiniciando dispositivo ${celular.modelo}`);
//         }
//     }

//     fotoGrabacion(){
//         if (this.encendido = true) {
//             alert(`*sonidos de camara de un distinguinble ${celular.modelo}*`);
//         }
//     }

//     apagarCelular(){
//         if (this.encendido = true) {
//             alert(`Apagando dispositivo ${celular.modelo}`);
//             this.encendido= false
//         }
//     }

//     mostrarInfo(){
//         return `
//         Modelo: <b>${this.modelo}</b> <br></br>
//         Color: ${this.color} <br></br>
//         Peso: ${this.peso} <br></br>
//         Resolución de Pantalla: ${this.resolucion} <br></br>
//         Resolución de la Camara: ${this.resolucionCamara} <br></br>
//         MemoriaRam: ${this.memoriaRam} <br></br>
//         Cualidad Única: <b>${this.cualidad}</b> <br></br>
//         `
//     }
// }

// class CelularMejor extends Celulares {
//     constructor (modelo, color, peso, resolucion, camara, resolucionCamara, memoriaRam, cualidad) {
//         super (modelo, color, peso, resolucion, camara, resolucionCamara, memoriaRam);
//         this.cualidad = cualidad
//     }

//     reconocimientoFacial(){
//         if (this.encendido == true) {
//             alert("Detectando rostro.")
//         }
//     }

//     correMonsterHunterWorld(){
//         if ( this.encendido == true) {
//             alert(`*MHW ost playing on your ${this.modelo}.*`)
//         }
//     }
// }

// const Samsung = new Celulares ("Samsung A7", "Marrón", "0.25", "1080px", "2mpx", "420px", "2gb")

// const Motorola = new Celulares ("Motorola Razer", "Negro", "0.45", "2080px", "4mpx", "1080px", "8gb")

// const Huawei =new Celulares ( "RedmiNote9", "Rosita", "0.35", "1080px", "2mpx", "840px", "4gb")

// console.log(Samsung)
// console.log(Motorola)
// console.log(Huawei)

// const MegaMoto = new CelularMejor ("Mega Motorola G19", "Cian", "0.25", "4080px", "4800mpx", "4020px", "16gb", "Blindado")

// const MegaHuawei = new CelularMejor ("Huawei RDN69", "Negro", "0.75", "4080px", "4080mpx", "4080px", "32gb", "Súper Rapido")

// console.log(MegaMoto)
// console.log(MegaHuawei)

// var celular = ""

// while ( continuar = true ) {
//     this.eleccionCelular();

//     continuar = prompt("¿Desea probar con otro celular?")
//     if (continuar.toLowerCase()== "si" ){
//         continuar = true
//     } else {
//         continuar = false
//         break;
//     }
// }

// function eleccionCelular(){
//     let eleccionCiclo = true
//     while (eleccionCiclo = true) {
//         eleccion = prompt("Elija Dispositivo: Motorola, Samsung, o Huawei. O prueba nuestra alta gama de: MegaMoto y MegaHuawei")
//         if (eleccion.toLowerCase().includes("motorola")){
//             celular = Motorola;
//             eleccionCiclo = false;
//             this.accionCelular();
//             break;
//         }
//         else if (eleccion.toLowerCase().includes("samsung")){
//             celular = Samsung;
//             eleccionCiclo = false;
//             this.accionCelular();
//             break;
//         }
//         else if (eleccion.toLowerCase()== "huawei"){
//             celular = Huawei;
//             eleccionCiclo = false
//             this.accionCelular();
//             break;

//         } else if (eleccion.toLowerCase().includes("megamoto")){
//             celular = MegaMoto;
//             eleccionCiclo = false;
//             this.accionCelularMega();
//             break;
//         } else if (eleccion.toLowerCase().includes("megahuawei")){
//             celular = MegaHuawei;
//             eleccionCiclo = false;
//             this.accionCelularMega();
//             break;

//         }else alert("Introduzca un nombre valido.")
//     }

// }

// function accionCelular(){
//         prender = prompt(`¿Querés encender  el dispositivo ${celular.modelo}?`)
//         if ( prender.toLowerCase().includes("si")){
//             celular.prenderCelular();
//             while (celular.encendido = true) {
//                 realizarAccion => (accion);{
//                     accion = prompt("¿Qué desea realizar? Tomar fotos, Reiniciar, Info, o Apagar")
//                     if (accion.toLowerCase() == "tomar fotos") {
//                         celular.fotoGrabacion();
//                     }
//                     if (accion.toLowerCase() == "reiniciar") {
//                         celular.reiniciarCelular();
//                     }
//                     if (accion.toLowerCase()== "info"){
//                         document.write(celular.mostrarInfo())
//                     }
//                     if (accion.toLowerCase() == "apagar") {
//                         celular.apagarCelular();
//                         break;
//                     }
//                 }
//             }
//         }else {alert("No se ha podido encender. Vuelva a intentar.")
//     this.accionCelular()}

//     }

// function accionCelularMega(){
//     prender = prompt(`¿Querés encender  el dispositivo ${celular.modelo}?`)
//     if ( prender.toLowerCase().includes("si")){
//         celular.prenderCelular();
//         while (celular.encendido = true) {
//             realizarAccion => (accion);{
//                  accion = prompt("¿Qué desea realizar? Tomar fotos, Reiniciar, Reconocimiento Facial, Jugar Monster Hunter: World, Info, o Apagar")
//                 if (accion.toLowerCase() == "tomar fotos") {
//                     celular.fotoGrabacion();
//                 }
//                 if (accion.toLowerCase() == "reiniciar") {
//                     celular.reiniciarCelular();
//                 }
//                 if (accion.toLowerCase()== "info"){
//                     document.write(celular.mostrarInfo())
//                 }
//                 if (accion.toLowerCase().includes("reconocimiento")){
//                     celular.reconocimientoFacial();
//                 }
//                 if (accion.toLowerCase().includes("jugar")){
//                     celular.correMonsterHunterWorld();
//                 }
//                 if (accion.toLowerCase() == "apagar") {
//                     celular.apagarCelular();
//                     break;
//                 }
//             }
//         }
//     }else {alert("No se ha podido encender. Vuelva a intentar.")
// this.accionCelularMega()}

// }

/* Crear 7 app con puntuacion y peso. Se deben poder instalar, abrir, cerrar y desinstalar. */
//Primero vamos crear una clase, con 3 atributos mas las funciones básicas.


// const appJuegos = []

// class AppJuegos{
//     constructor (name, developer, puntuacion, cantidadResenias, peso, cantidadDescargas){
//         this.name = name
//         this.developer = developer
//         this.puntuacion = puntuacion
//         this.cantidadResenias = cantidadResenias
//         this.peso = peso
//         this.cantidadDescargas = cantidadDescargas
//         this.instalado = false
//         this.abierto = false
//         this.puntajePromedio = (this.puntuacion + this.cantidadDescargas + this.peso) / 3 
//         appJuegos.push(this)
//     }

    
    
//      instalarApp(){
//          alert(`Instalando ${app.name}, aguarde un momento...
//          ${app.name} se instalo correctamente.`);
//          this.instalado = true;
//      }
// //miedo al booleano
//      abrirApp(){
//          if (this.instalado == true) {
//              alert(`${appJuego.developer}
//              Presenta:
//              <b>${app.name}</b>`);
//              this.abierto = true;
//          }
//      }

//      cerrarApp(){
//          if (this.instalado == true && this.abierto == true) {
//              alert(`${app.name} se cerro correctamente.`);
//              this.abierto = false;
//          }
//      }

//      desinstalarApp(){
//          if (this.instalado == true) {
//              alert(`${app.name} se desinstalo correctamente.
//              Se liberó ${app.peso}GB de su dispositivo.`);
//              this.instalado= false;
//          }
//      }

//      mostrarInfoApp(){
//          return `
//          Desarrollador: ${this.developer} </br>
//          Puntuación: ${this.puntuacion}⋆ </br>
//          Cantidad de Reseñas: ${this.cantidadResenias} Mil </br>
//          Peso: ${this.peso} GB </br>
//          Cantidad de Descargas: ${this.cantidadDescargas} M. </br>
//          `
//      }


// }

// const appJuego0 = new AppJuegos ("Azur Lane", "Yostar Limited.", 4.5, 142, 1.5, 1.25)
// const appJuego1 = new AppJuegos ("Arknights", "Yostar Limited.", 4.6, 160, 1.6, 1.50)
// const appJuego2 = new AppJuegos ("Clash Royale", "Supercell", 4.3, 34, 0.14, 0.1)
// const appJuego3 = new AppJuegos ("Candy Crush Saga", "King", 4.6, 33, 0.08, 1)
// const appJuego4 = new AppJuegos ("Monster Hunter Stories", "Capcom CO.", 4.2, 13, 3.2, 0.2)
// const appJuego5 = new AppJuegos ("Final Fantasy BE", "Square Enix Co.", 4.3, 103, 0.1, 1.1)
// const appJuego6 = new AppJuegos ("Call of Duty: Mobile", "Activision", 4.2, 14, 2.1, 0.2)
// const appJuego7 = new AppJuegos ("Pokémon GO", "Niantic, Inc.", 4.2, 15, 0.12, 0.25) 


// for (i = 0; i < appJuegos.length; i++){
//     console.log(appJuegos[i].name + " " + appJuegos[i].puntajePromedio);
// }

// // Mostrar los mejores 2 juegos segun:
// //Crear una función para elegir el mejor juego según su peso.
// //Crear una función para elegir el mejor juego según su puntuación.
// //Crear una función para elegir el mejor juego según su cantidad de descargas.

// this.eleccionSortUsuario();


// function eleccionSortUsuario(){

//     eleccionSort = prompt(`Desea organizar los juegos según:
//     Peso, Puntuación, Cantidad de Descargas, o Promedio Total.`);

//     appJuegos.sort((a, b) =>{

//         switch(eleccionSort.toLowerCase()) {
//             case "peso" :
//                 var x = a.peso
//                 var y = b.peso

//                 break;
            
//             case "puntuacion" :
//                 var x = a.puntuacion
//                 var y = b.puntuacion
//                 break;
    
//             case "descargas" :
//                 var x = a.cantidadDescargas
//                 var y = b.cantidadDescargas

//                 break;
    
//             case "promedio" :
//                 var x = a.puntajePromedio
//                 var y = b.puntajePromedio
//                 break;
//         }

//         if (x == y) {
//             return 0;
//         }
//         if (x > y) {
//             return -1;
//         }
//         return 1;
//     });
// }

// document
// for ( i = 0; i < appJuegos.length; i++ ){
//     document.write(`<b> ${[i]} : ${appJuegos[i].name}</b></br> ${appJuegos[i].mostrarInfoApp()}</br>`)
// }


/*Crear una funcion que nos devuelva el profesor asignado a la clase, y el nombre de los alumnos.
, también una función que nos indique en cuantas clases esta cofla, dando:
El nombre de la clase, y el nombre de sus profesores.*/

const materias = [];

class Materia {
    constructor (nombre, alumnos, profesor) {
        this.nombre = nombre;
        this.alumnos = alumnos;
        this.profesor = profesor;
        materias.push(this)
    }
}

const biologia = new Materia ("Biología",
["Marcos", "Cristian", "Claudio", "Laura", "Raquel", "Cristina", "Horacio", "Rodriguez",
"Larreta", "Mauricio", "Maria", "Eugenia", "Vidal", "Cofla", "Fabian", "Nicolas", "Chycho", "Emiliano",
"Lionel", "Agüero", "Ricardo", "Nacho", "Narela"],
 "Profera Linfosis")
const ciudadania = new Materia ("Ciudadania",
["Marcos", "Cristian", "Claudio", "Laura", "Raquel", "Cristina", "Horacio", "Rodriguez",
"Larreta", "Mauricio", "Maria", "Eugenia", "Vidal", "Fabian", "Nicolas", "Chycho", "Emiliano",
"Lionel", "Agüero", "Ricardo", "Nacho", "Narela"],
"Profesor Duarte")
const matematicas = new Materia ("Matemáticas",
["Marcos", "Cristian", "Claudio", "Laura", "Raquel", "Cristina", "Horacio", "Rodriguez",
"Larreta", "Mauricio", "Maria", "Eugenia", "Vidal"],
"Profesora García")
const literatura = new Materia ("Literatura",
["Marcos", "Cristian", "Claudio", "Laura", "Raquel", "Cristina", "Horacio", "Rodriguez",
"Larreta", "Mauricio", "Maria", "Eugenia", "Vidal", "Cofla"],
"Profesora Yaguedú")
const edfisica = new Materia ("Educación Física",
["Marcos", "Cristian", "Claudio", "Laura", "Raquel", "Cristina", "Horacio", "Rodriguez",
"Larreta", "Mauricio", "Maria", "Eugenia", "Vidal", "Cofla", "Fabian", "Nicolas", "Chycho", "Emiliano",
"Lionel", "Agüero", "Ricardo", "Nacho", "Narela"],
"Profesor Walter")
const historia = new Materia ("Historia",
["Marcos", "Cristian", "Claudio", "Laura", "Raquel", "Cristina", "Horacio", "Rodriguez",
"Larreta", "Mauricio", "Maria", "Eugenia", "Vidal", "Fabian", "Nicolas", "Chycho", "Emiliano",
"Lionel", "Agüero", "Ricardo", "Nacho", "Narela"],
"Profesor Etcheverría")
const expresionesAudiovisuales = new Materia ("Expresioes AudioVisuales",
["Marcos", "Cristian", "Claudio", "Laura", "Raquel", "Cristina", "Horacio", "Rodriguez",
"Larreta", "Mauricio", "Maria", "Eugenia", "Vidal", "Cofla"],
"Profesora Dorado") 

this.buscarAlumno();

this.inscribirMateria();

function buscarAlumno(nombreAlumno) {
    nombreAlumno = prompt("Ingrese el nombre del Alumno para mostrar materias inscriptas y docentes")
    for (let i = 0; i < materias.length; i++) {
        if (materias[i].alumnos.map( p => { 
            return p.toLowerCase()}).includes(nombreAlumno.toLowerCase())) {
            document.write(`Materia: <b>${materias[i].nombre}</b> <br> Docente <b>${materias[i].profesor}</b> <br><br>`)
        }   
    }
}

function inscribirMateria(materia) {
    materia = prompt(`Seleccione una materia para continuar con la inscripción:
    Biología, Matemáticas, Literatura, Educación Física,
    Historia, Expresiones Audiovisuales, Ciudadania`)
    switch (materia.toLowerCase()) {
        case "biología":
            materia = biologia;
            break;
        case "matemáticas":
            materia = matematicas;
            break;
        case "literatura":
            materia = literatura;
            break;
        case "educación":
        case "física":
        case "educación física":
            materia = edfisica;
            break;
        case "historia":
            materia = historia;
            break;
        case "expresiones":
        case "audiovisuales":
        case "expresiones audiovisuales":
            materia = expresionesAudiovisuales;
            break;
        case "ciudadania":
            materia = ciudadania
            break;
    }
    
    console.log(materia)

    if (materia.alumnos.length < 20) {

        nuevoAlumno = prompt("Ingrese su nombre para inscribirse.")
        materia.alumnos.push(nuevoAlumno);
        alert(`Usted se inscribió correctamente a ${materia.nombre}
        con ${materia.profesor}`);
        return;
    } else if (materia == "") {
        alert("Introduzca un nombre valido.")
        this.inscribirMateria();
    } else alert(`Esta cátedra ya dispone de ${materia.alumnos.length} alumnos. Elija otra materia.`)


    this.inscribirMateria();
}


/*Listado de materias y preguntar en cual se quiere inscrir.
Si hay mas de 20 alumnos, negar la inscripción, si hay menos de 20
inscribirlo y añadirlo a la lista. */