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
    
    public partial class tbFasesReclutamiento
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbFasesReclutamiento()
        {
            this.tbFaseSeleccion = new HashSet<tbFaseSeleccion>();
        }
    
        public int fare_Id { get; set; }
        public string fare_Descripcion { get; set; }
        public Nullable<bool> fare_Estado { get; set; }
        public int fare_UsuarioCrea { get; set; }
        public System.DateTime fare_FechaCrea { get; set; }
        public Nullable<int> fare_UsuarioModifica { get; set; }
        public Nullable<System.DateTime> fare_FechaModifica { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbFaseSeleccion> tbFaseSeleccion { get; set; }
    }
}
