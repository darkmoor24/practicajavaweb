"use client";
import {IPropsEliminarProveedor } from "@/types";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NotificationManager } from "react-notifications";

const EliminarProveedor = ({ eliminarProveedor, swalRef }: IPropsEliminarProveedor) => {
	const handleDeleteProveedor = async () => {
		try {
			eliminarProveedor();
			
			swalRef.close();

            NotificationManager.success("Proveedor eliminado de la lista a guardar");
		} catch (error: any) {
			console.log("Error al eliminar al empleado seleccionado: ", error);

			NotificationManager.error("No se pudo eliminar el proveedor de la lista a guardar");
		}
	};

	const cancelarDeleteProveedor = () => {
		NotificationManager.info("Acción cancelada");

		swalRef.close();
	};

	return (
		<Container fluid className="text-center">
			<h3>¿Estás seguro de eliminar este proveedor?</h3>
            <p>Estos cambios no se verán reflejados hasta que hagas clic en Guardar</p>

			<Row className="pt-3">
				<Col>
					<Button variant="success" onClick={handleDeleteProveedor}>
						Sí, eliminar de la lista
					</Button>
				</Col>

				<Col>
					<Button variant="danger" onClick={cancelarDeleteProveedor}>
						No, cancelar
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default EliminarProveedor;
