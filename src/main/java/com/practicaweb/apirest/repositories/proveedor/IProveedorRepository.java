package com.practicaweb.apirest.repositories.proveedor;


import com.practicaweb.apirest.model.proveedor.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@EnableJpaRepositories
@Repository
public interface IProveedorRepository extends JpaRepository<Proveedor, Integer> {

    @Query(value = "{ CALL spObtenerProveedores() }", nativeQuery = true)
    ArrayList<Proveedor> getProveedores();
}
