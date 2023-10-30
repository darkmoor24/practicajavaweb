package com.practicaweb.apirest.service.producto;

import com.practicaweb.apirest.model.producto.Producto;
import com.practicaweb.apirest.repositories.producto.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServiceProducto {
    @Autowired
    private IProductoRepository iProductoRepository;

    public void addProducto(String nombre, String clave, double costo, int idTipoProducto) {
        try {
            iProductoRepository.addProducto(nombre, clave, costo, idTipoProducto);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }

    public ArrayList<Producto> getProductos(int idTipoProducto, String clave) {
        return iProductoRepository.getProductos(idTipoProducto, clave);
    }

    public void deleteProductoById(int idProducto) {
        try {
            iProductoRepository.deleteProductoById(idProducto);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }
}
