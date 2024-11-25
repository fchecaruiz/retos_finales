function distanceToOrigin(x, y) {
    var distancia = 0;
    distancia = Math.sqrt((x * x) + (y * y));
    return distancia;
}
console.log(distanceToOrigin(25, 105));
