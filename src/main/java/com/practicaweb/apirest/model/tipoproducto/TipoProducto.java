package com.practicaweb.apirest.model.tipoproducto;

import com.practicaweb.apirest.model.producto.Producto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "tipo_producto")
public class TipoProducto {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_tipo_producto", nullable = false)
    private Integer idTipoProducto;

    @Basic
    @Column(name = "nombre", length = 90)
    private String nombre;

    @Basic
    @Column(name = "descripcion", length = 90)
    private String descripcion;

//    @OneToMany(mappedBy = "tipoProductoByIdTipoProducto")
//    private ArrayList<Producto> productosByIdTipoProducto;
}
