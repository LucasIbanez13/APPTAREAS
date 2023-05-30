const pais = {
    nombre : "Argentina",
    capital : "Buenos Aires",
    moneda : 'peso',
    idioma : "español",
    habitantes : 4800000,
    provincias : [
        "Catamarca",
        "Formosa",
        "Santiago del Estero",
        "Tucuman"
    ]
}
let habitantes = pais.habitantes

let {nombre,capital,moneda,provincias,idioma,paisesLimitrofes} = pais;
//Para aplicar el destructuring, tenemos que seguir el orden de los elementos dentro del array, en este caso si ejecutamos sin una coma nos va a indicar catamarca
let [,Formosa, Tucuman] = provincias

console.log(Formosa)