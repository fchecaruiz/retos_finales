"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
var country1 = ["china", "japon", "india", "corea", "tailandia"];
var country2 = ["españa", "francia", "alemania", "belgica", "suiza"];
var country3 = ["usa", "canada", "mexico", "panama", "colombia"];
var continente1 = "asia";
var continente2 = "europa";
var continente3 = "america";
function continent(country) {
    if (country == "china" || country == "japon" || country == "india" || country == "corea" || country == "tailandia") {
        console.log("".concat(country, " est\u00E1 en el continente de ").concat(continente1).green);
    }
    else if (country == "españa" || country == "francia" || country == "alemania" || country == "belgica" || country == "suiza") {
        console.log("".concat(country, " est\u00E1 en el continente de ").concat(continente2).blue);
    }
    else if (country == "usa" || country == "canada" || country == "mejico" || country == "panama" || country == "colombia") {
        console.log("".concat(country, " est\u00E1 en el continente de ").concat(continente3).yellow);
    }
    else {
        console.log("El pa\u00EDs ".concat(country, " no se encuentra en las listas definidas."));
    }
}
continent("japon");
continent("españa");
continent("mexico");
continent("australia");
