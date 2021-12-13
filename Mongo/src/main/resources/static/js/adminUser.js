function listaOrdenes() {
    $("#containerPag").load("http://129.151.116.109:8080/listaZona.html", function (data) {
        $(this).html(data);
    })
   
    cargarDatosSalesMan()
    
}

function pagListProd() {
    $("#containerPag").load("http://129.151.116.109:8080/invClone.html", function (data) {
        $(this).html(data);
    })
    cargarDatosProductos()
}

function pagAdminProd() {
    $("#containerPag").load("http://129.151.116.109:8080/adminClone.html", function (data) {
        $(this).html(data);
    })
    cargarDatosProductos()
}


function cargarPerfil() {
    console.log("se ejecula cargar perfil")
    $.ajax({
        url: 'http://129.151.116.109:8080/api/user/all',

        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('ha sucedido un problema, ' + xhr.status);
        },
        complete: function (xhr, status) {

        },
        success: function (json) {
            window.datos = json;
            $("#Perfil").empty();

            let identificacion = localStorage.getItem("identificacion")
            let titulo = localStorage.getItem("nombre")
            let email = localStorage.getItem("email")
            let tipo = localStorage.getItem("tipo")
            let zona = localStorage.getItem("zona")
            if (tipo == "ASE") {
                tipo = "Asesor Comercial";
            } else if (tipo == "COORD") {
                tipo = "Coordinador de zona"
            } else if (tipo == "ADM") {
                tipo = "Administrador"
            }


            tabla = `<center><table class="table table-bordered">
            

            <thead class="table-secondary">
            <tr>
              <th scope="col">Identificacion</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Perfil</th>
              <th scope="col">Zona</th>
            </tr>
          </thead>
          <tbody>
          `
            tabla += `<tr>
               <td>${identificacion}  
               <td>${titulo}
               <td>${email}
               <td>${tipo}
               <td>${zona}
                `
            

            $("#Perfil").append(tabla + "</table>")
            if(identificacion == null){

                let verif = document.getElementById("verificacion")
                verif.style.display="none"
                alert("usuario no verificado, por favor ingrese nuevamente")
                location.href="http://129.151.116.109:8080/"

            }

        }
    });


}


function salir() {

    localStorage.clear()
    location.href="http://129.151.116.109:8080/"


}
