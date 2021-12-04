contador2 = 0;

function cargarDatos2(){
    

    $.ajax({    
            url : 'http://localhost:8080/api/clone/all',
        //  data : { id : 123 },
            type : 'GET',
            dataType : 'json',
            
            error : function(xhr, status) {
                alert('ha sucedido un problema, '+xhr.status);
            },
            complete : function(xhr, status) {
               // alert('Petición realizada, '+xhr.status);
            },
            success : function(json) {
              window.datos2 = json;  
              $("#Table2").empty();
                
                tabla = `<center><table class="table table-bordered">
                

                <thead class="table-secondary">
                <tr>
                  <th scope="col">Brand</th>
                  <th scope="col">Procesor</th>
                  <th scope="col">Os</th>
                  <th scope="col">Cellphone</th>
                  <th scope="col">Description</th>
                  <th scope="col">Memory</th>
                  <th scope="col">HardDrive</th>
                  <th scope="col">Availability</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">photography</th>

                </tr>
              </thead>
              <tbody>
              `
                for(i = 0;  i < json.length; i++){
                 
                  let brand = json[contador2].brand;
                  tabla += `<tr>
                   <td>`+brand+`  
                   <td>${json[contador2].procesor}
                   <td>${json[contador2].os}
                   <td>${json[contador2].description}
                   <td>${json[contador2].memory}
                   <td>${json[contador2].hardDrive}
                   <td>${json[contador2].availability}
                   <td>${json[contador2].price}
                   <td>${json[contador2].quantity}
                   <td>${json[contador2].photography}
                   <td>
                   <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                     Seleccione
                   </button>
                   <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                     <li><a class="dropdown-item" onclick="borrarProd(${json[contador2].id})">Borrar Producto</a></li>
                     <li>
                     <div><button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#menuEdicionProducto" onclick="ObtenerDatos2(${json[contador2].id})">
                     Editar Producto           
                     </button>
                     </div>
                     </li>
                   </ul>
                 `
                   contador2 += 1;
                }
                $("#Table2").append(tabla+"</table>")
                
                
                
            }
        });
}


function borrarProd(id){

    
    var elemento={
        "id":id
      };
      
      var dataToSend=JSON.stringify(elemento);
    $.ajax({    
        
        dataType : 'JSON',
       
        data : dataToSend,
        
       
        url : "http://localhost:8080/api/clone/"+id,
        type: 'DELETE',
        contentType:'application/json',
        success : function(json, textStatus, xhr) {
          
                console.log("borrado satisfactorio");
                
        },
        
        complete : function(xhr, status) {
           //lert('Petición realizada '+xhr.status);
            //limpiarFormulario();
            location.reload();
            cargarDatos2();
        }
    });
}


function ObtenerDatos2(id){
      
    window.dataToSend2=JSON.stringify(id);

  $.ajax({    
      url : 'http://localhost:8080/api/clone/'+window.dataToSend2,
  //  data : { id : 123 },
      type : 'GET',
      dataType : 'json',
      
      error : function(xhr, status) {
          alert('ha sucedido un problema, '+xhr.status);
      },
      complete : function(xhr, status) {
         // alert('Petición realizada, '+xhr.status);
      },
      success : function(json) {
          console.log(json)
  
          $("#Brand").val(json.brand);
          $("#Procesor").val(json.procesor);
          $("#Os").val(json.os);
          $("#Description").val(json.description);
          $("#Memory").val(json.memory);
          $("#HardDrive").val(json.hardDrive);
          $("#Availability").val(json.availability);
          $("#Price").val(json.price);
          $("#Quantity").val(json.quantity);
          $("#Photography").val(json.photography);
      
      }
  });
}

function verVacios(){
var cont2 = "";
        let brand = $("#Brand").val();
        let procesor = $("#Procesor").val();
        let os = $("#Os").val();
        let description = $("#Description").val();
        let memory = $("#Memory").val();
        let hardDrive = $("#HardDrive").val();
        let availability = $("#Availability").val();
        let price = $("#Price").val();
        let quantity = $("#Quantity").val();
        let photography = $("#Photography").val();

    if(brand == "" || procesor == "" || os == "" || description == "" ||
    memory == "" || hardDrive == "" || availability == "" || 
    price == "" || quantity == "" || photography == ""){

        
        let alertaVaciosProd = document.getElementById('AlertaGeneralProd')
        let alerta = document.createElement('div')
        alertaVaciosProd.innerHTML="";
        alerta.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Error</h4>
        <p> Hubo un error al Obtener los datos</p>
        <hr>
        <p class="mb-0">Debes ingresar todos los datos solicitados
        </p>
      </div>`
      alertaVaciosProd.append(alerta)

    }
    else {

        let alertaVaciosProd = document.getElementById('AlertaGeneralProd')
        alertaVaciosProd.innerHTML="";
        let alerta = document.createElement('div')
        alertaVaciosProd.append(alerta)
        guardarCambios();
    }

}

function guardarCambios(){

    var elemento={
      id: window.dataToSend2,
      brand : $("#Brand").val(),
        procesor : $("#Procesor").val(),
        os : $("#Os").val(),
        description : $("#Description").val(),
        memory : $("#Memory").val(),
        hardDrive : $("#HardDrive").val(),
        availability : $("#Availability").val(),
        price : $("#Price").val(),
        quantity : $("#Quantity").val(),
        photography : $("#Photography").val()
          
    };
    
    var dataToSend=JSON.stringify(elemento);
    console.log("datos para enviar:");
    console.log(dataToSend);
    $.ajax({    

        dataType : 'JSON',
       
        data: dataToSend,
        
        url: 'http://localhost:8080/api/clone/update',
        
        type: 'PUT',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                console.log(json);
        },
        
        
        complete : function(xhr, status) {
            //alert('Petición realizada '+xhr.status);
                let modal = document.getElementById("menuEdicionProducto");
                 modal.style.display="none";

                 $('.modal-backdrop').remove();
                 alert("edicion completa");
                 
                 location.reload();
                 cargarDatos2();
        }
    }); 
}