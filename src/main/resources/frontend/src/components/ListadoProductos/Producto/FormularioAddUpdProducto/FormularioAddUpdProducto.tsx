import DataTableRecipient from "@/components/DataTableRecipient/DataTableRecipient";
import { IPropsAddUpdateProducto, IProveedorProducto } from "@/types";
import { mySwal, ModalSweetAlert } from "@/utils/SweetAlerts/SweetAlert";
import numberCommaSeparator from "@/utils/numberCommaSeparator/numberCommaSeparator";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Box, FormControlLabel, IconButton, Switch, SwitchProps, Typography, styled } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, OverlayTrigger, Tooltip, Row } from "react-bootstrap";
import EliminarProveedor from "../../ProveedorProducto/EliminarProveedor/EliminarProveedor";
import AgregarProveedor from "../../ProveedorProducto/AgregarProveedor/AgregarProveedor";
import EditarProveedor from "../../ProveedorProducto/EditarProveedor/EditarProveedor";

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
				accessorKey: "claveProveedor",
				header: "Clave de Proveedor",
			},
			{
				accessorKey: "costoProveedor",
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

	const handleAgregarEditarProveedor = async ({ currentTarget: { id } }: React.MouseEvent<HTMLElement>) => {
		let proveedor: IProveedorProducto = {
			idProveedor: 0,
			idProveedorProducto: 0,
			nombre: "",
			claveProveedor: "",
			costoProveedor: 0.0
		};
		
		if (id !== 'add') {
			const aux = proveedores.find((proveedor: IProveedorProducto) => proveedor.idProveedorProducto === parseInt(id));

			if (aux !== undefined) {
				proveedor = aux;
			}
		}

		const updateProveedoresList = (datosProveedorModificado: IProveedorProducto) => {
			if (proveedores.length === 0) {
				setProveedores([ ...proveedores, datosProveedorModificado ]);
			} else {
				const indexProductoExistente = proveedores.indexOf((proveedor: IProveedorProducto) => proveedor.idProveedorProducto === datosProveedorModificado.idProveedorProducto);
				
				console.log(indexProductoExistente);
			}
		};

		await ModalSweetAlert({
			title: "Agregar / Editar Proveedor",
			html: id === 'add' ? <AgregarProveedor updateProveedoresList={updateProveedoresList} proveedor={proveedor} swalRef={mySwal} /> : <EditarProveedor updateProveedoresList={updateProveedoresList} proveedor={proveedor} swalRef={mySwal} />,
			customClass: {
				container: 'z-super-top'
			},
			showConfirmButton: false,
			showCloseButton: true,
		});
	};

	const handleEliminarProveedor = async ({ currentTarget }: any) => {
		const idProveedorProducto: number = parseInt(currentTarget.id);

		const eliminarProveedor = () => {
			setProveedores(proveedores.filter((proveedor: IProveedorProducto) => proveedor.idProveedorProducto !== idProveedorProducto));
		};

		ModalSweetAlert({
			title: "Eliminar Proveedor",
			icon: "warning",
			html: <EliminarProveedor eliminarProveedor={eliminarProveedor} swalRef={mySwal} />,
			customClass: {
				container: 'z-super-top'
			},
			showConfirmButton: false,
			showCloseButton: false,
		})
	};

	const renderTopToolbar = ({ table }: any) => {
		return (
			<Container fluid className="my-2">
				<Row>
					<Col align="right">
						<Button id='add' variant="success" onClick={handleAgregarEditarProveedor} type="button">
							Agregar Proveedor <FontAwesomeIcon icon={faAdd} />
						</Button>
					</Col>
				</Row>
			</Container>
		);
	};

	const renderRowActions = ({ row, table }: any) => (
		<Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
			<OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={<Tooltip className="z-super-top">Editar Proveedor</Tooltip>}>
				<IconButton color="primary" id={row.original.idProveedorProducto} onClick={handleAgregarEditarProveedor}>
					<FontAwesomeIcon icon={faEdit} color="#128293" />
				</IconButton>
			</OverlayTrigger>

			<OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={<Tooltip className="z-super-top">Eliminar Proveedor</Tooltip>}>
				<IconButton color="error" id={row.original.idProveedorProducto} onClick={handleEliminarProveedor}>
					<FontAwesomeIcon icon={faTrash} color="#A51D2A" />
				</IconButton>
			</OverlayTrigger>
		</Box>
	);

	const { idProducto, nombre, clave, costo, estatus, idTipoProducto } = formValues;

	return (
		<Container fluid className="mb-5">
			<Row className="mb-3 justify-content-end">
				<Col xs={6} >
					<Alert severity="info">Para guardar cualquier cambio, haga clic en el botón Guardar.</Alert>
				</Col>
			</Row>

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
					<FloatingLabel controlId="costo" label="Costo de producto" className="mb-3">
						<Form.Control type="text" placeholder="Costo de producto" value={costo} name="costo" onChange={handleInputChange} />
					</FloatingLabel>
				</Col>
			</Row>

			<Row className="mb-3">
				<Col>
					<Container fluid className="d-flex h-100">
						<Row>
							<Col>
								<OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={<Tooltip className="z-super-top">Cambiar estatus</Tooltip>}>
									<FormControlLabel
										className="px-1"
										onChange={handleCambioEstatus}
										control={<SwitchEstatus checked={formValues.estatus ? true : false} />}
										label={`Estatus ${formValues.estatus ? "Activo" : "Ináctivo"}`}
									/>
								</OverlayTrigger>
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
	);
};

export default FormularioAddUpdProducto;
