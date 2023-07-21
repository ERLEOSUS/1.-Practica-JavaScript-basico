//VARIABLES
const periodo = 2021;

var nombre = "Erick";
var apellido = "Suarez";
var cedula = "2200109052";
var declarado = true;
var gustos = ['leer', 'nadar', 'escribir'];
var persona = {
    "nombre": "Juan",
    "edad": 24,
    "ciudad": "Quito"
};
//IMPRIMIR DATOS
function saludo(persona) {
    document.write("<h2>Hola " + persona + "</h2>")
}
function calcular() {
    //VARIABLES CALCULO DE IMPUESTOS
    var ingresos = document.getElementById("txtIngresos").value;
    var datosCompletos = nombre + apellido;
    var gastos = document.getElementById("txtGastos").value;
    var baseImponible = ingresos - gastos;
    var excedente = 0;
    var impuestoFraccionBasica = 0;
    var porcentajeExcedente = 0;
    var fraccionBasica = [0, 11212, 14285, 17854, 21442, 4284, 64297, 85729, 11288];
    var excesoHasta = [11212, 14285, 17854, 21442, 4284, 64297, 85729, Infinity];
    var impuestoFraccionBasica = [0, 0, 154, 511, 941, 4156, 8440, 13798, 22366];
    var porcentajeExcedente = [0.0, 0.05, 0.10, 0.12, 0.15, 0.20, 0.25, 0.30, 0.35];
    var impuesto = 0;
    //CALCULO DE IMPUESTOS
    for (var i = 0; i < fraccionBasica.length; i++) {
        if (baseImponible > fraccionBasica[i] && baseImponible <= excesoHasta[i]) {
            excedente = baseImponible - fraccionBasica[i];
            porcentajeExcedente2 = excedente * porcentajeExcedente[i];
            impuesto = impuestoFraccionBasica[i] + porcentajeExcedente2;
            break;
        }
    }
    console.log('Usted debe cancelar por Impuesto a la Renta ' + impuesto)
    saludo("Erick");
    document.write("<h3>Su impuesto a la renta es </h3>" + impuesto)

    console.log(ingresos)
    console.log(impuestoFraccionBasica)
    console.log(datosCompletos)
    console.log(persona)
    console.log(baseImponible)
}
