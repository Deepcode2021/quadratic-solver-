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
