import { IPropsAddUpdateProveedorProducto } from "@/@types";
import React from "react";
import FormularioAddUpdProveedorProducto from "../FormularioAddUpdProveedorProducto/FormularioAddUpdProveedorProducto";

const AgregarProveedor = ({ onClose, updateProveedoresList, proveedor, swalRef }: IPropsAddUpdateProveedorProducto) => {
	return <FormularioAddUpdProveedorProducto updateProveedoresList={updateProveedoresList} proveedor={proveedor} swalRef={swalRef} onClose={onClose} />;
};

export default AgregarProveedor;
