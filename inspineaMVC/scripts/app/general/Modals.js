var tabla = null,
fila = null,
objeto = null
div = null,
datos = [
],
tb = null;
function ObtenerDatos(modal, objeto) {
    EstructuraDatos();
    $.each(objeto, function (propiedad, valor) {
        objeto[propiedad] = $('#txt' + modal + propiedad).val()
    });
}
function CrearModal(NombredelModal) {
    EstructuraDatos();
    var ArrayModales = {
        Nuevo: '',
        Modificar: '',
        Detalles: '',
        Eliminar: ''
    };
    var Propiedades = Object.keys(PropiedadesModal);
    var PropArrayModales = Object.keys(ArrayModales);
    var txtHTML = '';
    var i = '';
    var btnEliminar = '<button name="' + i + '" class="btn btn-danger pull-right margin eliminar " type="button" data-toggle="modal" data-target="#modalEliminar"><span class="bold">Inactivar</span></button>';
    $.each(PropiedadesModal, function (value, index) {
        ArrayModales.Detalles = ArrayModales.Detalles + '<div class="col-md-6">' +
        '<label class="title">' + value + '</label>' +
        '<div class="form-group">' +
        '<label id="lbl' + value + '"></label>' +
        '</div>' +
        '</div>';
        ArrayModales.Modificar = ArrayModales.Modificar + '<div class="col-md-6">' +
        '<label class="title">' + value + '</label>' +
        '<div class="form-group">' +
        TipoDeControles[index].aniadir('Modificar' + value) +
        '</div>' +
        '</div>';
        ArrayModales.Nuevo = ArrayModales.Nuevo + '<div class="col-md-6">' +
        '<label class="title">' + value + '</label>' +
        '<div class="form-group">' +
        TipoDeControles[index].aniadir('Nuevo' + value) +
        '</div>' +
        '</div>';
    });
    ArrayModales.Eliminar = '<div class="col-md-12">' +
    '<label class="title">Razon para la inactividad</label>' +
    '<div class="form-group">' +
    '<input type="text" class="form-control" id="txtRazonInactivo" value="" />' +
    '</div>' +
    '</div>';
    $.each(PropArrayModales, function (index, value) {
        txtHTML = ArrayModales[value];
        $('#modal' + value).find('.content').append(txtHTML);
        if (value == 'Modificar') {
            $('#modal' + value).find('.Botones').append(btnEliminar);
        }
    });
    $('#btnDetalles').click(function () {
        EstructuraDatos();
        var indice = this.dataset.fila;
        var propiedades = Object.keys(PropiedadesModal);
        $.each(propiedades, function (index, value) {
            var dato = IssNull(datos[indice].Persona[value]);
            var input = $('#modalModificar').find('.content').find('#txt' + value)[0];
            input.value = dato;
        });
    });
}
function AgregarModales() {
    var textoHtml;
    $.each(modales, function (index, value) {
        textoHtml = '<div id="modal' + value + '" class="modal inmodal fade "  tabindex="-1" role="dialog" style="display: none;">' +
        '<div class="modal-dialog modal-lg">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
        '<h4 class="modal-title">' + index + '</h4>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="row content">' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div class="col-md-12 Botones">' +
        '<button id="btn' + value + '" data-toggle="" data-target="" data-fila="" data-dismiss="" type="button" class="btn btn-primary pull-left">Guardar</button>' +
        '<button id="btnCancelar" type="button" class="btn btn-white pull-left" data-dismiss="modal">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
        $('#body').append(textoHtml);
    });
}
$('#tabla tbody ').on('click', 'td button.editar', function () {
    EstructuraDatos();
    var tr = $(this).closest('tr');
    var row = tabla.row(tr);
    var indice = tr.find('.encabezado').data('indice');
    var propiedades = Object.keys(PropiedadesModal);
    $.each(PropiedadesModal, function (value, index) {
        var dato = IsNull(datos[indice].DatosPrincipales[value]);
        TipoDeControles[index].llenar('Modificar', value, dato);
    });
    $('#btnModificar')[0].innerHTML = 'Guardar cambios';
});
$('#tabla tbody').on('click', 'td button.Details', function () {
    EstructuraDatos();
    var tr = $(this).closest('tr');
    var row = tabla.row(tr);
    var indice = tr.find('.encabezado').data('indice');
    var propiedades = Object.keys(PropiedadesModal);
    $.each(propiedades, function (index, value) {
        var dato = IsNull(datos[indice].Persona[value]);
        var label = $('#modalDetalles').find('.content').find('#lbl' + value)[0];
        label.innerText = dato;
    });
    var btn = $('#modalDetalles').find('.btn ')[0];
    btn.dataset.toggle = 'modal';
    btn.dataset.target = '#modalModificar';
    btn.dataset.fila = indice
    btn.dataset.dismiss = 'modal';
    $('#btnDetalles')[0].innerText = 'Editar';
    var btn = $('#btnModificar')[0].innerText = 'Guardarcambios';
});
$('#tabla tbody').on('click', 'td button.eliminar', function () {
    EstructuraDatos();
    var tr = $(this).closest('tr');
    var row = tabla.row(tr);
    var indice = tr.find('.encabezado').data('indice');
    $('#btnEliminar')[0].innerText = 'Eliminar';
});
function CargarDDl(ActionResult, select) {
    return $.ajax({
        url: DireccionURL + '/' + ActionResult,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset = utf-8'
    }
    ).done(function (dropdowlist) {
        $.each(select, function (index, value) {
            $.each(dropdowlist, function (index, valor) {
                $('#' + value).append('<option value=\'' + valor.Id + '\' >' + valor.Descripcion + '</option>');
            });
        });
    });
}
$('#btnAgregar').click(function () {
    EstructuraDatos();
    $.each(PropiedadesModal, function (value, index) {
        var dato = '';
        TipoDeControles[index].llenar('Nuevo', value, dato);
    });
});
