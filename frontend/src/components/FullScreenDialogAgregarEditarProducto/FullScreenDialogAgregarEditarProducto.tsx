"use client";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { IProducto, IPropsFullScreenDialogAgregarEditarProducto } from "@/@types";
import { Typography } from "@mui/material";
import { Button, Col, Container, Form, OverlayTrigger, Row, Spinner, Tooltip } from "react-bootstrap";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getTiposProducto } from "@/utils/httpRequests/httpRequestsTipoProducto/httpRequestsTipoProducto";
import AgregarProducto from "../ListadoProductos/Producto/AgregarProducto/AgregarProducto";
import EditarProducto from "../ListadoProductos/Producto/EditarProducto/EditarProducto";
import { NotificationManager } from "react-notifications";
import { ModalSweetAlert, NotificacionSweetAlert } from "@/utils/SweetAlerts/SweetAlert";
import { addProducto, updateProducto } from "@/utils/httpRequests/httpRequestsProducto/httpRequestsProducto";

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialogAgregarEditarProducto = ({ open, setOpen, producto, setProductoAgregadoOEditado }: IPropsFullScreenDialogAgregarEditarProducto) => {
	const [formValues, setFormValues] = useState<IProducto>(producto);

	const [tiposProducto, setTiposProducto] = useState([]);

	const [isSaving, setIsSaving] = useState(false);

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

	const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {

			const auxFormValues = {
				...formValues,
				costo: Number(formValues.costo)
			};

			const { idProducto, clave, costo, nombre } = auxFormValues;

			setIsSaving(true);

			try {
				if (idProducto === 0) {
					await addProducto(auxFormValues);
				} else {
					console.log(auxFormValues);
					
					await updateProducto(auxFormValues);
				}
			} catch (error: any) {
				console.log("Error al agregar o actualizar el producto: ", error);

				setIsSaving(false);
				
				return NotificacionSweetAlert("error", error?.message, 3500);
			}

			setOpen(false);

			setIsSaving(false);

			setProductoAgregadoOEditado(true);

			NotificationManager.success(producto.idProducto === 0 ? "Producto agregado exitosamente" : "Producto actualizado exitosamente");
		} catch (error: any) {
			console.log("error al agregar el producto");

			setOpen(false);

			ModalSweetAlert({
				title: "Algo sucedió al agregar el producto, vuelve a intentar",
				icon: "error",
				html: (
					<Typography className={window.document.querySelector("html")?.getAttribute("data-bs-theme") === "dark" ? "text-white" : "text-black"} variant="h5">
						{error?.message}
					</Typography>
				),
				showConfirmButton: true,
				showCloseButton: true,
				confirmButtonText: "Cerrar",
				confirmButtonColor: "#0d6efd",
			});
		}
	};

	return (
		<div>
			<Dialog fullScreen open={open} TransitionComponent={Transition}>
				<Form onSubmit={handleSubmit}>
					<AppBar sx={{ position: "relative" }}>
						<Toolbar>
							<OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={<Tooltip className="z-super-top">Salir sin guardar</Tooltip>}>
								<IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
									<CloseIcon />
								</IconButton>
							</OverlayTrigger>

							<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
								{producto.idProducto === 0 ? <>Agregar</> : <>Editar</>} Producto
							</Typography>

							<Button type="submit" variant="success">
								{isSaving ? (
									<>
										Guardando <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
										<span className="visually-hidden">Guardando...</span>
									</>
								) : (
									<>
										Guardar <FontAwesomeIcon icon={faSave} />
									</>
								)}
							</Button>
						</Toolbar>
					</AppBar>

					<Container fluid className="mt-4">
						<Row>
							<Col>
								{producto.idProducto === 0 ? (
									<AgregarProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto} />
								) : (
									<EditarProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto} />
								)}
							</Col>
						</Row>
					</Container>
				</Form>
			</Dialog>
		</div>
	);
};

export default FullScreenDialogAgregarEditarProducto;
