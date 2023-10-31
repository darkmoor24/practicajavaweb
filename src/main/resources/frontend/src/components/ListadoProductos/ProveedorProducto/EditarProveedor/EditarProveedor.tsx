import { IPropsAddUpdateProveedorProducto } from "@/types";
import React from "react";
import FormularioAddUpdProveedorProducto from "../FormularioAddUpdProveedorProducto/FormularioAddUpdProveedorProducto";

const EditarProveedor = ({ onClose, updateProveedoresList, proveedor, swalRef }: IPropsAddUpdateProveedorProducto) => {
	return <FormularioAddUpdProveedorProducto updateProveedoresList={updateProveedoresList} proveedor={proveedor} swalRef={swalRef} onClose={onClose} />;
};

export default EditarProveedor;
