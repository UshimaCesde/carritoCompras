// CREAR EL ARREGLO DE OBJETOS PARA EL CARRITO DE COMPRAS
let cart = [];
//Crear el arreglo de objetos de los productos
let products = [];

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

function searchProduct(parametro) {
  return products.filter((product) => {
    for (const key in parametro) {
      if (!product.hasOwnProperty(key) || product[key] !== parametro[key]) {
        return false;
      }
    }
    return true;
  });
}
/*
function updateProduct(idprod){}
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
  }
});

btnSearch.addEventListener("click", () => {});
