package com.practicaweb.apirest.repositories.tipoproducto;

import com.practicaweb.apirest.model.tipoproducto.TipoProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@EnableJpaRepositories
@Repository
public interface ITipoProductoRepository extends JpaRepository<TipoProducto, Integer> {

    @Query(value = "{ CALL spObtenerTiposProductos() }", nativeQuery = true)
    ArrayList<TipoProducto> getTiposProductos();
}
