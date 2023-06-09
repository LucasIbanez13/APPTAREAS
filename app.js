const {argv} = require('process');
const moduloTareas = require('./tareas');
let respuesta;

switch (argv[2]) {
    case "listar":
        moduloTareas.listar()
        break;
    case "agregar":
        if([argv[3], argv[4]].includes(undefined)){
            console.log('Error: el numero y el titulo de la clase son obligatorios');
            break
        }
        if(isNaN(argv[3]) || argv[3]<1){
            console.log('Error: el numero de la clase no es valido');
            break
        }
        respuesta = moduloTareas.agregar(+argv[3],argv[4])
        console.log(respuesta);
        break;
    case "filtrar":
        const estados = ['pendiente','en proceso','terminado']
        if(!argv[3]){
            console.log('Error: Debes indicar el estado que deseas filtrar')
            break;
        }
        if(!estados.includes(argv[3].toLowerCase())){
            console.log('Error: El estado debe ser uno de los siguientes pendinte | en proceso | terminado');
            break;
        }
        moduloTareas.filtrar(argv[3].toLowerCase())
        break; 
    case "editar":
        if([argv[3], argv[4]].includes(undefined)){
            console.log('Error: el numero y el estado son obligatorios');
            break
        }
        if(isNaN(argv[3]) || argv[3]<1){
            console.log('Error: el numero de la clase no es valido');
            break
        }
        respuesta = moduloTareas.editar(+argv[3],argv[4])
        console.log(respuesta)
        break;
    default:
        break;
}   