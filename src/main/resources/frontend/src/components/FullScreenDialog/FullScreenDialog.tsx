import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { IProducto, IPropsFullScreenDialog } from "@/types";
import { Typography } from "@mui/material";
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getTiposProducto } from "@/utils/httpRequests/httpRequestsTipoProducto/httpRequestsTipoProducto";
import AgregarProducto from "../ListadoProductos/Producto/AgregarProducto/AgregarProducto";
import EditarProducto from "../ListadoProductos/Producto/EditarProducto/EditarProducto";

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, setOpen, producto }: IPropsFullScreenDialog) => {
	const [formValues, setFormValues] = useState<IProducto>(producto);

	const [tiposProducto, setTiposProducto] = useState([]);

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

	const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

		console.log("handlesubmit form: ", formValues);
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
								Agregar / Editar Producto
							</Typography>

							<Button type='submit' variant="success" >
								Guardar <FontAwesomeIcon icon={faSave} />
							</Button>
						</Toolbar>
					</AppBar>

					<Container fluid className="mt-4">
						<Row>
							<Col>
								{producto.idProducto === 0 ? (
									<AgregarProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto}  />
								) : (
									<EditarProducto formValues={formValues} setFormValues={setFormValues} tiposProducto={tiposProducto}  />
								)}
							</Col>
						</Row>
					</Container>
				</Form>

			</Dialog>
		</div>
	);
};

export default FullScreenDialog;
