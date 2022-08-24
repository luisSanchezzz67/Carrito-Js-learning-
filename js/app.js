//variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listarCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listarCursos.addEventListener('click', agregarCurso);
}

//funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;

        LeerDatosCurso(cursoSeleccionado);
    }
    
}

//Lee el contenido del HTML al que le damos click y extrae la información del curso

function LeerDatosCurso(curso) {
    //console.log(curso);

    //Crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito); 

    carritoHTML();
}

//Muestra el carrito de compras en el HTML 
function carritoHTML() {
    //limpiar el html
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            <td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

//Eliminar los cursos del tbody

function limpiarHTML() {
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}