$('#tabla tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = tabla.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            var indice = $(this).closest("tr").find(".encabezado").data("indice");
            row.child(format(datos[indice])).show();
            tr.addClass('shown');
        }
});
$('#tabla tbody ').on('click', 'td button.editar', function () {
    var indice = $(this).closest("tr").find(".encabezado").data("indice");
    var fila = datos[indice];
    var id = fila[Object.keys(Datos)[0]];
    url = DireccionURL+ "/Edit/"+id;
    $(location).attr('href', url);
});
$('#tabla tbody').on('click', 'td button.Details', function () {
    var indice = $(this).closest("tr").find(".encabezado").data("indice");
    var fila = datos[indice];
    var id = fila[Object.keys(Datos)[0]];
    url = DireccionURL + "/Details/" + id;
    $(location).attr('href', url);
});
