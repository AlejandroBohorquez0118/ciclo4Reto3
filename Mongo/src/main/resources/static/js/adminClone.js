var i = 0;

function cargarDatosProductos() {


  $.ajax({
    url: 'http://129.151.116.109:8080/api/clone/all',

    type: 'GET',
    dataType: 'json',

    error: function (xhr, status) {
      alert('ha sucedido un problema, ' + xhr.status);
    },
    complete: function (xhr, status) {

    },
    success: function (json) {

      $("#Table2").empty();

      tabla = `<center><table class="table table-bordered">
                

                <thead class="table-secondary">
                <tr>
                  <th scope="col" ">Comprar</th>
                  <th scope="col">Codigo</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Procesador</th>
                  <th scope="col">Sistema<br>Operativo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Price</th>
                  <th scope="col">photography</th>
                  <th scope="col">Cantidad</th>

                </tr>
              </thead>
              <tbody>
              `
      let contador = 0;
      for (i = 0; i < json.length; i++) {

        tabla += `<tr id="${contador}">
                  <td id="col${contador}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16" onclick="añadirPedido(${contador})">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                  <td id= "idElemento${contador}">${json[i].id} 
                   <td>${json[i].brand} 
                   <td>${json[i].procesor}
                   <td>${json[i].os}
                   <td>${json[i].description}
                   <td>${json[i].price}
                   <td>${json[i].photography}
                   <td>
                   <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary" onclick="cantidadLess(${contador})">

                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                      </svg>
  
                    </button>
                    <label id="Cantidad${contador}" class="Cantidad">0</label>
                    <button type="button" class="btn btn-primary" onclick="cantidadPlus(${contador})">
  
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                      </svg>
  
                    </button>
                    </div>
                 `
        contador += 1;
      }
      $("#Table2").append(tabla + "</table>")

    }
  });
}


function cantidadPlus(id) {

  let cantidad = document.getElementById("Cantidad" + id).innerHTML
  let cantidad2 = parseInt(cantidad) + 1
  let cantidad3 = document.getElementById("Cantidad" + id)
  cantidad3.innerHTML = cantidad2
}

function cantidadLess(id) {

  let cantidad = document.getElementById("Cantidad" + id).innerHTML
  let cantidad2 = parseInt(cantidad) - 1
  if (cantidad2 < 0) { cantidad2 = 0 }
  let cantidad3 = document.getElementById("Cantidad" + id)
  cantidad3.innerHTML = cantidad2
}


var pedido = []
var cantidadP = []

function añadirPedido(contador) {

  var fila = document.getElementById(contador)

  var tabla3 = document.getElementById("idElemento" + contador).innerText
  pedido.push(tabla3)
  let cantidad = document.getElementById("Cantidad" + contador).innerText
  cantidadP.push(cantidad)
  fila.remove();

  pasarLista()
}

var CantidadF = {}
function pasarLista() {
  var contador = 1
  for (i = 0; i < cantidadP.length; i++) {

    CantidadF[contador] = cantidadP[i]
    contador += 1

  }


}

function imprimirOrden() {
  $("#Table3").empty();

  var tabla = `<center><table class="table table-bordered">
      
<thead class="table-secondary">
<tr>
  
  <th scope="col">Eliminar</th>
  <th scope="col">Codigo</th>
  <th scope="col">Marca</th>
  <th scope="col">Procesador</th>
  <th scope="col">Sistema<br>Operativo</th>
  <th scope="col">Descripcion</th>
  <th scope="col">Price</th>
  <th scope="col">photography</th>
  <th scope="col">Cantidad</th>

</tr>
</thead>
<tbody>
`
  filas = ""
  var contador = 0;

  for (i = 0; i < pedido.length; i++) {

    $.ajax({
      url: 'http://129.151.116.109:8080/api/clone/' + pedido[i],
      //  data : { id : 123 },
      type: 'GET',
      dataType: 'json',

      error: function (xhr, status) {
        alert('ha sucedido un problema, ' + xhr.status);
      },
      complete: function (xhr, status) {
        // alert('Petición realizada, '+xhr.status);
      },
      success: function (json) {

        filas += `<tr id="fil${contador}">
                  
                  <td>
                  <button type="button" class="btn btn-dark" onclick="eliminarArticulo(${json.id}, ${contador})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                     <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                  </button>
                  <td>${json.id} 
                   <td>${json.brand} 
                   <td>${json.procesor}
                   <td>${json.os}
                   <td>${json.description}
                   <td>${json.price}
                   <td>${json.photography}
                   <td>
                   
                    <label id="cant${json.id}">${cantidadP[contador]}</label>
                    
                    </div>
                    </tr>

                   
                   `
        contador += 1;
        $("#Table3").empty();
        $("#Table3").append(tabla + filas)


      }

    })

  }
  let boton1 = document.getElementById("boton1")
  let boton2 = document.getElementById("boton2")
  boton1.className = "btn btn-dark btn-lg col-3"
  boton2.className = "btn btn-dark btn-lg col-3"
}


var longitud
var compra = {}
function verificarOrden() {

  $.ajax({
    url: 'http://129.151.116.109:8080/api/order/all',
    //  data : { id : 123 },
    type: 'GET',
    dataType: 'json',

    error: function (xhr, status) {
      alert('ha sucedido un problema, ' + xhr.status);
    },
    complete: function (xhr, status) {
      // alert('Petición realizada, '+xhr.status);
    },
    success: function (tama) {

      longitud = tama.length + 1

      var contador = 1;
      for (i = 0; i < pedido.length; i++) {

        $.ajax({
          url: 'http://129.151.116.109:8080/api/clone/' + pedido[i],

          type: 'GET',
          dataType: 'json',

          error: function (xhr, status) {
            alert('ha sucedido un problema, ' + xhr.status);
          },
          complete: function (xhr, status) {

          },
          success: function (json) {

            compra[contador] = json
            contador += 1

          }
        }
        );
      } verificarAsesor(compra)
    }
  })
}

var perfil
function verificarAsesor(compra) {

  $.ajax({
    url: 'http://129.151.116.109:8080/api/user/' + localStorage.id,

    type: 'GET',
    dataType: 'json',

    error: function (xhr, status) {
      alert('ha sucedido un problema, ' + xhr.status);
    },
    complete: function (xhr, status) {

    },
    success: function (json) {

      perfil = json
      formatoFecha()

    }
  });

}

var fecha

function formatoFecha() {

  let fecha = new Date().toDateString();
  let mes = fecha.substring(4, 7);
  let dia = fecha.substring(8, 10);
  let año = fecha.substring(11, 15);
  let mesNum = "";
  if (mes == "Dec") { mesNum = "12" }
  if (mes == "Nov") { mesNum = "11" }
  if (mes == "Oct") { mesNum = "10" }
  if (mes == "Sep") { mesNum = "9" }
  if (mes == "Aug") { mesNum = "8" }
  if (mes == "Jul") { mesNum = "7" }
  if (mes == "Jun") { mesNum = "6" }
  if (mes == "May") { mesNum = "5" }
  if (mes == "Apr") { mesNum = "4" }
  if (mes == "Mar") { mesNum = "3" }
  if (mes == "Feb") { mesNum = "2" }
  if (mes == "Jan") { mesNum = "1" }

  fecha = año + "-" + mesNum + "-" + dia;
  envioOrden(fecha)
}

function envioOrden(fecha) {

  let var2 = {
    id: longitud,
    registerDay: fecha,
    status: "Pendiente",
    salesMan: perfil,
    products: compra,
    quantities: CantidadF

  };

  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: 'JSON',
    data: JSON.stringify(var2),
    url: "http://129.151.116.109:8080/api/order/new",
    success: function (respose) {
      let barraAlerta = $("#alertaOrden")
      barraAlerta.innerHTML = "";

      let alerta = '<div class="alert alert-success" role="alert">Su orden fue satisfactoriamente añadida</div>'
      barraAlerta.append(alerta)
    },
    error: function (jqXHR, textStatus, errorTrown) {


      alert("No se guardó correctamente");
    }
  });

}


function eliminarArticulo(id,contador){
  console.log(id)
  delete CantidadF[id];
  let indPedido = id - 1
  if (indPedido < 0){indPedido=0}
  pedido.splice(indPedido,1);
  console.log(contador)
  let fila = document.getElementById("fil"+contador)
  fila.remove();


}