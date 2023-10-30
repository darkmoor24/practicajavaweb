package com.practicaweb.apirest.controller.producto;

import com.practicaweb.apirest.model.producto.Producto;
import com.practicaweb.apirest.service.producto.ServiceProducto;
import com.practicaweb.apirest.utils.Config;
import com.practicaweb.apirest.utils.CreateJSONResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(Config.EndpointPaths.API_PRODUCTO)
public class ControllerProducto {

    @Autowired
    private ServiceProducto serviceProducto;

    @PostMapping(Config.EndpointResourcesPaths.Producto.ADD_PRODUCTO)
    public ResponseEntity<Map<String, Object>> addProducto(@RequestBody Producto producto) {
        try {
            serviceProducto.addProducto(producto.getNombre(), producto.getClave(), producto.getCosto(), producto.getIdTipoProducto());

            return ResponseEntity.ok(CreateJSONResponse.createOkResponse("Producto agregado", true));
        } catch (Exception ex) {
            ex.printStackTrace();

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al agregar el producto", ex.getMessage()));
        }
    }

    /**
     * POST utilizado para método GET para proteger data ingresada
     * */
    @PostMapping(Config.EndpointResourcesPaths.Producto.GET_PRODUCTOS)
    public ResponseEntity<Map<String, Object>> getProductos(@PathVariable int idTipoProducto, @PathVariable(required = false) String clave) {

        byte[] decodedBytes = Base64.getDecoder().decode(clave);

        String decodedClave = new String(decodedBytes);

        try {

            if (decodedClave.equals("null")) {
                decodedClave = "";
            }

            ArrayList<Producto> productos = serviceProducto.getProductos(idTipoProducto, decodedClave);

            String message = "Productos obtenidos";

            if (productos.isEmpty()) {
                message = "No hay productos registrados";
            }

            return ResponseEntity.ok(CreateJSONResponse.createOkResponse(message, productos));
        } catch (Exception ex) {
            ex.printStackTrace();

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al consultar los tipos de producto", ex.getMessage()));
        }
    }


    @DeleteMapping(Config.EndpointResourcesPaths.Producto.DELETE_PRODUCTO)
    public ResponseEntity<Map<String, Object>> deleteProductoById(@PathVariable int idProducto) {
        try {
            serviceProducto.deleteProductoById(idProducto);

            return ResponseEntity.ok(CreateJSONResponse.createOkResponse("Producto y sus proveedores eliminados", true));
        } catch (Exception ex) {
            ex.printStackTrace();

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al eliminar el producto", ex.getMessage()));
        }
    }
}