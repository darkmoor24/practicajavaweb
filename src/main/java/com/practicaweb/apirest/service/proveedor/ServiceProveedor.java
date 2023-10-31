package com.practicaweb.apirest.service.proveedor;

import com.practicaweb.apirest.model.proveedor.Proveedor;
import com.practicaweb.apirest.repositories.proveedor.IProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServiceProveedor {

    @Autowired
    private IProveedorRepository iProveedorRepository;

    public ArrayList<Proveedor> getProveedores() {
        return iProveedorRepository.getProveedores();
    }
}
