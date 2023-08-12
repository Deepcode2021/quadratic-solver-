function updateDiv() {
    // Get the value from the input element
    // const inputValue = document.getElementById('textInput').value;
    // const inputValue1 = document.getElementById('textInput').value;
    // const inputValue3 = document.getElementById('textInput').value;
    // Update the content of the div with the input value
    x2 = document.getElementById('input').value
    x = document.getElementById('input2').value
    cons = document.getElementById('input3').value

    document.getElementById('outputx2').textContent = x2
    document.getElementById('outputx').textContent = x
    document.getElementById('const').textContent = cons
  }
  
  function solveQuadraticEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        return [];
    }
}

  function solve() {
    const input = parseFloat(document.getElementById('input').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input3 = parseFloat(document.getElementById('input3').value);
    
    const roots = solveQuadraticEquation(input ,input2 ,input3 );

    const resultElement1 = document.getElementById('factor1');
    const resultElement2 = document.getElementById('factor2');
    if (roots.length === 0) {
        resultElement1.textContent = "No real roots.";
        resultElement2.textContent = "No real roots.";
    } else if (roots.length === 1) {
        resultElement1.textContent = `One root: ${roots[0]}`;
        resultElement2.textContent = `One root: ${roots[0]}`;
    } else {
        resultElement1.textContent = `Root: ${roots[0]}`;
        resultElement2.textContent = `Root: ${roots[1]}`;
    }
}