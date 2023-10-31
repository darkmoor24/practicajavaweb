package com.practicaweb.apirest.controller.proveedorproducto;

import com.practicaweb.apirest.service.proveedorproducto.ServiceProveedorProducto;
import com.practicaweb.apirest.utils.Config;
import com.practicaweb.apirest.utils.CreateJSONResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(Config.EndpointPaths.API_PROVEEDOR_PRODUCTO)
public class ControllerProveedorProducto {

    @Autowired
    private ServiceProveedorProducto serviceProveedorProducto;

    @GetMapping(Config.EndpointResourcesPaths.ProveedorProducto.GET_PROVEEDORES_PRODUCTO)
    public ResponseEntity<Map<String, Object>> getProveedoresProducto(@PathVariable int idProducto) {
        try {
            return ResponseEntity.ok(CreateJSONResponse.createOkResponse("Proveedores encontrados", serviceProveedorProducto.getProveedoresProducto(idProducto)));
        } catch (Exception ex) {
            ex.printStackTrace();

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al obtener los proveedores del producto con ID: " + idProducto, ex.getMessage()));
        }
    }

}
