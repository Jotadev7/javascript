function somar (n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3;
        }
    }
}

const somarAB = somar(6)(4);
console.log(somarAB(10));

const resultado = somar(3)(4)(5);
console.log(resultado);

// 2°

function calcular(x) {
    return function(y) {
        return function(fn){
            return fn(x,y);
        }
    }
}

function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const r1 = calcular(10)(5)(soma);
console.log(r1);

const r2 = calcular(10)(5)(subtrai);
console.log(r2);

const r3 = calcular(10)(5)(multiplica);
console.log(r3);

const r4 = calcular(10)(5)(divide);
console.log(r4);