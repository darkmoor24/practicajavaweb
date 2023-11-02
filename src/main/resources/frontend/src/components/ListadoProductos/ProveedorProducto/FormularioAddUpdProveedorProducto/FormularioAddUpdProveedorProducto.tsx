import { IPropsAddUpdateProveedorProducto, IProveedor, IProveedorProducto } from "@/@types";
import { NotificacionSweetAlert } from "@/utils/SweetAlerts/SweetAlert";
import { getProveedores } from "@/utils/httpRequests/httpRequestsProveedor/httpRequestsProveedor";
import { faSave, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import React, { useMemo, useState, useEffect } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const FormularioAddUpdProveedorProducto = ({ onClose, updateProveedoresList, proveedor: proveedorProducto }: IPropsAddUpdateProveedorProducto) => {
	const [formValues, setFormValues] = useState<IProveedorProducto>(proveedorProducto);

	const [proveedores, setProveedores] = useState<Array<IProveedor>>([]);

	const handleProveedorSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;

		const proveedor = proveedores.find((proveedor: IProveedor) => proveedor.idProveedor === parseInt(value));

		setFormValues({
			...formValues,
			[name]: parseInt(value),
			nombre: proveedor?.nombre === undefined ? "" : proveedor.nombre,
		});
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		let valueAux: string | number = value;

		const handleChange = (value: string | number) => {
			setFormValues({
				...formValues,
				[name]: value,
			});
		};

		if (name === "costoProveedor") {
			valueAux = Number(value.replace(/[^0-9.]/g, ""));
		}

		handleChange(valueAux);
	};

	useMemo(() => {
		const consultarProveedores = async () => {
			try {
				if (proveedores.length === 0) {
					const { data: proveedores } = await getProveedores();

					setProveedores(proveedores);
				}
			} catch (error) {
				console.log("Error al consultar los tipos de producto: ", error);
			}
		};

		return consultarProveedores();
	}, []);

	const handleUpdateProveedorProducto = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const { idProveedor, claveProveedor, costoProveedor } = formValues;

		if (idProveedor === 0 || costoProveedor === 0 || claveProveedor === "") {
			return NotificacionSweetAlert('warning', 'Llena todos los campos para continuar', 1500);
		}

		updateProveedoresList(formValues);
	};

	return (
		<Container fluid>

			<Row>
				<Col>
					<Typography variant="overline">
							{ formValues.idProveedor === 0 ? <>Agregar</> : <>Editar</> } Proveedor
					</Typography>

					<FloatingLabel controlId="idProveedor" label="Proveedor" className="mb-3">
						<Form.Select value={formValues.idProveedor} name="idProveedor" aria-label="Proveedores disponibles" onChange={handleProveedorSelection}>
							<option value="">-- Elige una opción --</option>

							{proveedores.map((proveedor: any, idx: number) => (
								<option key={idx} value={proveedor.idProveedor}>
									{proveedor.nombre}
								</option>
							))}
						</Form.Select>
					</FloatingLabel>

					<FloatingLabel controlId="claveProveedor" label="Clave de proveedor" className="mb-3">
						<Form.Control type="text" placeholder="Clave de proveedor" value={formValues.claveProveedor} name="claveProveedor" onChange={handleInputChange} />
					</FloatingLabel>

					<FloatingLabel controlId="costoProveedor" label="Costo de proveedor" className="mb-3">
						<Form.Control type="text" placeholder="Costo de proveedor" value={formValues.costoProveedor} name="costoProveedor" onChange={handleInputChange} />
					</FloatingLabel>

					<Container fluid className="px-0">
						<Row>
							<Col>
								<div className="d-grid gap-2">
									<Button variant="success" type="button" size="lg" onClick={handleUpdateProveedorProducto}>
										Guardar <FontAwesomeIcon icon={faSave} />
									</Button>
								</div>
							</Col>

							<Col>
								<div className="d-grid gap-2">
									<Button variant="danger" type="button" size="lg" onClick={() => onClose()}>
										Salir <FontAwesomeIcon icon={faSignOutAlt} />
									</Button>
								</div>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default FormularioAddUpdProveedorProducto;
