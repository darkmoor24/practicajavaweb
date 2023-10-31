package com.practicaweb.apirest.controller.proveedor;

import com.practicaweb.apirest.model.proveedor.Proveedor;
import com.practicaweb.apirest.service.proveedor.ServiceProveedor;
import com.practicaweb.apirest.utils.Config;
import com.practicaweb.apirest.utils.CreateJSONResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(Config.EndpointPaths.API_PROVEEDOR)
public class ControllerProveedor {

    @Autowired
    private ServiceProveedor serviceProveedor;

    @GetMapping(Config.EndpointResourcesPaths.Proveedor.GET_PROVEEDORES)
    public ResponseEntity<Map<String, Object>> getProveedores() {

        try {

            ArrayList<Proveedor> productos = serviceProveedor.getProveedores();

            String message = "Proveedores obtenidos";

            if (productos.isEmpty()) {
                message = "No hay proveedores registrados";
            }

            return ResponseEntity.ok(CreateJSONResponse.createOkResponse(message, productos));
        } catch (Exception ex) {
            ex.printStackTrace();

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al consultar los proveedores", ex.getMessage()));
        }
    }
}
