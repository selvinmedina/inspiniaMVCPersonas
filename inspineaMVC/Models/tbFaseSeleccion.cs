//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace inspineaMVC.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbFaseSeleccion
    {
        public int fsel_Id { get; set; }
        public int fare_Id { get; set; }
        public System.DateTime fare_fecha { get; set; }
        public int fsel_UsuarioCrea { get; set; }
        public System.DateTime fsel_FechaCrea { get; set; }
        public Nullable<int> fsel_UsuarioModifica { get; set; }
        public Nullable<System.DateTime> fsel_FechaModifica { get; set; }
    
        public virtual tbFasesReclutamiento tbFasesReclutamiento { get; set; }
    }
}