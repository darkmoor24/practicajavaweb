package com.practicaweb.apirest.repositories.proveedorpproducto;

import com.practicaweb.apirest.model.proveedorproducto.ProveedorProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@EnableJpaRepositories
@Repository
public interface IProveedorProductoRepository extends JpaRepository<ProveedorProducto, Integer> {

    @Transactional
    @Modifying
    @Query(value = "{ CALL spAddNuevoProveedorProducto(:claveProveedor, :costoProveedor, :idProveedor, :idProducto) }", nativeQuery = true)
    void addProveedorProducto(String claveProveedor, Double costoProveedor, int idProveedor, int idProducto);

    @Query(value = "{ CALL spGetProveedoresProducto(:idProducto) }", nativeQuery = true)
    ArrayList<ProveedorProducto> getProveedoresProducto(int idProducto);

    @Transactional
    @Modifying
    @Query(value = "{ CALL spUpdateProveedorProducto(:claveProveedor, :costoProveedor, :idProveedor, :idProveedorProducto) }", nativeQuery = true)
    void updateProveedorProducto(String claveProveedor, Double costoProveedor, int idProveedor, int idProveedorProducto);


    @Transactional
    @Modifying
    @Query(value = "{ CALL spDeleteProveedorProducto(:idProveedorProducto) }", nativeQuery = true)
    void deleteProveedorProductoById(int idProveedorProducto);
}
