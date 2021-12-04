contador = 0;
function cargarDatos(){
    

    $.ajax({    
            url : 'http://localhost:8080/api/user/all',
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
              window.datos = json;  
              $("#Table").empty();
                
                tabla = `<center><table class="table table-bordered">
                

                <thead class="table-secondary">
                <tr>
                  <th scope="col">Identificacion</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Cellphone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contraseña</th>
                  <th scope="col">Zona</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Accion</th>

                </tr>
              </thead>
              <tbody>
              `
                for(i = 0;  i < json.length; i++){
                  console.log(window.datos.identification);
                 console.log(json[contador].identification); 
                  let identification = json[contador].identification;
                  tabla += `<tr>
                   <td>`+identification+`  
                   <td>${json[contador].name}
                   <td>${json[contador].address}
                   <td>${json[contador].cellPhone}
                   <td>${json[contador].email}
                   <td>${json[contador].password}
                   <td>${json[contador].zone}
                   <td>${json[contador].type}
                   <td>
                   <button id="btnGroupDrop1" type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                     Seleccione
                   </button>
                   <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                     <li><a class="dropdown-item" onclick="borrarUsuario(${json[contador].id})">Borrar Usuario</a></li>
                     <li>
                     <div><button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#menuEdicionUsuario" onclick="ObtenerDatos(${json[contador].id})">
                     Editar Usuario           
                     </button>
                     </div>
                     </li>
                   </ul>
                 `
                   contador += 1;
                }
                $("#Table").append(tabla+"</table>")
                console.log(json)
                console.log("porongaS")
                
            }
        });
}


function borrarUsuario(id){

    
        var elemento={
            "id":id
          };
          
          var dataToSend=JSON.stringify(elemento);
        $.ajax({    
            
            dataType : 'JSON',
           
            data : dataToSend,
            
           
            url : "http://localhost:8080/api/user/"+id,
            type: 'DELETE',
            contentType:'application/json',
            success : function(json, textStatus, xhr) {
              
                    console.log("borrado satisfactorio");
                    
            },
            
            complete : function(xhr, status) {
               //lert('Petición realizada '+xhr.status);
                //limpiarFormulario();
                cargarDatos();
            }
        });
    }

function ObtenerDatos(id){
      
      window.dataToSend=JSON.stringify(id);

    $.ajax({    
        url : 'http://localhost:8080/api/user/'+window.dataToSend,
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
            window.confirmacionCorreo = json.email;
            $("#IdentificationE").val(json.identification);
            $("#nameEdit").val(json.name);
            $("#AddressEdit").val(json.address);
            $("#CellphoneEdit").val(json.cellPhone);
            $("#correoEdit").val(json.email);
            $("#passwordEdit1").val(json.password);
            $("#passwordEdit2").val(json.password);
            $("#ZoneEdit").val(json.zone);
            $("#TypeEdit").val(json.type);
        }
    });
}

function confirmarVacios(){

  let identification = $("#IdentificationE").val();
  let name = $("#nameEdit").val();
  let address = $("#AddressEdit").val();
  let cellPhone = $("#CellphoneEdit").val();
  let email = $("#correoEdit").val();
  let passwordE1 = $("#passwordEdit1").val();
  let passwordE2 = $("#passwordEdit2").val();
  let zone = $("#ZoneEdit").val();
  let type = $("#TypeEdit").val();

  if(identification == "" || name == "" || address == "" || cellPhone == "" || email == "" || passwordE1 == "" || type == "" || zone == ""){

    let alertaVacios = document.getElementById('AlertaGeneral')
                 let alerta = document.createElement('div')
                 alertaVacios.innerHTML="";
                 alerta.innerHTML = `<div class="alert alert-danger" role="alert">
                 <h4 class="alert-heading">Error</h4>
                 <p> Hubo un error al Obtener los datos</p>
                 <hr>
                 <p class="mb-0">Debes ingresar todos los datos solicitados
                 </p>
               </div>`
               alertaVacios.append(alerta)
  }else{

    confirmarDatos()
  }

}

function confirmarDatos(){

  var campoAlerta = document.getElementById("AlertaContraseña")

  let email = $("#correoEdit").val();
  let passwordE1 = $("#passwordEdit1").val();
  let passwordE2 = $("#passwordEdit2").val();
  
  let var1 = 0;
  let var2 = 1;
  let confirmarEmail = 0;
  let confirmarPunto = 0;
  console.log("ejecutar confirmar");
  for(i = 0 ; i < email.length; i++){
    
    var confirmar = email.substring(var1,var2);  
    var1 += 1;
    var2 += 1;
    
    if (confirmar == "@"){
       confirmarEmail +=1; 
    }

    if (confirmar == "."){
      confirmarPunto +=1; 
   }
   
  }

  if(confirmarEmail!=1 || confirmarPunto<1){

    alert("El correo es invalido");

}else{
let ver1 = document.getElementById("passwordEdit1");
let ver2 = document.getElementById("passwordEdit2");

if(passwordE1 != passwordE2){

    $ ('#AlertaContraseña').empty ();
    ver1.className="form-control is-invalid";
    ver2.className="form-control is-invalid";
    
    let wrapper = document.createElement('div')
    
    wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Contraseñas no concuerdan <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    campoAlerta.append(wrapper)

}else{
  let wrapper = document.getElementById("AlertaContraseña")
    wrapper.innerHTML="";
    ver1.className="form-control";
    ver2.className="form-control";
    confirmEmail()
}
}
}


function confirmEmail(){
        
  let userEmail = $("#correoEdit").val();

$.ajax({    

  url: 'http://localhost:8080/api/user/emailexist/'+userEmail,
  
  type: 'GET',
  dataType : 'JSON',
  contentType:'application/json',
  
  
  success : function(json, textStatus, xhr) {
   
        if(json == true){
          console.log(json.email);
            console.log(userEmail);
          if(userEmail == window.confirmacionCorreo){
            
            console.log("vamo bien");
            guardarCambios();

          }
          else{
          alert("correo ya existe")
          }
        }else{

          guardarCambios();

        }

      },
  
          complete : function(xhr, status) {
          //alert('Petición realizada '+xhr.status);


      }
});
}


function guardarCambios(){

    var elemento={
      id: window.dataToSend,
      identification: $("#IdentificationE").val(),
      name: $("#nameEdit").val(),
      address: $("#AddressEdit").val(),
      cellPhone: $("#CellphoneEdit").val(),
      email: $("#correoEdit").val(),
      passwordE1: $("#passwordEdit1").val(),
      zone: $("#ZoneEdit").val(),
      type: $("#TypeEdit").val()
          
    };
    
    var dataToSend=JSON.stringify(elemento);
    console.log("datos para enviar:");
    console.log(dataToSend);
    $.ajax({    

        dataType : 'JSON',
       
        data: dataToSend,
        
        url: 'http://localhost:8080/api/user/update',
        
        type: 'PUT',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                console.log(json);
        },
        
        
        complete : function(xhr, status) {
            //alert('Petición realizada '+xhr.status);
                let modal = document.getElementById("menuEdicionUsuario");
                 modal.style.display="none";

                 $('.modal-backdrop').remove();
                 alert("edicion completa");
                 
                 pagAdminUs();
        }
    }); 
}