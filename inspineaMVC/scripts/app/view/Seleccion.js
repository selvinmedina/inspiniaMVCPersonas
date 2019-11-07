//aqui definimos que datos vamos a ocupar para capturar del edit o el crear
var DatosPrincipales =
{
    fare_fecha:'',
    fare_Descripcion:''
    //aqui las propiedades requeridas en la captura
};

//en la primera variable declaramos la ruta del controlador
//--'/"Controlador"'
var DireccionURL = '/FaseSeleccion',
    PropiedadesModal = {},
    Propiedadestabla = {},
//aqui declaramos que modals vamos a necesitar y cual es el titulo que llevará
//"Agregar": "Nuevo",
//"Actualizar": "Modificar",
//"Detalles": "Detalles",
//"¿Seguro que desea inactivar?": "Eliminar"
    modales = {
        "Agregar Fase de Seleccion": "Nuevo",
        "Actualizar Fase de Seleccion": "Modificar",
        "Detalles Fase Seleccion": "Detalles",
        "Segurooo?": "Eliminar"
    },
    PropiedadesNuevoModal = {},
//aqui declaranos los tipos de controles que podemos utilizar en los modals
    TipoDeControles = {
        "input": {
            "aniadir": function (Id) {
                return '<input type="text" class="form-control" id="txt' + Id + '" value="" />';
            },
            "llenar": function (modal, value, dato) {
                var input = $('#txt' + modal + value).val(dato);
            },
            "obtener": function (modal, value) {
                var object = $("#txt" + modal + value);
                return $("#txt" + modal + value).val();
            }
        },
        "select": {
            "aniadir": function (Id) {
                return '<select class="form-control m-b" id="ddl' + Id + '"></select>'
            },
            "llenar": function (modal, value, dato) {
                if (dato == '') {
                    dato = '0';
                }
                $("#ddl" + modal + value)[0].value = "0";
                $("#ddl" + modal + value + " option:selected").removeAttr("selected");
                $('#ddl' + modal + value + ' option[value=' + dato + ']').attr("selected", true);
            },
            "obtener": function (modal, value) {
                var object = $("#ddl" + modal + value);
                return $("#ddl" + modal + value).val();
            }
        },
    };
//aqui  especificamos que datos llevará nuestro 
//--JSON(Datos) que recuperará del controlador atravez de AJAX
//--la elementos de los modales "editar"y "Detalles"(PropiedadesModal)
//--la elementos del modal "Nuevo"(PropiedadesNuevoModal)
//--los datos que llevará la tabla
function EstructuraDatos() {
    Datos = { BusinessEntityID: "", Empleado: "", Persona: "" };
    PropiedadesModal = {
        fare_fecha: 'input',
        fare_Descripcion: 'select'
    };
    PropiedadesNuevoModal = {
        fare_fecha: 'input',
        fare_Descripcion: 'select'
    };
}
//en esta areá definimos que datos llevará la tabla
//--IsNull() es una funcion que puede llamar para verificar que que esta 
//      definido el campo... si no lo esta, devolvera ""
//--Para agregar una celda debe usar el objeto "Columnas" 
//  ejemplo:
//  Columnas."columna de la tabla"=IsNull(obj."tabla que creo en formato JSON"."Campo de la tabla")
//  Columnas["columna de la tabla"]=IsNull(obj["tabla que creo en formato JSON"]["Campo de la tabla"])
function addRow(i, obj) {
    Columnas.fare_fecha = IsNull(obj.DatosPrincipales.fare_fecha);
    Columnas.fare_Descripcion = IsNull(obj.FasesReclutamiento.fare_Descripcion);
    Columnas.Acciones = '<div data-indice="' + i + '" class="btn-group encabezado">' +
                        '<button name="' + i + '" class="btn btn-primary btn-xs margin Details " type="button" data-toggle="modal" data-target="#modalDetalles"><span class="bold">Detalles</span></button>' +
                        '<button name="' + i + '" class="btn btn-white btn-xs margin editar" type="button" data-toggle="modal" data-target="#modalModificar"><span class="bold">Editar</span></button>' +
                  '</div>';
}
//ObtenerDatos('/aqui va el nombre del modal('Nuevo','modificar')/', aqui va el objeto que van a llenar);
$(document).ready(function () {
    cargarObjetos();
    prepararTabla();
    llenarTable('llenartabla');
    CargarDDl('fare_Descripcion', ['ddlNuevofare_Descripcion', 'ddlModificarfare_Descripcion'])
    $("#btnDetalles").click(function () {
        EstructuraDatos();
        var indice = this.dataset.fila;
        var propiedades = Object.keys(PropiedadesModal);
        $.each(propiedades, function (index, value) {
            var dato = IssNull(datos[indice].Persona[value]);
            var input = $("#modalModificar").find(".content").find('#txt' + value)[0];
            input.value = dato;
        });
    });
    $("#btnNuevo").click(function () {
        ObtenerDatos('Nuevo', DatosPrincipales);
        console.log(DatosPrincipales);
    });
    $("#btnModificar").click(function () {
        ObtenerDatos('Modificar', DatosPrincipales);
        console.log(DatosPrincipales);
    });
    $("#btnEliminar").click(function () {
    });
    $("#btnActualizar").click(function () {
        llenarTable('llenartabla');
    });
});