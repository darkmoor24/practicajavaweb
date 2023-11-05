package com.practicaweb.apirest.controller.producto;

import com.practicaweb.apirest.model.producto.Producto;
import com.practicaweb.apirest.model.proveedorproducto.ProveedorProducto;
import com.practicaweb.apirest.service.producto.ServiceProducto;
import com.practicaweb.apirest.service.proveedorproducto.ServiceProveedorProducto;
import com.practicaweb.apirest.utils.Config;
import com.practicaweb.apirest.utils.CreateJSONResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(Config.EndpointPaths.API_PRODUCTO)
public class ControllerProducto {

    @Autowired
    private ServiceProducto serviceProducto;
    @Autowired
    private ServiceProveedorProducto serviceProveedorProducto;

    @PostMapping(Config.EndpointResourcesPaths.Producto.ADD_PRODUCTO)
    public ResponseEntity<Map<String, Object>> addProducto(@RequestBody Producto producto) {
        try {
            serviceProducto.addProducto(producto.getNombre(), producto.getClave(), producto.getCosto(), producto.getIdTipoProducto());

            ArrayList<ProveedorProducto> proveedoresProducto = producto.getProveedoresProducto();

            if (!proveedoresProducto.isEmpty()) {
                proveedoresProducto.forEach(proveedorProducto -> serviceProveedorProducto.addProveedorProducto(proveedorProducto.getClaveProveedor(), proveedorProducto.getCostoProveedor(), proveedorProducto.getIdProveedor(), serviceProducto.getProductoByClave(producto.getClave()).getIdProducto()));
            }

            return ResponseEntity.ok(CreateJSONResponse.createOkResponse("Producto agregado", true));
        } catch (Exception ex) {
            ex.printStackTrace();

            if (ex.getMessage().contains("Duplicate entry") && ex.getMessage().contains("producto.clave")) {
                return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Ya existe un producto con esta clave, intenta otra", "duplicate_entry"));
            }

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al agregar el producto", ex.getMessage()));
        }
    }

    @GetMapping(Config.EndpointResourcesPaths.Producto.GET_PRODUCTOS)
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

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al consultar los productos", ex.getMessage()));
        }
    }

    @PutMapping(Config.EndpointResourcesPaths.Producto.UPDATE_PRODUCTO)
    public ResponseEntity<Map<String, Object>> updateProducto(@RequestBody Producto producto) {
        try {
            serviceProducto.updateProducto(producto.getNombre(), producto.getClave(), producto.getCosto(), producto.getEstatus(), producto.getIdTipoProducto(), producto.getIdProducto());

            ArrayList<ProveedorProducto> proveedoresProductoExistentes = serviceProveedorProducto.getProveedoresProducto(producto.getIdProducto());
            ArrayList<ProveedorProducto> nuevosProveedoresProducto = producto.getProveedoresProducto();

            ArrayList<ProveedorProducto> proveedoresProductoNuevos = getProveedoresProductoNuevos(nuevosProveedoresProducto);
            ArrayList<ProveedorProducto> proveedoresProductoModificados = getProveedoresProductoModificados(nuevosProveedoresProducto);
            ArrayList<Integer> proveedoresProductoEliminados = getProveedoresProductoEliminados(proveedoresProductoExistentes, nuevosProveedoresProducto);

            proveedoresProductoNuevos.forEach(proveedorProducto -> serviceProveedorProducto.addProveedorProducto(proveedorProducto.getClaveProveedor(), proveedorProducto.getCostoProveedor(), proveedorProducto.getIdProveedor(), producto.getIdProducto()));
            proveedoresProductoModificados.forEach(proveedorProducto -> serviceProveedorProducto.updateProveedorProducto(proveedorProducto.getClaveProveedor(), proveedorProducto.getCostoProveedor(), proveedorProducto.getIdProveedor(), proveedorProducto.getIdProveedorProducto()));
            proveedoresProductoEliminados.forEach(idProveedorProducto -> serviceProveedorProducto.deleteProveedorProductoById(idProveedorProducto));

            return ResponseEntity.ok(CreateJSONResponse.createOkResponse("Producto actualizado", true));
        } catch (Exception ex) {
            ex.printStackTrace();

            if (ex.getMessage().contains("Duplicate entry") && ex.getMessage().contains("producto.clave")) {
                return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Ya existe un producto con esta clave, intenta otra", "duplicate_entry"));
            }

            return ResponseEntity.ok(CreateJSONResponse.createErrorResponse("Algo sucedió al actualizar el producto", ex.getMessage()));
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


    private static ArrayList<ProveedorProducto> getProveedoresProductoNuevos (ArrayList<ProveedorProducto> nuevosProveedoresProducto) {
        ArrayList<ProveedorProducto> proveedoresProductoNuevos = new ArrayList<>();

        for (ProveedorProducto nuevoProveedor : nuevosProveedoresProducto) {
            if (nuevoProveedor.getIdProveedorProducto() == 0) proveedoresProductoNuevos.add(nuevoProveedor);
        }

        return proveedoresProductoNuevos;
    }

    private static ArrayList<ProveedorProducto> getProveedoresProductoModificados (ArrayList<ProveedorProducto> nuevosProveedoresProducto) {
        ArrayList<ProveedorProducto> proveedoresProductoModificados= new ArrayList<>();

        for (ProveedorProducto nuevoProveedor : nuevosProveedoresProducto) {
            if (nuevoProveedor.getIdProveedorProducto() != 0) proveedoresProductoModificados.add(nuevoProveedor);
        }

        return proveedoresProductoModificados;
    }

    private static ArrayList<Integer> getProveedoresProductoEliminados (ArrayList<ProveedorProducto> proveedoresProductoExistentes, ArrayList<ProveedorProducto> nuevosProveedoresProducto) {
        ArrayList<Integer> proveedoresProductoEliminados = new ArrayList<>();

        for (ProveedorProducto existente : proveedoresProductoExistentes) {
            boolean encontrado = false;
            for (ProveedorProducto nuevoProveedor : nuevosProveedoresProducto) {
                if (Objects.equals(nuevoProveedor.getIdProveedorProducto(), existente.getIdProveedorProducto())) {
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                proveedoresProductoEliminados.add(existente.getIdProveedorProducto());
            }
        }

        return proveedoresProductoEliminados;
    }
}