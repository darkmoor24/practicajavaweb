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

    public Integer addProducto(String nombre, String clave, double costo, int idTipoProducto) {
        try {
            //return iProductoRepository.addProducto(nombre, clave, costo, idTipoProducto, idProducto);
            return iProductoRepository.addProducto(nombre, clave, costo, idTipoProducto);
        } catch (Exception ex) {
            ex.printStackTrace();

            return 0;
        }
    }

    public ArrayList<Producto> getProductos(int idTipoProducto, String clave) {
        return iProductoRepository.getProductos(idTipoProducto, clave);
    }

    public Producto getProductoByClave(String clave) {
        return iProductoRepository.getProductoByClave(clave);
    }

    public void updateProducto(String nombre, String clave, Double costo, int estatus, int idTipoProducto, int idProducto) {
        try {
            iProductoRepository.updateProducto(nombre, clave, costo, estatus, idTipoProducto, idProducto);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public void deleteProductoById(int idProducto) {
        try {
            iProductoRepository.deleteProductoById(idProducto);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}