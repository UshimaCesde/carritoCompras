// CREAR EL ARREGLO DE OBJETOS PARA EL CARRITO DE COMPRAS
let cart = [];
//Crear el arreglo de objetos de los productos
let products = [
  {
    idprod: "1",
    prodname: "Laptop",
    prodimage: "laptop.jpg",
    prodprice: "1000",
    prodstatus: true,
  },
  {
    idprod: "2",
    prodname: "Teléfono",
    prodimage: "phone.jpg",
    prodprice: "500",
    prodstatus: true,
  },
  {
    idprod: "3",
    prodname: "Tablet",
    prodimage: "tablet.jpg",
    prodprice: "300",
    prodstatus: false,
  },
  {
    idprod: "4",
    prodname: "Reloj",
    prodimage: "watch.jpg",
    prodprice: "200",
    prodstatus: true,
  },
  {
    idprod: "5",
    prodname: "Cámara",
    prodimage: "camera.jpg",
    prodprice: "400",
    prodstatus: true,
  },
  {
    idprod: "6",
    prodname: "Auriculares",
    prodimage: "headphones.jpg",
    prodprice: "50",
    prodstatus: false,
  },
  {
    idprod: "7",
    prodname: "Teclado",
    prodimage: "keyboard.jpg",
    prodprice: "30",
    prodstatus: true,
  },
  {
    idprod: "8",
    prodname: "Ratón",
    prodimage: "mouse.jpg",
    prodprice: "20",
    prodstatus: true,
  },
  {
    idprod: "9",
    prodname: "Monitor",
    prodimage: "monitor.jpg",
    prodprice: "150",
    prodstatus: true,
  },
  {
    idprod: "10",
    prodname: "Impresora",
    prodimage: "printer.jpg",
    prodprice: "100",
    prodstatus: false,
  },
  {
    idprod: "11",
    prodname: "Silla",
    prodimage: "chair.jpg",
    prodprice: "70",
    prodstatus: true,
  },
  {
    idprod: "12",
    prodname: "Altavoces",
    prodimage: "speakers.jpg",
    prodprice: "80",
    prodstatus: true,
  },
  {
    idprod: "13",
    prodname: "Micrófono",
    prodimage: "mic.jpg",
    prodprice: "40",
    prodstatus: true,
  },
  {
    idprod: "14",
    prodname: "Router",
    prodimage: "router.jpg",
    prodprice: "60",
    prodstatus: false,
  },
  {
    idprod: "15",
    prodname: "Disco duro",
    prodimage: "hdd.jpg",
    prodprice: "120",
    prodstatus: true,
  },
  {
    idprod: "16",
    prodname: "SSD",
    prodimage: "ssd.jpg",
    prodprice: "150",
    prodstatus: true,
  },
  {
    idprod: "17",
    prodname: "Tarjeta gráfica",
    prodimage: "gpu.jpg",
    prodprice: "300",
    prodstatus: true,
  },
  {
    idprod: "18",
    prodname: "RAM",
    prodimage: "ram.jpg",
    prodprice: "90",
    prodstatus: false,
  },
  {
    idprod: "19",
    prodname: "Placa madre",
    prodimage: "motherboard.jpg",
    prodprice: "110",
    prodstatus: true,
  },
  {
    idprod: "20",
    prodname: "Fuente de poder",
    prodimage: "psu.jpg",
    prodprice: "80",
    prodstatus: true,
  },

  {
    idprod: "101",
    prodname: "Laptop Gamer",
    prodimage: "laptop1.jpg",
    prodprice: "1500",
    prodstatus: true,
  },
  {
    idprod: "102",
    prodname: "Laptop Ultrabook",
    prodimage: "laptop2.jpg",
    prodprice: "1200",
    prodstatus: true,
  },
  {
    idprod: "103",
    prodname: "Tablet Pro",
    prodimage: "tablet1.jpg",
    prodprice: "600",
    prodstatus: true,
  },
  {
    idprod: "104",
    prodname: "Tablet Kids",
    prodimage: "tablet2.jpg",
    prodprice: "250",
    prodstatus: false,
  },
  {
    idprod: "105",
    prodname: "Teléfono Pro",
    prodimage: "phone1.jpg",
    prodprice: "900",
    prodstatus: true,
  },
  {
    idprod: "106",
    prodname: "Teléfono Lite",
    prodimage: "phone2.jpg",
    prodprice: "400",
    prodstatus: true,
  },
  {
    idprod: "107",
    prodname: "Cámara Pro",
    prodimage: "camera1.jpg",
    prodprice: "500",
    prodstatus: true,
  },
  {
    idprod: "108",
    prodname: "Cámara Traveler",
    prodimage: "camera2.jpg",
    prodprice: "300",
    prodstatus: true,
  },
  {
    idprod: "109",
    prodname: "Reloj Smart",
    prodimage: "watch1.jpg",
    prodprice: "250",
    prodstatus: true,
  },
  {
    idprod: "110",
    prodname: "Reloj Basic",
    prodimage: "watch2.jpg",
    prodprice: "100",
    prodstatus: true,
  },
  {
    idprod: "111",
    prodname: "Auriculares Pro",
    prodimage: "headphones1.jpg",
    prodprice: "120",
    prodstatus: true,
  },
  {
    idprod: "112",
    prodname: "Auriculares Lite",
    prodimage: "headphones2.jpg",
    prodprice: "50",
    prodstatus: true,
  },
  {
    idprod: "113",
    prodname: "Teclado Gamer",
    prodimage: "keyboard1.jpg",
    prodprice: "80",
    prodstatus: true,
  },
  {
    idprod: "114",
    prodname: "Teclado Ultrathin",
    prodimage: "keyboard2.jpg",
    prodprice: "60",
    prodstatus: true,
  },
  {
    idprod: "115",
    prodname: "Ratón Gamer",
    prodimage: "mouse1.jpg",
    prodprice: "70",
    prodstatus: true,
  },
  {
    idprod: "116",
    prodname: "Ratón Travel",
    prodimage: "mouse2.jpg",
    prodprice: "30",
    prodstatus: true,
  },
  {
    idprod: "117",
    prodname: "Monitor Pro",
    prodimage: "monitor1.jpg",
    prodprice: "400",
    prodstatus: true,
  },
  {
    idprod: "118",
    prodname: "Monitor Budget",
    prodimage: "monitor2.jpg",
    prodprice: "200",
    prodstatus: true,
  },
  {
    idprod: "119",
    prodname: "Altavoces Hi-Fi",
    prodimage: "speakers1.jpg",
    prodprice: "200",
    prodstatus: true,
  },
  {
    idprod: "120",
    prodname: "Altavoces Portable",
    prodimage: "speakers2.jpg",
    prodprice: "50",
    prodstatus: true,
  },
];
let idProdSearch = "";
let idProdUpdate = "";

// REFERENCIAR TODOS LOS ELEMENTOS DE

let idProd = document.getElementById("idprod");
let prodName = document.querySelector("#prodname");
let prodImage = document.getElementById("prodimage");
let prodPrice = document.getElementById("prodprice");
let prodStatus = document.getElementById("prodstatus");

// BOTONES

let btnSave = document.getElementById("btnsave");
let btnSearch = document.getElementById("btnsearch");
let btnUpdate = document.getElementById("btnupdate");
let btnDelete = document.getElementById("btndelete");
let message = document.getElementById("message");
message.classList.add("d-none");

//AGREGAR PRODUCTOS

function addProduct(idprod, prodname, prodimage, prodprice, prodstatus) {
  message.classList.remove("d-none");
  let sprod = findProduct(idprod);
  if (!sprod) {
    products.push({
      idprod: idprod,
      prodname: prodname,
      prodimage: prodimage,
      prodprice: prodprice,
      prodstatus: prodstatus,
    });
    message.classList.remove("alert-danger");
    message.classList.add("alert-success");
    message.textContent = "Producto Agregado Exitosamente";
  } else {
    message.classList.remove("alert-success");
    message.classList.add("alert-danger");
    message.textContent =
      " El ID del producto ya existente. Inténtelo con otro...";
  }
}

function searchProduct(value) {
  let foundProducts = products.filter((product) => {
    for (const key in value) {
      if (!product.hasOwnProperty(key) || product[key] !== value[key]) {
        return false;
      }
    }
    return true;
  });

  if (foundProducts.length > 0) {
    // Mostrar el primer producto encontrado en los campos
    const { idprod, prodname, prodimage, prodprice, prodstatus } =
      foundProducts[0];
    idProd.value = idprod;
    prodName.value = prodname;
    prodImage.value = prodimage;
    prodPrice.value = prodprice;
    prodStatus.value = prodstatus ? "enable" : "disable";

    // Si hay más de un producto encontrado, mostrarlos en una tabla
    if (foundProducts.length > 1) {
      displayTableResults(foundProducts.slice(1));
    }
  } else {
    message.classList.remove("alert-success");
    message.classList.remove("d-none");
    message.classList.add("alert-danger");
    message.textContent = "Producto no encontrado. Inténtelo de nuevo.";
  }
}

function updateProduct(idprod) {
  //Buscar metodo splice() y metodo findindex
  idProdUpdate = idProd.value;
  if (idProdSearch === idProdUpdate) {
    //Actualizar el producto con sus nuevos datos. No se cambia Idprod
    let index = products.findIndex((prod) => prod.idprod === idProdSearch); //Esto devuelve la posicion en el arreglo del dato buscado
    console.log(index);
  } else {
    //Buscar el idProdUpdate para mirar que ese idProd no esta asignado a otro producto
    let sProd = findProduct(idProdUpdate);
    if (!sProd) {
      //Si no lo encuentra actualice el producto, inclusive el idprod
    }
  }
}
/*
function deleteProduct(idprod){}
*/

function findProduct(idprod) {
  let fprod = products.find((prod) => prod.idprod === idprod);
  return fprod;
}

//EVENTOS DE CADA UNO DE LOS BOTONES:

btnSave.addEventListener("click", () => {
  if (
    idProd.value != "" &&
    prodName.value != "" &&
    prodImage.value != "" &&
    prodPrice.value != "" &&
    prodStatus.value != ""
  ) {
    addProduct(
      idProd.value,
      prodName.value,
      prodImage.value,
      prodPrice.value,
      prodStatus.value === "enable" ? true : false
    );
  } else {
    message.classList.remove("d-none");
    message.classList.remove("alert-success");
    message.classList.add("alert-danger");
    message.textContent = " Debe ingresar todos los datos...";
    setTimeout(() => {
      message.textContent = "";
      message.classList.add("d-none");
    }, 3000);
  }
});

btnSearch.addEventListener("click", () => {
  const id = idProd.value;
  const name = prodName.value;
  const image = prodImage.value;
  const price = prodPrice.value;
  const status = prodStatus.value === "enable" ? true : false;

  let parametro = {};
  if (id) parametro.idprod = id;
  if (name) parametro.prodname = name;
  if (image) parametro.prodimage = image;
  if (price) parametro.prodprice = price;
  if (status) parametro.prodstatus = status;

  const results = searchProduct(parametro);

  console.log(results);
});

btnUpdate.addEventListener("click", () => {
  updateProduct(idProd.value);
});

btnUpdate.addEventListener("click", () => {
  updateProduct(idProd.value);
});

/* TABLA */

function displayTableResults(results) {
  let tableHTML = '<table class="table">'; // Aquí se define y se agrega la clase de Bootstrap
  tableHTML +=
    "<thead><tr><th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Status</th></tr></thead>";
  tableHTML += "<tbody>";
  results.forEach((result) => {
    tableHTML += `<tr>
          <td>${result.idprod}</td>
          <td>${result.prodname}</td>
          <td>${result.prodimage}</td>
          <td>${result.prodprice}</td>
          <td>${result.prodstatus ? "enable" : "disable"}</td>
      </tr>`;
  });
  tableHTML += "</tbody></table>";

  document.getElementById("resultsTable").innerHTML = tableHTML;
}
