//mi array de objetos
const productos =
    [
        {
            id: 1, nombre: "difusor", precio: 1600, img: "../images/difusor.JPG",
        },
        {
            id: 2, nombre: "vela aromatica", precio: 1200, img: "../images/perfuminas.WEBP",
        },
        {
            id: 3, nombre: "corazon de yeso", precio: 1200, img: "../images/vela.JPG",
        },
        {
            id: 4, nombre: "velas de noche", precio: 800, img: "../images/velaabajo.WEBP",
        },
        {
            id: 5, nombre: "bombones", precio: 1000, img: "../images/bombones.JPG",
        },
        {
            id: 6, nombre: "vaso chico", precio: 800, img: "../images/vaso.JPG",
        },
    ];

//Funcion constructora para crear objetos
function Producto(nombre, precio, img) {
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    if (img) {
        this.img = img;
    } else {
        this.img = "https://placehold.co/400";
    }
}
//Agrego un objeto nuevo a mi array de objetos con el push
const nuevoProducto = new Producto("vaso grande", 1200, "../images/vasoGrande.png");
productos.push(nuevoProducto);

//funcion para filtrar por nombre
function buscarPorNombre(array, filtro) {
    if (filtro == "") {
        return 0;
    } else {
        return array.find(el => {
            return el.nombre.includes(filtro);
        }
        )
    };
}

//condicional para verificar que el usuario busco algo
let buscar = prompt("Que producto desea buscar:");
if (buscar == "") {
    alert("No busco nada, estos son todos nuestros productos");
    productos.forEach((el) => console.log(el));
} else {
    const encontrado = buscarPorNombre(productos, buscar);
    console.log(encontrado);
}

//funcion para filtrar por precio
function filtrarPrecio(array, filtro) {
    return array.filter(el => {
        return el.precio <= filtro;
    })
}
porPrecio = parseFloat(prompt("Filtrar por precio"));
const masBaratos = filtrarPrecio(productos, porPrecio);
console.log(masBaratos);

//funcion para agregar al carrito
const carrito = [];
function agregarCarrito(array, productoAgregar) {
    array.push(productoAgregar);
    return array;
}
let deseado = prompt("Que producto desea agregar al carrito");
let productoDeseado = buscarPorNombre(productos, deseado)
agregarCarrito(carrito, productoDeseado);

//funcion para sumar el carrito
function comprarProducto(products, envio) {
    return products.reduce((acc, el) => {
        return acc = acc + el.precio
    },envio);
}
const compra = comprarProducto(carrito, 1500);
console.log(compra);

