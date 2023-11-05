package com.practicaweb.apirest.model.proveedor;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "proveedor")
public class Proveedor {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proveedor", nullable = false)
    private Integer idProveedor;

    @Basic
    @Column(name = "nombre", length = 90)
    private String nombre;

    @Basic
    @Column(name = "descripcion", length = 90)
    private String descripcion;
}
