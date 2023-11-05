package com.practicaweb.apirest.repositories.producto;

import com.practicaweb.apirest.model.producto.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@EnableJpaRepositories
@Repository
public interface IProductoRepository extends JpaRepository<Producto, Integer> {

    @Transactional
    @Modifying
    @Query(value = "{ CALL spAddProducto(:nombre, :clave, :costo, :idTipoProducto)}", nativeQuery = true)
    Integer addProducto(String nombre, String clave, double costo, int idTipoProducto);

    @Query(value = "{ CALL spGetProductos(:idTipoProducto, :clave) }", nativeQuery = true)
    ArrayList<Producto> getProductos(int idTipoProducto, String clave);

    @Query(value = "{ CALL spGetProductoByClave(:clave) }", nativeQuery = true)
    Producto getProductoByClave(String clave);

    @Transactional
    @Modifying
    @Query(value = "{ CALL spUpdateProducto(:nombre, :clave, :costo, :estatus, :idTipoProducto, :idProducto) }", nativeQuery = true)
    void updateProducto(String nombre, String clave, Double costo, int estatus, int idTipoProducto, int idProducto);

    @Transactional
    @Modifying
    @Query(value = "{ CALL spDeleteProductoById(:idProducto) }", nativeQuery = true)
    void deleteProductoById(int idProducto);
}
