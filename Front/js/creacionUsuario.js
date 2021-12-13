function validarCamposVacios(){
    let check = 0;
    let identVal = $("#IdentificationU").val();
    let nameVal = $("#nameCreationU").val();
    let addressVal = $("#AddressCreationU").val();
    let cellphoneVal = $("#CellphoneU").val();
    let correoVal = $("#correoCreationU").val();
    let pass1 = $("#password1U").val();
    let pass2 = $("#password2U").val();
    let zoneVal = $("#ZoneU").val();
    let typeVal = $("#TypeU").val();
    

    if (identVal == "" || nameVal == "" || addressVal == "" || cellphoneVal == "" || correoVal == "" || pass1 == "" || pass2 == "" || zoneVal == "" || typeVal == ""){
        let cont = "";
        
        if (identVal == ""){
            cont += " Identificacion ";
        }
        if (nameVal == ""){
            cont += " Nombre ";
        }
        if (addressVal == ""){
            cont += " Direccion ";
        }
        if (cellphoneVal == ""){
            cont += " Celular ";
        }
        if (pass1 == "" || pass2 == ""){
            cont += " Contraseña ";
        }
        if (zoneVal == ""){
            cont += " Zona ";
        }
        if (typeVal == ""){
            cont += " Tipo ";
        }

        if (check == 0){
        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderHeadU')
        var wrapper3 = document.createElement('div')
        alertPlaceholderHead.innerHTML = "";
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Por favor ingresar todos los datos requeridos   </p>
        <hr>
        <p class="mb-0">Los siguientes campos no han sido correctamente ingresados
        `+cont+ `
        </p>
      </div>`

        alertPlaceholderHead.append(wrapper3)
        
        check += 1;
    }
    else{

        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderHeadU')
        var wrapper3 = document.createElement('div')
        alertPlaceholderHead.innerHTML = "";
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Por favor ingresar todos los datos requeridos  </p>
        <hr>
        <p class="mb-0">Los siguientes campos no han sido correctamente ingresados
        `+cont+ `
        </p>
      </div>`
        
        alertPlaceholderHead.append(wrapper3)
        
    }

    }else{
    //alert("Vamos bien");
    confirmarEmailU();
    let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderHeadU')
    alertPlaceholderHead.innerHTML = "";   

    }

}

function confirmarEmailU(){

    let email = $("#correoCreationU").val();
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

    let emailVal = document.getElementById("correoCreationU");
                    

    emailVal.className="form-control is-invalid";
    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmailU')
    let wrapper2 = document.createElement('div')
    alertPlaceholderEmail.innerHTML="";
    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Correo Invalido <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholderEmail.append(wrapper2)
    

}else{
//alert("funcion verificar email correcta")
let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmailU')
alertPlaceholderEmail.innerHTML="";
let emailVal = document.getElementById("correoCreationU");
emailVal.className="form-control";
verFieldU()
}

}

function verFieldU(){

    var alertPlaceholder = document.getElementById('liveAlertPlaceholderU')
    
    
    
    let pass1 = $("#password1U").val();
    let pass2 = $("#password2U").val();
    let ver1 = document.getElementById("password1U");
    let ver2 = document.getElementById("password2U");
    
    if (pass1 == pass2){
    
        
       
        
        var wrapper = document.getElementById("liveAlertPlaceholderU")
        wrapper.innerHTML="";
        ver1.className="form-control";
        ver2.className="form-control";
        verEmailU();
    }else{
    
        
    ver1.className="form-control is-invalid";
    ver2.className="form-control is-invalid";
    alertPlaceholder.innerHTML="";
    var wrapper = document.createElement('div');
    wrapper.innerHTML="";
      wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Passwords do not match <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    

      alertPlaceholder.append(wrapper)
    
    }
    
    }


    var checkEmailU = 0;
function verEmailU(){

    userEmailVerU = $("#correoCreationU").val(),


    $.ajax({    

        url: 'http://localhost:8080/api/user/emailexist/'+userEmailVerU,
        
        type: 'GET',
        dataType : 'JSON',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                
                
                if(json == false){


                 let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderHeadU')
                 var wrapper4 = document.createElement('div')
                 alertPlaceholderLog.innerHTML="";
                 wrapper4.innerHTML = `<div class="alert alert-success" role="alert">
                 <h4 class="alert-heading">Bien hecho!</h4>
                 <p> Tu cuenta ha sido creada satisfactoriamente   </p>
                 <hr>
                 <p class="mb-0">Ingresa tu correo y contraseña para ingresar
                 </p>
               </div>`
         
                 alertPlaceholderLog.append(wrapper4)
                 let emailVal = document.getElementById("correoCreationU");
                 emailVal.className="form-control";

                }else{

                    if (checkEmailU == 0){

                    let emailVal = document.getElementById("correoCreationU");
                    

                    emailVal.className="form-control is-invalid";
                    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmailU')
                    let wrapper2 = document.createElement('div')
                    alertPlaceholderEmail.innerHTML="";
                    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">Correo invalido <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

                    alertPlaceholderEmail.append(wrapper2)
                    
                        checkEmailU+=1;
                }
                    else{
                        let emailVal = document.getElementById("correoCreationU");
                        
                        emailVal.className="form-control is-invalid";
                    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmailU')
                    alertPlaceholderEmail.innerHTML="";
                    let wrapper2 = document.createElement('div')
                    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Correo invalido <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

                    alertPlaceholderEmail.append(wrapper2)

                    }
                }

            },
        
                complete : function(xhr, status) {
                    creacionId();
                //alert('Petición realizada '+xhr.status);


            }
    });
}

function saveUserU(){
    

    let var2 = {
        id:window.idCarga,
        identification:$("#IdentificationU").val(),
        name:$("#nameCreationU").val(),
        address:$("#AddressCreationU").val(),
        cellPhone:$("#CellphoneU").val(),
        email:$("#correoCreationU").val(),
        password:$("#password1U").val(),
        zone:$("#ZoneU").val(),
        type:$("#TypeU").val()
        
    };
    console.log(var2);
    $.ajax({
        type:'POST',
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url:"http://localhost:8080/api/user/new",
        success:function(respose) {
            //alert("se guardo satisfactoriamente")
            console.log(respose);
            console.log("funciono "+var2)
            //alert("Se guardó correctametne..");
            //window.location.reload();
            
        },
        error:function(jqXHR, textStatus, errorTrown){
            
            
            alert("No se guardó correctamente");
        }
    });

}
    function creacionId(){

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
                window.idCarga = json.length + 1;
                console.log(window.idCarga)
                saveUserU();
            }
        });



    }

