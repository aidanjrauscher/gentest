function modulo(a, b) { 
    if (b === 0) {
        return 0;
    }
    return a % b;
}

function multiply(a, b) { 
    return a * b;
}

module.exports = { 
    modulo,
    multiply
}
