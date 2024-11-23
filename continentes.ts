import "colors";


 
// let country1:string[] = ["china", "japon", "india","corea","tailandia"];
// let country2:string[] = ["españa","francia","alemania","belgica", "suiza"];
// let country3:string[] = ["usa","canada","mexico","panama","colombia"];
let continente1:string = "asia";
let continente2:string = "europa";
let continente3:string = "america";



function continent(country:string) {


    if (country == "china" || country == "japon" || country == "india" || country == "corea" || country == "tailandia") {
        console.log(`${country} está en el continente de ${continente1}`.green);
    } else if (country == "españa" || country == "francia" || country == "alemania" || country == "belgica" || country == "suiza") {
        console.log(`${country} está en el continente de ${continente2}`.blue);
    } else if (country == "usa" || country == "canada" || country == "mejico" || country == "panama" || country == "colombia") {
        console.log(`${country} está en el continente de ${continente3}`.yellow);
    } else {
        console.log(`El país ${country} no se encuentra en las listas definidas.`.red);
    }
}
continent("japon");  
continent("españa");
continent("mexico");  
continent("australia"); 

    
