
var checkLoggi = 0;

function userlogging(){
        
        let userEmail = $("#userEmail").val();
        let userPass = $("#userPass").val();
   
    $.ajax({    

        url: 'http://localhost:8080/api/user/'+userEmail+'/'+userPass,
        
        type: 'GET',
        dataType : 'JSON',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                
                
                if(json.id == null){

                    if (checkLoggi == 0){
                        let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
                        var wrapper4 = document.createElement('div')
                        alertPlaceholderLog.innerHTML = "";
                        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">Datos incorrectos!</h4>
                        <p>  Por favor asegurese de ingresar los datos de manera correcta   </p>
                        <hr>
                        <p class="mb-0">Usuario y Contraseña no concuerdan
                        </p>
                      </div>`
                
                        alertPlaceholderLog.append(wrapper4)
                
                        
                        checkLoggi+=1;
                        
                        }else{
                
                            let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
                        var wrapper4 = document.createElement('div')
                        alertPlaceholderLog.innerHTML = "";
                        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">Datos Incorrectos!</h4>
                        <p>  Por favor asegurese de ingresar los datos de manera correcta   </p>
                        <hr>
                        <p class="mb-0">Usuario y Contraseña no concuerdan
                        </p>
                      </div>`
                        
                        alertPlaceholderLog.append(wrapper4)
                
                            
                
                        }

                }else{

                    location.href="http://localhost:8080/adminUser.html";
                

                }

            },
        
                complete : function(xhr, status) {
                //alert('Petición realizada '+xhr.status);


            }
    });
}
function verField(){

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')



let pass1 = $("#password1").val();
let pass2 = $("#password2").val();
let ver1 = document.getElementById("password1");
let ver2 = document.getElementById("password2");

if (pass1 == pass2){

    
    confirmarEmail();
    
    var wrapper = document.getElementById("liveAlertPlaceholder")
    wrapper.innerHTML="";
    ver1.className="form-control";
    ver2.className="form-control";

}else{

    
ver1.className="form-control is-invalid";
ver2.className="form-control is-invalid";
var wrapper = document.createElement('div')
wrapper.innerHTML="";
  wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Passwords do not match <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)

}

}

function confirmarEmail(){

    let email = $("#correoCreation").val();
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

    let emailVal = document.getElementById("correoCreation");
                    

    emailVal.className="form-control is-invalid";
    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmail')
    let wrapper2 = document.createElement('div')
    alertPlaceholderEmail.innerHTML="";
    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Correo Invalido <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholderEmail.append(wrapper2)
    

}else{
    verEmail();
}


}

var checkEmail = 0;
function verEmail(){

    userEmailVer = $("#correoCreation").val(),


    $.ajax({    

        url: 'http://localhost:8080/api/user/emailexist/'+userEmailVer,
        
        type: 'GET',
        dataType : 'JSON',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                
                
                if(json == false){

                    creacionIdL();
                 let modal = document.getElementById("exampleModalCenter");
                 modal.style.display="none";

                 $('.modal-backdrop').remove();

                 let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
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

                 checkLoggi+=1;


                }else{

                    if (checkEmail == 0){

                    let emailVal = document.getElementById("correoCreation");
                    

                    emailVal.className="form-control is-invalid";
                    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmail')
                    let wrapper2 = document.createElement('div')
                    alertPlaceholderEmail.innerHTML="";
                    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">Correo invalido <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

                    alertPlaceholderEmail.append(wrapper2)
                    
                        checkEmail+=1;
                }
                    else{
                        let emailVal = document.getElementById("correoCreation");
                        
                        emailVal.className="form-control is-invalid";
                    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmail')
                    alertPlaceholderEmail.innerHTML="";
                    let wrapper2 = document.createElement('div')
                    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Correo invalido <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

                    alertPlaceholderEmail.append(wrapper2)

                    }
                }

            },
        
                complete : function(xhr, status) {
                //alert('Petición realizada '+xhr.status);


            }
    });
}

var check = 0;
function valEmplyFlield(){
    let identVal = $("#IdentificationC").val();
    let nameVal = $("#nameCreation").val();
    let addressVal = $("#AddressCreation").val();
    let cellphoneVal = $("#CellphoneC").val();
    let correoVal = $("#correoCreation").val();
    let pass1 = $("#password1").val();
    let pass2 = $("#password2").val();
    let zoneVal = $("#ZoneC").val();
    let typeVal = $("#TypeC").val();
    

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
        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderHead')
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
        verField();
    }
    else{

        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderHead')
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
        verField();
    }

    }else{

        verField();

    }

}

function creacionIdL(){

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
            window.idCarga2 = json.length + 1;
            console.log(window.idCarga2)
            saveUser();
        }
    });



}


function saveUser(){


    let var2 = {
        id:window.idCarga2,
        identification:$("#IdentificationC").val(),
        name:$("#nameCreation").val(),
        address:$("#AddressCreation").val(),
        cellPhone:$("#CellphoneC").val(),
        email:$("#correoCreation").val(),
        password:$("#password1").val(),
        zone:$("#ZoneC").val(),
        type:$("#TypeC").val()
        
    };
    $.ajax({
        type:'POST',
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url:"http://localhost:8080/api/user/new",
        success:function(respose) {
            setTimeout(function(){
                let limpiarAlerta = document.getElementById("liveAlertPlaceholderLog");
                limpiarAlerta.innerHTML= "";
                
            },5000); 
        },
        error:function(jqXHR, textStatus, errorTrown){
            
            
            alert("No se guardó correctamente");
        }
    });
}

var checkLog = 0;
function valEmplyFlieldLog(){

    let correoVal = $("#userEmail").val();
    let pass1 = $("#userPass").val();
    
    if (correoVal == "" || pass1 == ""){
        let cont = "";
       
        if (correoVal == ""){
            cont += " Email ";
        }
        if (pass1 == ""){
            cont += " Password ";
        }
        if (checkLog == 0){
        let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
        var wrapper4 = document.createElement('div')
        alertPlaceholderLog.innerHTML = "";
        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos incorrectos!</h4>
        <p>  Por favor ingresar todos los datos solicitados   </p>
        <hr>
        <p class="mb-0">Los siguientes datos no han sido llenados de manera correcta
        `+cont+ `
        </p>
      </div>`

        alertPlaceholderLog.append(wrapper4)

        
        checkLog+=1;
        
        }else{

            let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
        var wrapper4 = document.createElement('div')
        alertPlaceholderLog.innerHTML = "";
        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Por favor ingresar todos los datos solicitados   </p>
        <hr>
        <p class="mb-0">Los siguientes datos no han sido llenados de manera correcta
        `+cont+ `
        </p>
      </div>`
        
        alertPlaceholderLog.append(wrapper4)

            

        }

    }else{

        userlogging();

    }

}