package com.practicaweb.apirest.utils;

public class Config {
    private static final String API_URL = "/api/v1";

    public static class EndpointPaths {
        public static final String API_PRODUCTO = API_URL + "/producto";
        public static final String API_PROVEEDOR = API_URL + "/proveedor";

        public static final String API_PROVEEDOR_PRODUCTO = API_URL + "/proveedor-producto";

        public static final String API_TIPO_PRODUCTO = API_URL + "/tipo-producto";
    }

    public static class EndpointResourcesPaths {
        public static class Producto {
            public static final String ADD_PRODUCTO = "/add-producto";
            public static final String GET_PRODUCTOS = "/get-productos/{idTipoProducto}/{clave}";
            public static final String DELETE_PRODUCTO = "/delete-producto/{idProducto}";
        }

        public static class Proveedor {

        }

        public static class ProveedorProducto {

        }

        public static class TipoProducto {
            public static final String GET_TIPOS_PRODUCTO = "/get-tipos-producto";
        }
    }
}
