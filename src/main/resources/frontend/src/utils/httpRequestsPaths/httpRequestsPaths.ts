const httpRequestsPaths = {
	producto: {
		getProductos: "get-productos",
		deleteProducto: "delete-producto",
        addProducto: 'add-producto',
        updateProducto: 'update-producto'
	},
	proveedor: {
        getProveedores: 'get-proveedores'
    },
	proveedorProducto: {
		getProveedoresProducto: "get-proveedores-producto"
	},
	tipoProducto: {
		getTiposProducto: "get-tipos-producto",
	},
};

export default httpRequestsPaths;
