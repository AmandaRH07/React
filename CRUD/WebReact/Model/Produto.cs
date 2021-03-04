using System;

namespace WebReact {

    [Table("Produto")]
    public class Produto {

        [Column("Id")]
        public int Id { get; set; }

        [Column("Descricao")]
        public string Descricao { get; set; }
    }
}