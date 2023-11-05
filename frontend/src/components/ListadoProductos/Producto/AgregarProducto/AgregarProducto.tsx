
import { IPropsAddUpdateProducto } from "@/@types";
import React from "react";
import FormularioAddUpdProducto from "../FormularioAddUpdProducto/FormularioAddUpdProducto";

const AgregarProducto = ({ formValues, setFormValues, tiposProducto }: IPropsAddUpdateProducto) => {

    return <FormularioAddUpdProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto} proveedores={[]} />
};

export default AgregarProducto;
