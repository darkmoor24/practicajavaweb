package com.practicaweb.apirest.service.tipoproducto;

import com.practicaweb.apirest.model.tipoproducto.TipoProducto;
import com.practicaweb.apirest.repositories.tipoproducto.ITipoProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServiceTipoProducto {

    @Autowired
    private ITipoProductoRepository iTipoProductoRepository;

    public ArrayList<TipoProducto> getTiposProductos () {
        return iTipoProductoRepository.getTiposProductos();
    }
}