import { IPropsAddUpdateProveedorProducto, IProveedor, IProveedorProducto } from "@/types";
import { getProveedores } from "@/utils/httpRequests/httpRequestsProveedor/httpRequestsProveedor";
import { faSave, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState, useEffect } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const FormularioAddUpdProveedorProducto = ({ onClose, updateProveedoresList, proveedor: proveedorProducto }: IPropsAddUpdateProveedorProducto) => {
	const [formValues, setFormValues] = useState<IProveedorProducto>(proveedorProducto);

	const [proveedores, setProveedores] = useState<Array<IProveedor>>([]);

	const handleTipoProductoSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;

		console.log(name, value);

		if (name !== "" && (value !== "" || parseInt(value) !== 0)) {
			setFormValues({
				...formValues,
				[name]: parseInt(value),
			});
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		console.log(name);

		// Usa una función flecha para evitar la propagación de eventos
		let valueAux = value;

		const handleChange = (value: string) => {
			setFormValues({
				...formValues,
				[name]: value,
			});
		};

		if (name === "costo") {
			valueAux = value.replace(/[^0-9]/g, "");
		}

		console.log(valueAux);

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		updateProveedoresList(formValues);
	};

	useEffect(() => {
		console.log(proveedorProducto);
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			<Container fluid>
				<Row>
					<Col>
						<FloatingLabel controlId="idProveedorProducto" label="Tipo de Producto" className="mb-3">
							<Form.Select value={formValues.idProveedor} name="idProveedorProducto" aria-label="Proveedores disponibles" onChange={handleTipoProductoSelection}>
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

						<div className="d-grid gap-2">
							<Button variant="success" type="submit" size="lg">
								Guardar <FontAwesomeIcon icon={faSave} />
							</Button>

							<Button variant="danger" type="button" size="lg" onClick={() => onClose()}>
								Salir sin guardar <FontAwesomeIcon icon={faSignOutAlt} />
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</Form>
	);
};

export default FormularioAddUpdProveedorProducto;
