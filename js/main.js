const tienda = document.querySelector(".tienda");
const btnCart = document.querySelector(".container-cart-icon");
const containerCartProduct = document.querySelector(".container-cart-products");
const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");
const valortotal = document.querySelector(".total-pagar");
const countProduct = document.querySelector("#contador-productos");

let carrito = [];
//mostrar el carrito
btnCart.addEventListener("click", () => {
    containerCartProduct.classList.toggle("hidden-cart");
})
//---------------------------------------------------------------
tienda.addEventListener("click", e => {
    if (e.target.classList.contains("btn-add-cart")) {
        const producte = (e.target.parentElement);
        const infoProduct =
        {
            quantity: 1,
            title: producte.querySelector("h2").textContent,
            price: producte.querySelector("p").textContent
        }
        const exits = carrito.some(producte => producte.title === infoProduct.title);
        if (exits) {
            const productes = carrito.map(producte => {
                if (producte.title === infoProduct.title) {
                    producte.quantity++;
                    return producte
                } else {
                    return producte;
                }
            })
            carrito = [...productes];
        } else {
            carrito = [...carrito, infoProduct];
        }

        showHtml();
    };
});

rowProduct.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close")) {
        const producte = e.target.parentElement;
        const title = producte.querySelector("p").textContent;

        carrito = carrito.filter(producte => producte.title !== title);
        showHtml();
    }
})
//Funcion para mostrar html
const showHtml = () => {
    //limpiar html 
    rowProduct.innerHTML = "";
    let total = 0;
    let totalOfProduct = 0;
    carrito.forEach(producte => {
        const containerProduct = document.createElement("div");
        containerProduct.classList.add("cart-product");
        containerProduct.innerHTML = `
            <div class="info-cart-product">
                          <span class="cantidad-producto-carrito">${producte.quantity}</span>
                          <p class="titulo-producto-carrito">${producte.title}</p>
                          <span class="precio-producto-carrito">${producte.price}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="icon-close">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
        
                        `
        rowProduct.append(containerProduct);
        total = total + parseInt(producte.quantity * producte.price.slice(1));
        totalOfProduct = totalOfProduct + producte.quantity;

    });

    valortotal.innerHTML = `$${total}`;
    countProduct.innerHTML = totalOfProduct;
}


//-----------------------------------------------------------------------------


// //Funcion constructora para crear objetos
// function Producto(nombre, precio, img) {
//     this.id = productos.length + 1;
//     this.nombre = nombre;
//     this.precio = parseFloat(precio);
//     if (img) {
//         this.img = img;
//     } else {
//         this.img = "https://placehold.co/400";
//     }
// }
// //Agrego un objeto nuevo a mi array de objetos con el push
// const nuevoProducto = new Producto("vaso grande", 1200, "../images/vasoGrande.png");
// productos.push(nuevoProducto);


// //funcion para filtrar por precio
// function filtrarPrecio(array, filtro) {
//     return array.filter(el => {
//         return el.precio <= filtro;
//     })
// }
// porPrecio = parseFloat(prompt("Filtrar por precio"));
// const masBaratos = filtrarPrecio(productos, porPrecio);
// console.log(masBaratos);
