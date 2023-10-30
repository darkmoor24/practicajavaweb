"use client";
import { IPropsEliminarProducto } from "@/types";
import { NotificacionSweetAlert } from "@/utils/SweetAlerts/SweetAlert";
import { deleteProducto } from "@/utils/httpRequests/httpRequestsProducto/httpRequestsProducto";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const EliminarProducto = ({ producto, setProductoEliminado }: IPropsEliminarProducto) => {
	const handleDeleteEmpleado = async () => {
		try {
			await deleteProducto(producto?.idProducto);

			setProductoEliminado(true);

			NotificacionSweetAlert("success", "El producto se eliminó con éxito");
		} catch (error: any) {
			console.log("Error al eliminar al empleado seleccionado: ", error);

			NotificacionSweetAlert("error", "No se pudo eliminar el producto.");
		}
	};

	const cancelarDeleteEmpleado = () => {
		NotificacionSweetAlert("info", "No se desactivó el empleado seleccionado");
	};

	return (
		<Container fluid className="text-center">
			<h3>¿Estás seguro de eliminar este producto?</h3>
            <p>Se eliminarán el producto y todos los proveedores asociados</p>

			<Row className="pt-3">
				<Col>
					<Button variant="success" onClick={handleDeleteEmpleado}>
						Sí, desactivar
					</Button>
				</Col>

				<Col>
					<Button variant="danger" onClick={cancelarDeleteEmpleado}>
						No, cancelar
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default EliminarProducto;
