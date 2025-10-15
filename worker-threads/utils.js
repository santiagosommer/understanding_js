export function heavyComputation(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 1e6; j++) {
            resultado += Math.sqrt(j + i);
        }
    }
    return resultado;
}