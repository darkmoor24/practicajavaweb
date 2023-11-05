package com.practicaweb.apirest.model.producto;

import com.practicaweb.apirest.model.proveedorproducto.ProveedorProducto;
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
@Table(name = "producto")
public class Producto {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_producto", nullable = false)
    private Integer idProducto;

    @Basic
    @Column(name = "nombre", length = 90)
    private String nombre;

    @Basic
    @Column(name = "clave", length = 30)
    private String clave;

    @Basic
    @Column(name = "costo")
    private Double costo;

    @Basic
    @Column(name = "estatus", nullable = false)
    private Integer estatus;

    @Basic
    @Column(name = "id_tipo_producto", nullable = false)
    private Integer idTipoProducto;

    @Transient
    private ArrayList<ProveedorProducto> proveedoresProducto;
}
