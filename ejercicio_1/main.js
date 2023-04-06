// como escuchar eventos desde html con JS.

// onclick => Para escuchar un evento, para 'button'
// onchange => para escuchar un evento, para 'input'

/********************* */

// Calculadora*********************
const h1 = document.querySelector('h1');

// Inputs del programa
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

// Form
const form = document.querySelector('#form');

// Botones de calcular resultado
const btnSuma = document.querySelector('#btnCalcularSuma');
const btnResta = document.querySelector('#btnCalcularResta');
const btnMultiplicar = document.querySelector('#btnCalcularMultiplicar');
const btnDivision = document.querySelector('#btnCalcularDivision');

//Etiquetas HTML p
const pResultSuma = document.querySelector('#resultSuma');
const pResultResta = document.querySelector('#resultResta');
const pResultMultiplicar = document.querySelector('#resultMultiplicar');
const pResultDivision = document.querySelector('#resultDivision');

// Botones para calcular resultados con formulario.
// form.addEventListener('submit', btnOnclickSuma);
// form.addEventListener('submit', btnOnclickResta);
// form.addEventListener('submit', btnOnclickMultiplicar);
// form.addEventListener('submit', btnOnclickDivision);



//Botones para calcular resultados.
btnSuma.addEventListener('click', btnOnclickSuma);
btnResta.addEventListener('click', btnOnclickResta);
btnMultiplicar.addEventListener('click', btnOnclickMultiplicar);
btnDivision.addEventListener('click', btnOnclickDivision);

// suma **************************
function btnOnclickSuma(event) {
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResultSuma.innerText = 'resultado: ' + sumaInputs
}

// Resta ************************
function btnOnclickResta(event) {
    event.preventDefault();
    const restaInputs = Number(input1.value) - Number(input2.value);
    pResultResta.innerText = 'resultado de la resta: ' + restaInputs
 }

 // Multiplicar ************************
function btnOnclickMultiplicar(event) {
    event.preventDefault();
    const multiplicarInputs = Number(input1.value) * Number(input2.value);
    pResultMultiplicar.innerText = 'resultado de la multiplicar: ' + multiplicarInputs
 }
 
  // Division ************************
function btnOnclickDivision(event) {
    event.preventDefault();
    const divisionInputs = Number(input1.value) / Number(input2.value);
    pResultDivision.innerText = 'resultado de la división: ' + divisionInputs
 }
 