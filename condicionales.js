function zodiac(dia, mes) {
    var signo = "";
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
        signo = ("Aries");
    }
    else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 21)) {
        signo = ("Tauro");
    }
    else if ((mes == 5 && dia >= 22) || (mes == 6 && dia <= 21)) {
        signo = ("Geminis");
    }
    else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 23)) {
        signo = ("Cancer");
    }
    else if ((mes == 7 && dia >= 24) || (mes == 8 && dia <= 23)) {
        signo = ("Leo");
    }
    else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
        signo = ("Virgo");
    }
    else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
        signo = ("Libra");
    }
    else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
        signo = ("Escorpio");
    }
    else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
        signo = ("Sagitario");
    }
    else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
        signo = ("Capricornio");
    }
    else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
        signo = ("Acuario");
    }
    else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
        signo = ("Piscis");
    }
    else {
        if (mes >= 13 || dia > 31)
            console.log("Dia y mes fuera de rango. DATOS NO VALIDOS!!!!");
    }
    console.log(signo);
    return signo;
}
console.log(zodiac(25, 8));
