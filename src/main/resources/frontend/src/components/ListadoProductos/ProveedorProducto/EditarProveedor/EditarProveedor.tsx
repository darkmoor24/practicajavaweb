import { IPropsAddUpdateProveedorProducto } from "@/types";
import React from "react";
import FormularioAddUpdProveedorProducto from "../FormularioAddUpdProveedorProducto/FormularioAddUpdProveedorProducto";

const EditarProveedor = ({ updateProveedoresList, proveedor, swalRef }: IPropsAddUpdateProveedorProducto) => {
	return <FormularioAddUpdProveedorProducto updateProveedoresList={updateProveedoresList} proveedor={proveedor} swalRef={swalRef} />;
};

export default EditarProveedor;
