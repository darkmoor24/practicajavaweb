package com.practicaweb.apirest.repositories.producto;

import com.practicaweb.apirest.model.producto.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;

@EnableJpaRepositories
@Repository
public interface IProductoRepository extends JpaRepository<Producto, Integer> {

    @Transactional
    @Modifying
    @Query(value = "{ CALL spAgregarProducto(:nombre, :clave, :costo, :idTipoProducto)}", nativeQuery = true)
    Integer addProducto(String nombre, String clave, double costo, int idTipoProducto);
    //@Procedure(name = "spAgregarProducto", outputParameterName = "@idProducto")
    //Integer addProducto(@Param("nombre") String nombre, @Param("clave") String clave, @Param("costo") double costo, @Param("idTipoProducto") int idTipoProducto);

    @Query(value = "{ CALL spObtenerProductos(:idTipoProducto, :clave) }", nativeQuery = true)
    ArrayList<Producto> getProductos(int idTipoProducto, String clave);

    @Query(value = "{ CALL spObtenerProductoByClave(:clave) }", nativeQuery = true)
    Producto getProductoByClave(String clave);

    @Transactional
    @Modifying
    @Query(value = "{ CALL spActualizarProducto(:nombre, :clave, :costo, :estatus, :idTipoProducto, :idProducto) }", nativeQuery = true)
    void updateProducto(String nombre, String clave, Double costo, int estatus, int idTipoProducto, int idProducto);

    @Transactional
    @Modifying
    @Query(value = "{ CALL spEliminarProducto(:idProducto) }", nativeQuery = true)
    void deleteProductoById(int idProducto);
}
