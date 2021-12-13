var prueba
function cargarDatosSalesMan() {
    let zona = localStorage.getItem("zona")

    $.ajax({
        url: 'http://129.151.116.109:8080/api/order/zona/' + zona,

        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('ha sucedido un problema, ' + xhr.status);
        },
        complete: function (xhr, status) {

        },
        success: function (json) {

            prueba = json
            $("#Table").empty();

            tabla = `<center><table class="table table-bordered">
                  
  
                  <thead class="table-secondary">
                  <tr>
                   
                    <th scope="col">Identificacion</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Fecha de Pedido</th>
                    <th scope="col">Id Pedido</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Ver Pedido</th>
  
                  </tr>
                </thead>
                <tbody>
                `
            let contador = 0;
            for (i = 0; i < json.length; i++) {
                let fechaP = json[i].registerDay.substring(0, 10)

                tabla += `<tr id="${contador}">
                    
                    
                     <td>${json[i].salesMan.identification} 
                     <td>${json[i].salesMan.name}
                     <td>${json[i].salesMan.email}
                     <td>${fechaP}
                     <td>${json[i].id}
                     <td>${json[i].status}
                     <td><button type="button" class="btn btn-dark" onclick="verPedido(${json[i].id})">Ver</button>
                   `
                contador += 1;
            }
            $("#Table").append(tabla + "</table>")

        }
    });
}

var json1
var json2
function verPedido(id) {

    $.ajax({
        url: 'http://129.151.116.109:8080/api/order/' + id,

        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('ha sucedido un problema, ' + xhr.status);
        },
        complete: function (xhr, status) {

        },
        success: function (json) {
            console.log(json)
            json1 = json.products
            json2 = json
            tabla = `<center><table class="table table-bordered">
                  
  
                  <thead class="table-secondary">
                  <tr>
                   
                    <th scope="col">Codigo</th>
                    <th scope="col">Sistema<br>Operativo</th>
                    <th scope="col">Procesador</th>
                    <th scope="col">Memoria</th>
                    <th scope="col">Disco duro</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Price</th>
                    <th scope="col">Photography</th>
                    <th scope="col">
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                    ` 
                    if(json2.status == "Pendiente"){
                        tabla +=      `
                     <div class="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Pendiente
                            </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li><a class="dropdown-item" onclick="funcionAprobar(${json2.id})">Aprobado</a></li>
                                    <li><a class="dropdown-item" onclick="funcionRechazar(${json2.id})">Rechazado</a></li>
                                </ul>
                        </div>
                    </div>`
                    }
                    if(json2.status == "Aprobada"){
                        tabla +=    `
                        <div class="btn-group" role="group">
                               <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                   Aprobada
                               </button>
                                   <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                       <li><a class="dropdown-item" onclick="funcionPendiente(${json2.id})">Pendiente</a></li>
                                       <li><a class="dropdown-item" onclick="funcionRechazar(${json2.id})">Rechazado</a></li>
                                   </ul>
                           </div>
                       </div>`
                    }
                    
                    if(json2.status == "Rechazada"){
                        tabla +=    `
                        <div class="btn-group" role="group">
                               <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                   Rechazada
                               </button>
                                   <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                       <li><a class="dropdown-item" onclick="funcionAprobar(${json2.id})">Aprobado</a></li>
                                       <li><a class="dropdown-item" onclick="funcionPendiente(${json2.id})">Pendiente</a></li>
                                   </ul>
                           </div>
                       </div>`
                    }                    
                    tabla += `
                  </tr>
                </thead>
                <tbody>
                `
            contador = 1;
            while (json1[contador] != null) {
                tabla += `<tr>
                    
                    <td>${json1[contador].id}
                     <td>${json1[contador].os} 
                     <td>${json1[contador].procesor}
                     <td>${json1[contador].memory}
                     <td>${json1[contador].hardDrive}
                     <td>${json1[contador].description}
                     <td>${json1[contador].price}
                     <td>${json1[contador].photography}
                     `
                     
                   
                        
                console.log(json1[contador])
                contador += 1;
            }
            let campoTabla = document.getElementById("TableOrder")
            campoTabla.innerHTML = ""
            $("#TableOrder").append(tabla + "</table>")

        }




    }
    )
}

function funcionAprobar(id){

    var2 = {id: id, status: "Aprobada"}
console.log(var2)
    $.ajax({
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url: "http://129.151.116.109:8080/api/order/update",
        success: function (respose) {
          alert("funciono")
          pagListProd()
        },
        error: function (jqXHR, textStatus, errorTrown) {
    
    
          alert("No se guardó correctamente");
        }
      })
}

function funcionRechazar(id){

    var2 = {id: id, status: "Rechazada"}
    console.log(var2)
    $.ajax({
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url: "http://129.151.116.109:8080/api/order/update",
        success: function (respose) {
          alert("funciono")
          pagListProd()
        },
        error: function (jqXHR, textStatus, errorTrown) {
    
    
          alert("No se guardó correctamente");
        }
      }) 
}

function funcionPendiente(id){

    var2 = {id: id, status: "Pendiente"}
    console.log(var2)
    $.ajax({
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url: "http://129.151.116.109:8080/api/order/update",
        success: function (respose) {
          alert("funciono")
          pagListProd()
        },
        error: function (jqXHR, textStatus, errorTrown) {
    
    
          alert("No se guardó correctamente");
        }
      })



}