const tienda = document.querySelector(".tienda");
btnCart = document.querySelector(".container-cart-icon"),
    containerCartProduct = document.querySelector(".container-cart-products"),
    cartInfo = document.querySelector(".cart-product"),
    rowProduct = document.querySelector(".row-product"),
    valortotal = document.querySelector(".total-pagar"),
    countProduct = document.querySelector("#contador-productos");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//mostrar el carrito
btnCart.addEventListener("click", () => {
    containerCartProduct.classList.toggle("hidden-cart");
});
//agrega los productos al carrito
tienda.addEventListener("click", e => {
    //if verifica que se toque el boton
    if (e.target.classList.contains("btn-add-cart")) {
        //producte guarda el elemento completo
        const producte = (e.target.parentElement);
        //guardo los contenidos de mi elemento completo
        const infoProduct =
        {
            quantity: 1,
            title: producte.querySelector("h2").textContent,
            price: producte.querySelector("p").textContent
        }
        //funcion para que no se repitan los mismos objetos en el carrito
        const exits = carrito.some(producte => producte.title === infoProduct.title);
        if (exits) {
            const productes = carrito.map(producte => {
                //si ya esta el producto o objeto en el carrito se aumenta su cantidad y no se repite
                if (producte.title === infoProduct.title) {
                    producte.quantity++;
                    return producte
                } else {
                    return producte;
                }
            })
            //lo esparce en el carrito
            carrito = [...productes];
        } else {
            //lo esparce en el carrito con la informacion
            carrito = [...carrito, infoProduct];
        }
        //funcion para guardar el carrito en local storage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        showHtml();
    };
});
//funcion para borrar productos del carrito
rowProduct.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close")) {
        const producte = e.target.parentElement;
        const title = producte.querySelector("p").textContent;

        carrito = carrito.filter(producte => producte.title !== title);
        //funcion para guardar el carrito en local storage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        showHtml();
    }
});
//Funcion para mostrar html del carrito
const showHtml = () => {
    //limpiar carrito
    rowProduct.innerHTML = "";
    let total = 0;
    let totalOfProduct = 0;
    carrito.forEach(producte => {
        //creo y guardo un div con su clase
        const containerProduct = document.createElement("div");
        containerProduct.classList.add("cart-product");
        //crea html
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
        //agrega el div con su objeto al carrito        
        rowProduct.append(containerProduct);
        //suma de todos los precios de los productos del carrito
        total = total + parseInt(producte.quantity * producte.price.slice(1));
        //suma la cantidad de productos en el carrito
        totalOfProduct = totalOfProduct + producte.quantity;
    });
    //muestra el total de los productos del carrito
    valortotal.innerHTML = `$${total}`;
    //muestra la cantidad de productos en el carrito
    countProduct.innerHTML= totalOfProduct;
    parseInt(localStorage.setItem("totalOfProduct",totalOfProduct));
    let countLs = localStorage.getItem("totalOfProduct");
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