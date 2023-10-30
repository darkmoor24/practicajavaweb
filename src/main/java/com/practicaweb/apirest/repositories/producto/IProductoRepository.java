package com.practicaweb.apirest.repositories.producto;

import com.practicaweb.apirest.model.producto.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
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
    void addProducto(String nombre, String clave, double costo, int idTipoProducto);

    @Query(value = "{ CALL spObtenerProductos(:idTipoProducto, :clave) }", nativeQuery = true)
    ArrayList<Producto> getProductos(int idTipoProducto, String clave);


    @Transactional
    @Modifying
    @Query(value = "{ CALL spEliminarProducto(:idProducto) }", nativeQuery = true)
    void deleteProductoById(int idProducto);
}
