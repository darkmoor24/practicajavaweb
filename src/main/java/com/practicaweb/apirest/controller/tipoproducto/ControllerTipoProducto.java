package com.practicaweb.apirest.controller.tipoproducto;


import com.practicaweb.apirest.model.tipoproducto.TipoProducto;
import com.practicaweb.apirest.service.tipoproducto.ServiceTipoProducto;
import com.practicaweb.apirest.utils.Config;
import com.practicaweb.apirest.utils.CreateJSONResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(Config.EndpointPaths.API_TIPO_PRODUCTO)
public class ControllerTipoProducto  {

    @Autowired
    private ServiceTipoProducto serviceTipoProducto;

    @GetMapping(Config.EndpointResourcesPaths.TipoProducto.GET_TIPOS_PRODUCTO)
    public ResponseEntity<Map<String, Object>> getTiposProductos() {
        try {
            ArrayList<TipoProducto> tiposProductos = serviceTipoProducto.getTiposProductos();

            return ResponseEntity.ok(CreateJSONResponse.createOkResponse("Tipos de producto obtenidos con éxito", tiposProductos));
        } catch (Exception ex) {
            System.out.println("Algo sucedió al obtener los tipos de producto: " + Arrays.toString(ex.getStackTrace()));

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al consultar los tipos de producto", ex.getMessage()));
        }
    }
}
