// Tenemos un li de productos
//5/5
//Lo explico bien, tuvo algunos problemas pero los resolvio bien

const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/img/taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/assets/img/taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/img/bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/img/bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/img/zapato-rojo.jpg"}
  ]
  
  const listaProduc = document.getElementById("lista-de-productos"); //li=listaproducto 
  const listaInput = document.querySelector('.input');//Le reasgine otros nombres a la const $i = lista Input
  
  for (let i = 0; i < productos.length; i++) {
    var divCreado = document.createElement("div");//d= divCreado
    divCreado.classList.add("producto");
  
    let pCreado = document.createElement("p");//ti = pCreado
    pCreado.classList.add("titulo");
    pCreado.textContent = productos[i].nombre
  
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    divCreado.appendChild(pCreado);
    divCreado.appendChild(imagen);
  
    listaProduc.appendChild(divCreado);
  }
  
  //displayProductos(productos); Se comento este bloque, ya que al parecer no hacia nada
  const botonDeFiltro = document.querySelector("button");
  
  botonDeFiltro.onclick = function() {
    while (listaProduc.firstChild) {
      listaProduc.removeChild(listaProduc.firstChild);
    }
  
    const texto = listaInput.value;
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto );
  
    for (let i = 0; i < productosFiltrados.length; i++) {
      var divCreado = document.createElement("div");
      divCreado.classList.add("producto");
  
      let pCreado = document.createElement("p");
      pCreado.classList.add("titulo");
      pCreado.textContent = productosFiltrados[i].nombre
  
      let imagen = document.createElement("img");
      imagen.setAttribute('src', productosFiltrados[i].img);
  
      divCreado.appendChild(pCreado);
      divCreado.appendChild(imagen);
  
      listaProduc.appendChild(divCreado);
    }
  }
  
  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  } 