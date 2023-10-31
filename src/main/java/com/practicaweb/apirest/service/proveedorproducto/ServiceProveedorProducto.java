package com.practicaweb.apirest.service.proveedorproducto;

import com.practicaweb.apirest.model.proveedorproducto.ProveedorProducto;
import com.practicaweb.apirest.repositories.proveedorpproducto.IProveedorProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServiceProveedorProducto {
    @Autowired
    private IProveedorProductoRepository iProveedorProductoRepository;

    public void addProveedorProducto(String claveProveedor, Double costoProveedor, int idProveedor, int idProducto) {
        try {
            iProveedorProductoRepository.addProveedorProducto(claveProveedor, costoProveedor, idProveedor, idProducto);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public ArrayList<ProveedorProducto> getProveedoresProducto(int idProducto) {
        ArrayList<ProveedorProducto> proveedoresProducto = new ArrayList<>();

        try {
            proveedoresProducto = iProveedorProductoRepository.getProveedoresProducto(idProducto);

            return proveedoresProducto;
        } catch (Exception ex) {
            ex.printStackTrace();

            return proveedoresProducto;
        }
    }

    public void updateProveedorProducto(String claveProveedor, Double costoProveedor, int idProveedor, int idProveedorProducto) {
        try {
            iProveedorProductoRepository.updateProveedorProducto(claveProveedor, costoProveedor, idProveedor, idProveedorProducto);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
