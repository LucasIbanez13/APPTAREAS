
 const {leerJson,escribirJSON} = require('../data')//Aqui llamamos  a la funcion de data 
const Tarea = require('./Tareas')

module.exports = {
    tareas : leerJson(),
    listar : function(tareas = this.tareas){
        tareas.forEach(({clase,titulo, estado}) => { //siempre que hgamos un destructuring como en este caso coloquemos siempre los parentecis
            console.log(`CLASE: ${clase}: ${titulo} --> ${estado}`);
        });
    },
    agregar : function(clase,titulo){
        const tareas = this.tareas;
        let tarea = new Tarea(clase,titulo)
        tareas.push(tarea)
        escribirJSON(tareas)
        return `La tarea ${tarea.titulo} de  la clase ${tarea.clase} se agrego exitosamente.`
    },
    filtrar : function(estado){
        const tareasFiltradas = this.tareas.filter(tarea => tarea.estado === estado);
        if(!tareasFiltradas.length){
            return console.log(`INFO: No hay tareas con el estado: '${estado}'`)
        }
        this.listar(tareasFiltradas)
    },
    editar : function(clase, estado){
        const tareas = this.tareas;//El find devuelve un elemente, el filter un array
        const tarea = tareas.find(tarea => tarea.clase === clase);
        if(!tarea){
           return console.log(`Error: La clase ${clase} no se encuentra`);
        }
        const tareasActualizadas = tareas.map((tarea) => {
            if(tarea.clase === clase){
                tarea.estado = estado.toLowerCase();
            }
            return tarea
        });

        escribirJSON(tareasActualizadas)
        return `El estado de la clase ${tarea.titulo} ahora es ${estado}.`
    }
}