const fatorial = (p) => {
let resultado = p;
  for (i = 1; i < p; i++){
    resultado = resultado * i;

}
return resultado;
}
console.log(fatorial(3));