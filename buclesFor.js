// function evenNumbers(num:number) {
//     for (let index = 0; index < num ; index++) {
//         if (index % 2 !== 0){
//             console.log(index)
//         }
//     }
// }
// evenNumbers(100)
////////////////////////////////////////////////////////////////////////////////
// let array: string[] = ["pedro", "juan", "dario", "felipe"];
// function myRevert(myArr: string[]): string[] {
//     let array_inverso: string[] = [];
//     // se recorre el array al revés
//     for (let index = myArr.length - 1; index >= 0; index--) {
//         array_inverso.push(myArr[index]);
//     }
//     console.log(array_inverso);
//     return array_inverso;
// }
// myRevert(array);
////////////////////////////////////////////////////////////////////////////
// let colores :string[] = ["rojo","negro","blanco", "naranja", "amarillo", "verde", "azul", "añil", "violeta", "morado"];
// function isRainbow(colors: string[]): void {
// for (let index = 0; index < colors.length; index++) {
//     if( colors[index] == "rojo" ||  colors[index] == "naranja" ||  colors[index] == "amarillo"  ||  colors[index] =="verde" 
//        || colors[index] == "azul" ||  colors[index] == "añil" ||  colors[index] == "violeta")
//     {
//         console.log(`${colors[index]} => Este color es del arco iris`)
//     }
//     else{
//         console.log(`${colors[index]} => se encuentra fuera de rango de colores del arco iris`)
//     }
//     }
// }
// isRainbow(colores)
///////////////////////////////////////////////////////////////////////////////////////////////
var textos = ["hola", "juan", "typescript", "jaleo"];
function add1(myWords) {
    var num_palabras = 0;
    for (var i = 0; i < myWords.length; i++) {
        num_palabras += myWords[i].length;
    }
    return num_palabras;
}
console.log(add1(textos));
