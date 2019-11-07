var tabla = null, fila = null, objeto = null;
div = null, datos = [], tb = null;
function llenarTable(ActionResult) {
    var msj;
    $("#msj").show();
    $.ajax({
        url: DireccionURL + '/' + ActionResult,
        method: "GET",
        dataType: "json",
        contentType: "application/json; charset = utf-8"
    })
    .done(function (Lista) {
        if (Lista.length > 0) {
            Serializar(Lista);
            tabla.clear();
            tabla.draw();            
            $.each(datos, function (i, obj) {
                var columnasBody = [];
                addRow(i, obj, columnasBody);
                tabla.row.add(columnasBody).draw();
            });
            tabla.draw();
            //CrearModal(tb);
        } else {
            c = $(".dataTables_empty");
            c[0].innerHTML = '<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">¡no se encoontraron registros!</font></font>';
            c[0].innerText = "¡no se encoontraron registros!";
            c.bind();
        }
        tabla.draw();
        $("#msj").hide();
        $('#tabla').parents('div.dataTables_wrapper').first().show();
    });
    //.error(function (jqXHR, textStatus, errorThrown) {
    //    if (jqXHR.responseText=="") {
    //        tabla.clear();
    //        tabla.draw();
    //        c = $(".dataTables_empty");
    //        c[0].innerHTML = '<font style="vertical-align: inherit;"><font style="vertical-align: inherit;">¡Problemas al conectar con el servidor! estamos trabajando para solucionarlo... disculpe las molestias.</font></font>';
    //        c[0].innerText = "¡Problemas al conectar con la base de datos! estamos trabajando para solucionarlo... disculpe las molestias.";
    //        c.bind();
    //        $("#msj").hide();
    //        $('#tabla').parents('div.dataTables_wrapper').first().show();
    //    }        
    //});
}
function prepararTabla() {
    var columnas = Object.keys(Propiedadestabla).length;
    var clases = [];
    for (var i = 0; i < columnas; i++) {
        clases.push(null);
    }
    clases.push({ className: " details", "orderable": false, "defaultContent": '' });
    tabla = $('#tabla').DataTable({
        "columns": clases,
        "order": [[1, 'asc']]
    });
    $('#tabla').parents('div.dataTables_wrapper').first().hide();
}
function Serializar(ServerData) {
    EstructuraDatos();
    var objeto = null;
    $.each(ServerData, function (index, value) {
        $.each(value, function (indice, valor) {
            objeto = $.parseJSON(valor)[0];
            if (objeto==undefined) {
                objeto = JSON.parse(valor);
            }
            Datos[indice] = objeto;
        });
        datos.push(Datos);
        EstructuraDatos();
    });
}