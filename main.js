const calculatorScreen = document.getElementById('calculator-screen');

const calculatorButtons = document.getElementsByTagName("button");

for (var thisBtn of calculatorButtons) {
    thisBtn.addEventListener('click', function() {
        if (this.innerHTML == "=")
            calculatorScreen.value = eval(calculatorScreen.value);

        else if (this.innerHTML == "AC")
            calculatorScreen.value = "";
        else
            calculatorScreen.value += this.innerHTML;
    });

}





 /*    switch(operator) {    
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    }; */







