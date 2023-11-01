package com.practicaweb.apirest.service.producto;

import com.practicaweb.apirest.model.producto.Producto;
import com.practicaweb.apirest.repositories.producto.IProductoRepository;
import com.practicaweb.apirest.utils.CreateJSONResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.hibernate5.HibernateJdbcException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServiceProducto {
    @Autowired
    private IProductoRepository iProductoRepository;

    /**
     *
     * @return ID de producto agregado
     * @return -1 : Excepción de clave duplicada
     * @return 0 : Excepción
     */
    public Integer addProducto(String nombre, String clave, double costo, int idTipoProducto) {
        try {
            return iProductoRepository.addProducto(nombre, clave, costo, idTipoProducto);
        } catch (HibernateJdbcException ex) {
            if (ex.getSQLException().getErrorCode() == 1062) {
                return -1;
            }

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
        } catch (HibernateJdbcException ex) {
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