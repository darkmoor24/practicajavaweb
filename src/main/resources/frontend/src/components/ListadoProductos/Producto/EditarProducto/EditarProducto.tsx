import { IPropsAddUpdateProducto } from "@/types";
import React, { useEffect, useState } from "react";
import FormularioAddUpdProducto from "../FormularioAddUpdProducto/FormularioAddUpdProducto";

const EditarProducto = ({ formValues, setFormValues, tiposProducto, callback: guardarProducto }: IPropsAddUpdateProducto) => {

    const [proveedores, setProveedores] = useState(formValues.proveedores);

    useEffect(() => {
        console.log("Proveedores modificados: ", proveedores);
        //* Si se agrega uno, le ponemos new
        //! Si se elimina uno, le ponemos delete


    }, [proveedores]);

    return <FormularioAddUpdProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto} proveedores={proveedores} />
};

export default EditarProducto;
