function pagAdminUs() {
    $("#containerPag").load("http://localhost:8080/pagAdminUs.html", function (data) {
    $(this).html(data);
    })
    console.log("pagAdminUs1")
    cargarDatos()
    console.log("pagAdminUs")
}

function pagCreUs() {
    $("#containerPag").load("http://localhost:8080/creacionUsuario.html", function (data) {
    $(this).html(data);
    })
    console.log("pagAdminUs1")
    cargarDatos()
    console.log("pagAdminUs")
}

function pagAdminProd() {
    $("#containerPag").load("http://localhost:8080/adminClone.html", function (data) {
    $(this).html(data);
    })
    console.log("adminClone")
    
    console.log("pagAdminUs")
}
