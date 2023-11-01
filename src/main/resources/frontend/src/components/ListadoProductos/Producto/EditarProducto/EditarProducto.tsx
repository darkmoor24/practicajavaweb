import { IPropsAddUpdateProducto } from "@/types";
import React, { useEffect, useState } from "react";
import FormularioAddUpdProducto from "../FormularioAddUpdProducto/FormularioAddUpdProducto";

const EditarProducto = ({ formValues, setFormValues, tiposProducto, callback: guardarProducto }: IPropsAddUpdateProducto) => {

    const [proveedores, setProveedores] = useState(formValues.proveedoresProducto);

    return <FormularioAddUpdProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto} proveedores={proveedores} />
};

export default EditarProducto;
