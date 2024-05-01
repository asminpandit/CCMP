// script.js

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function pi() {
    document.getElementById('display').value += Math.PI;
}

function squared() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.sqrt(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function cos() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.cos(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function cosh() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.cosh(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function tan() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.tan(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function tanh() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.tanh(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function sin() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.sin(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function sinh() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.sinh(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function log() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value) && value > 0) {
        document.getElementById('display').value = Math.log(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function exp() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.exp(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function acosh() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value) && value >= 1) {
        document.getElementById('display').value = Math.acosh(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function asinh() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.asinh(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function expm1() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.expm1(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function lgamma() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value) && value > 0) {
        document.getElementById('display').value = Math.lgamma(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function degrees() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = value * (180 / Math.PI);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function log2() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value) && value > 0) {
        document.getElementById('display').value = Math.log2(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function log10() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value) && value > 0) {
        document.getElementById('display').value = Math.log10(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function log1p() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.log1p(value);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    document.getElementById('display').value = '';
}

function matrixMultiplication() {
    const aEntries = document.querySelectorAll('.matrix-a input');
    const bEntries = document.querySelectorAll('.matrix-b input');
    
    // Get values from input boxes and construct matrices
    const a = [];
    const b = [];
    
    for (let i = 0; i < 3; i++) {
        const rowA = [];
        const rowB = [];
        
        for (let j = 0; j < 3; j++) {
            rowA.push(parseFloat(aEntries[i * 3 + j].value));
            rowB.push(parseFloat(bEntries[i * 3 + j].value));
        }
        
        a.push(rowA);
        b.push(rowB);
    }
    
    // Perform matrix multiplication
    const result = matrixMultiply(a, b);
    
    // Display the result
    const resultElement = document.getElementById('display');
    resultElement.value = JSON.stringify(result);
}
// script.js

function openMatrixModal() {
    document.getElementById('matrixModal').style.display = 'block';
}

function closeMatrixModal() {
    document.getElementById('matrixModal').style.display = 'none';
}

// script.js

function openMatrixModal() {
    document.getElementById('matrixModal').style.display = 'block';
}

function closeMatrixModal() {
    document.getElementById('matrixModal').style.display = 'none';
}

function performMatrixMultiplication() {
    // Get the input values of the 3x3 matrices
    let matrixA = [];
    let matrixB = [];
    for (let i = 1; i <= 3; i++) {
        let rowA = [];
        let rowB = [];
        for (let j = 1; j <= 3; j++) {
            let valA = parseFloat(document.getElementById(`matrixA-${i}-${j}`).value);
            let valB = parseFloat(document.getElementById(`matrixB-${i}-${j}`).value);
            rowA.push(valA);
            rowB.push(valB);
        }
        matrixA.push(rowA);
        matrixB.push(rowB);
    }

    // Perform matrix multiplication
    let resultMatrix = multiplyMatrices(matrixA, matrixB);

    // Display the result
    displayMatrixResult(resultMatrix);
}

function multiplyMatrices(matrixA, matrixB) {
    let resultMatrix = [];
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            let sum = 0;
            for (let k = 0; k < 3; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        resultMatrix.push(row);
    }
    return resultMatrix;
}

function displayMatrixResult(matrix) {
    let result = "Result:\n";
    for (let i = 0; i < 3; i++) {
        result += matrix[i].join("\t") + "\n";
    }
    alert(result);
}