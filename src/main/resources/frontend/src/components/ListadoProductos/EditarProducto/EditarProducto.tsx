import { IPropsAddUpdateProducto } from "@/types";
import React, { useEffect, useState } from "react";
import FormularioAddUpdProducto from "../FormularioAddUpdProducto/FormularioAddUpdProducto";

const EditarProducto = ({ formValues, setFormValues, tiposProducto }: IPropsAddUpdateProducto) => {

    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        console.log("editar producto: ", formValues);
    }, []);

    return <FormularioAddUpdProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto} proveedores={proveedores} />
};

export default EditarProducto;
