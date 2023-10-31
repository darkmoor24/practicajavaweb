package com.practicaweb.apirest.model.proveedorproducto;

import com.practicaweb.apirest.model.producto.Producto;
import com.practicaweb.apirest.model.proveedor.Proveedor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "viewobtenerproveedoresproducto")
public class ProveedorProducto {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proveedor_producto", nullable = false)
    private Integer idProveedorProducto;

    @Basic
    @Column(name = "nombre", length = 30)
    private String nombre;

    @Basic
    @Column(name = "clave_proveedor", length = 30)
    private String claveProveedor;

    @Basic
    @Column(name = "costo_proveedor")
    private Double costoProveedor;

    @Basic
    @Column(name = "id_proveedor", nullable = false)
    private Integer idProveedor;

    @Basic
    @Column(name = "id_producto", nullable = false)
    private Integer idProducto;

//    @ManyToOne
//    @JoinColumn(name = "id_proveedor", referencedColumnName = "id_proveedor", nullable = false)
//    private Proveedor proveedorByIdProveedor;

//    @ManyToOne
//    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto", nullable = false)
//    private Producto productoByIdProducto;
}
