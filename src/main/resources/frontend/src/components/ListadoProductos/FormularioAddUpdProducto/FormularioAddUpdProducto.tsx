import DataTableRecipient from "@/components/DataTableRecipient/DataTableRecipient";
import { IPropsAddUpdateProducto } from "@/types";
import numberCommaSeparator from "@/utils/numberCommaSeparator/numberCommaSeparator";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, FormControlLabel, IconButton, Switch, SwitchProps, Typography, styled } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, OverlayTrigger, Tooltip, Row } from "react-bootstrap";

const SwitchEstatus = styled((props: SwitchProps) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	"& .MuiSwitch-switchBase": {
		padding: 0,
		margin: 2,
		transitionDuration: "300ms",
		"&.Mui-checked": {
			transform: "translateX(16px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
				opacity: 1,
				border: 0,
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
		},
	},
	"& .MuiSwitch-thumb": {
		boxSizing: "border-box",
		width: 22,
		height: 22,
	},
	"& .MuiSwitch-track": {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
	},
}));

const FormularioAddUpdProducto = ({ formValues, setFormValues, tiposProducto, proveedores: proveedoresProducto }: IPropsAddUpdateProducto) => {
	const [proveedores, setProveedores] = useState(proveedoresProducto);

	// const columnas: Array<MRT_ColumnDef<IProveedor>> = useMemo(
	const columnas: Array<MRT_ColumnDef<any>> = useMemo(
		() => [
			{
				accessorKey: "nombre",
				header: "Proveedor",
			},
			{
				accessorKey: "clave",
				header: "Clave de Proveedor",
			},
			{
				accessorKey: "costo",
				header: "Costo de Proveedor",
				Cell: ({ cell }) => `$ ${numberCommaSeparator(cell.row.original.costoProveedor)}`,
			},
		],
		[]
	);

	const handleTipoProductoSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;

		if (name !== "" && (value !== "" || parseInt(value) !== 0)) {
			setFormValues({
				...formValues,
				[name]: parseInt(value),
			});
		}
	};

	const handleCambioEstatus = (e: React.SyntheticEvent<Element, Event>, checked: boolean) => {
		setFormValues({
			...formValues,
			estatus: checked ? 1 : 0,
		});
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const renderTopToolbar = ({ table }: any) => {
		return (
			<Container fluid className="my-2">
				<Row>
					<Col align="right">
						<Button variant="success" onClick={() => {}} type="button">
							Agregar Proveedor <FontAwesomeIcon icon={faAdd} />
						</Button>
					</Col>
				</Row>
			</Container>
		);
	};

	const renderRowActions = ({ row, table }: any) => (
		<Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
			<OverlayTrigger placement="top" overlay={<Tooltip>{"Editar Producto"}</Tooltip>}>
				<IconButton color="primary" id={row.original.idProducto} onClick={() => {}}>
					<FontAwesomeIcon icon={faEdit} color="#128293" />
				</IconButton>
			</OverlayTrigger>

			<OverlayTrigger placement="top" overlay={<Tooltip>Eliminar Producto</Tooltip>}>
				<IconButton color="error" id={row.original.idProducto} onClick={() => {}}>
					<FontAwesomeIcon icon={faTrash} color="#A51D2A" />
				</IconButton>
			</OverlayTrigger>
		</Box>
	);

	const { idProducto, nombre, clave, costo, estatus, idTipoProducto } = formValues;

	return (
		<Form>
			<Container fluid>
				<Typography variant="h5" gutterBottom>
					Datos del Producto
				</Typography>
				<hr />

				<Row>
					<Col>
						<FloatingLabel controlId="nombre" label="Nombre de producto" className="mb-3">
							<Form.Control type="text" placeholder="Nombre de producto" value={nombre} name="nombre" onChange={handleInputChange} />
						</FloatingLabel>
					</Col>

					<Col>
						<FloatingLabel controlId="clave" label="Clave de producto" className="mb-3">
							<Form.Control type="text" placeholder="Clave de producto" value={clave} name="clave" onChange={handleInputChange} />
						</FloatingLabel>
					</Col>
				</Row>

				<Row>
					<Col>
						<FloatingLabel controlId="idTipoProducto" label="Tipo de Producto">
							<Form.Select value={idTipoProducto} name="idTipoProducto" aria-label="Tipo de Producto" onChange={handleTipoProductoSelection}>
								<option value="">-- Elige una opción --</option>

								{tiposProducto.map((tipoProducto: any, idx: number) => (
									<option key={idx} value={tipoProducto.idTipoProducto}>
										{tipoProducto.nombre}
									</option>
								))}
							</Form.Select>
						</FloatingLabel>
					</Col>

					<Col>
						<FloatingLabel controlId="costo" label="Nombre de producto" className="mb-3">
							<Form.Control type="text" placeholder="Nombre de producto" value={nombre} name="nombre" onChange={handleInputChange} />
						</FloatingLabel>
					</Col>
				</Row>

				<Row className="mb-3">
					<Col>
						<Container fluid className="d-flex h-100">
							<Row>
								<Col>
									<FormControlLabel
										className="px-1"
										onChange={handleCambioEstatus}
										control={<SwitchEstatus defaultChecked={formValues.estatus ? true : false} />}
										label={formValues.estatus ? "Activo" : "Ináctivo"}
									/>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>

				<Typography variant="h5" gutterBottom>
					Proveedores
				</Typography>
				<hr />

				<Row>
					<Col>
						<DataTableRecipient columnas={columnas} data={proveedores} renderTopToolbar={renderTopToolbar} renderRowActions={renderRowActions} listaProveedores />
					</Col>
				</Row>
			</Container>
		</Form>
	);
};

export default FormularioAddUpdProducto;
