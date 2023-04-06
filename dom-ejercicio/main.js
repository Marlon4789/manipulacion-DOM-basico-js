// Utiliczando los metodos (document...)

// querySelector => para acceder a un eemento por medio de la etiqueta 'h1'.
const h1 = document.querySelector('h1')

// Seleciona todas las etiquetas sin importar si tiene id, clases...
const p = document.querySelectorAll('p')

// para acceder al elemento por medio de una clase.
const classParrafo = document.getElementsByClassName('class-parrafo')

// Para acceder al elemento por medio del id.
const idParrafo = document.getElementById('id-parrafo')

// acceder al elemto por etiqueta.
const input = document.querySelector('input')



// lo imprimimos como un ebjeto para ver sus propiedades etc.
console.log(h1);

console.log(input.value)

console.log({
    h1,
    p,
    classParrafo,
    idParrafo,
    input,
});

// innerHTML => Cambia todo el html a otro html, pero este es peligroso hacerlo ya que pueden meter codigo malicioso.

h1.innerHTML = 'Cambiando h1 con <br> innerHTML';

// innerText => cambia unicamente el texto y es más seguro.

h1.innerText = 'Cambiando h1 con innerText';

/************************************************************************************* */

// Para modificar atributos

// get => para leer los elementos, atributos.
console.log(h1.getAttribute('pantalla'));

// set => para modificar los atributos.
h1.setAttribute('pantalla', 'color')


// Para añadir clases.
h1.classList.add('amarillo', 'rojo');

// Para eliminar clases.
h1.classList.remove('amarillo');

// reemplazar una clase por otra
h1.classList.replace('rojo', 'violeta');

// para probar
//h1.classList.toggle('violeta');
//h1.classList.contains('violeta'); // booleano.

/***************************************************************************** */

// cambiar un value.

input.value = 'nuevo hola';
input.placeholder = 'no quiero texto';

/*********************************************************************************************************** */

// Para crear un elemento.
// Este elemento que se crea tiene que estar dentro de una etiqueta html.

const img = document.createElement('img');
img.setAttribute('src', 'http://cursosonline-edu.com/wp-content/uploads/2022/12/1.jpg')

console.log(img);

// Para meter la imagen en una etiqueta de html.

//idParrafo.innerHTML = ""; // para eliminar el parrafo

//idParrafo.append(img); // para añadir la imagen.

// para reemplazar todo lo que haya en la etiqueta html.
idParrafo.replaceWith(img)

