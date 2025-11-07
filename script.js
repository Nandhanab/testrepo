function calculate(operation) {
  let num1 = document.getElementById("num1").value.trim();
  let num2 = document.getElementById("num2").value.trim();
  let resultField = document.getElementById("result");

  if (num1 === "" || num2 === "") {
    resultField.textContent = "Please enter both numbers!";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    resultField.textContent = "Enter a valid Number!";
    return;
  }


  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result;

switch (operation) {
    case "add":
      result = num1 + num2;
      break;

    case "sub":
      result = num1 - num2;
      break;

    case "multiply":
      result = num1 * num2;
      break;

    case "divide":
      if (num2 === 0) {
        resultField.textContent = "Cannot divide by zero!";
        return;
      }
      result = num1 / num2;
      break;

    default:
      resultField.textContent = "Unknown operation!";
      return;
  }

  resultField.textContent = `Result: ${result}`;
}

function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "";
}