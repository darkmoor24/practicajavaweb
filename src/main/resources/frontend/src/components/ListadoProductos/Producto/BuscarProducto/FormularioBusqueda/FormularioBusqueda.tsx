"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Button, Col, Container, Row, Form, FloatingLabel } from "react-bootstrap";
import { getTiposProducto } from "@/utils/httpRequests/httpRequestsTipoProducto/httpRequestsTipoProducto";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPropsFormularioBusqueda } from "@/types";
import { getProductos } from "@/utils/httpRequests/httpRequestsProducto/httpRequestsProducto";
import { NotificationManager } from "react-notifications";
import { NotificacionSweetAlert } from "@/utils/SweetAlerts/SweetAlert";

const FormularioBusqueda = ({ criteriosBusqueda, setCriteriosBusqueda, setProductos, setShowTable }: IPropsFormularioBusqueda) => {
	const [tiposProducto, setTiposProducto] = useState([]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let { idTipoProducto, clave } = criteriosBusqueda;

		if (idTipoProducto === 0) {
			return NotificationManager.error("Elige un Tipo de Producto");
		}

		try {
			let { data: productos, message } = await getProductos(idTipoProducto, clave);

			if (productos.length < 1) {
				return NotificationManager.error(message);
			}

			NotificacionSweetAlert("success", `${productos.length} Productos encontrados`);

			setProductos(productos);

			setShowTable(true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleTipoProductoSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;

		setCriteriosBusqueda({
			...criteriosBusqueda,
			[name]: parseInt(value),
		});
	};

	const handleClaveProducto = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setCriteriosBusqueda({
			...criteriosBusqueda,
			[name]: value === "" ? "null" : value,
		});
	};

	useMemo(() => {
		const consultarTiposProducto = async () => {
			try {
				if (tiposProducto.length === 0) {
					const { data: tiposProducto } = await getTiposProducto();

					setTiposProducto(tiposProducto);
				}
			} catch (error) {
				console.log("Error al consultar los tipos de producto: ", error);
			}
		};

		return consultarTiposProducto();
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			<Container fluid>
				<Row>
					<Col xs={5}>
						<FloatingLabel controlId="idTipoProducto" label="Tipo de Producto">
							<Form.Select name="idTipoProducto" aria-label="Tipo de Producto" onChange={handleTipoProductoSelection}>
								<option value="">-- Elige una opción --</option>

								{tiposProducto.map((tipoProducto: any, idx: number) => (
									<option key={idx} value={tipoProducto.idTipoProducto}>
										{tipoProducto.nombre}
									</option>
								))}
							</Form.Select>
						</FloatingLabel>
					</Col>

					<Col xs={5}>
						<FloatingLabel controlId="clave" label="Clave de Producto">
							<Form.Control name="clave" type="text" placeholder="Clave de Producto" onChange={handleClaveProducto} />
						</FloatingLabel>
					</Col>

					<Col align="right" xs={2}>
						<div className="d-grid gap-2 h-100">
							<Button variant="primary" type="submit" size="lg">
								Buscar <FontAwesomeIcon icon={faSearch} />
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</Form>
	);
};

export default FormularioBusqueda;
