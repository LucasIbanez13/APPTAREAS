//Aqui colocamos destructuring para llamar funciones de fs para leer y escribir json
const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

//__dirname nos indica la carpeta donde estamos parado
module.exports = {
    leerJson : () => JSON.parse(readFileSync(path.join(__dirname,'tareas.json'),'utf-8')),
    escribirJSON : (tareas) => writeFileSync(path.join(__dirname,'tareas.json'),JSON.stringify(tareas,null,3),'utf-8')
} 


