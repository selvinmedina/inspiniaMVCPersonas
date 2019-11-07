using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using inspineaMVC.Models;

namespace inspineaMVC.Controllers
{
    public class FaseSeleccionController : Controller
    {
        private RecursosHumanosEntities db = null;
        // GET: FaseSeleccion
        public ActionResult Index()
        {
            tbFaseSeleccion tablaPrincipal = new tbFaseSeleccion();
            return View(tablaPrincipal);
        }
        public ActionResult llenartabla()
        {
            db = new RecursosHumanosEntities();
            List<Prueba> vista = db.Prueba.ToList();
            return Json(vista, JsonRequestBehavior.AllowGet);
        }
        public ActionResult fare_Descripcion()
        {
            db = new RecursosHumanosEntities();
            var ddl = db.FasesReclutamiento();
            return Json(ddl, JsonRequestBehavior.AllowGet);
        }
    }
}