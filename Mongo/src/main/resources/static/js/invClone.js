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

            $("#Table").empty();

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
                    <th scope="col">photography</th>
  
                  </tr>
                </thead>
                <tbody>
                `
            let contador = 0;
            for (i = 0; i < json.length; i++) {

                tabla += `<tr id="${contador}">
                    
                    <td id= "idElemento${contador}">${json[i].id}
                     <td>${json[i].os} 
                     <td>${json[i].procesor}
                     <td>${json[i].memory}
                     <td>${json[i].hardDrive}
                     <td>${json[i].description}
                     <td>${json[i].price}
                     <td>${json[i].photography}
                     
                     
                   `
                contador += 1;
            }
            $("#Table").append(tabla + "</table>")

        }
    });
}