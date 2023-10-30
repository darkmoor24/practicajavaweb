
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
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AgregarProducto from "../ListadoProductos/AgregarProducto/AgregarProducto";
import EditarProducto from "../ListadoProductos/EditarProducto/EditarProducto";
import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { getTiposProducto } from "@/utils/httpRequests/httpRequestsTipoProducto/httpRequestsTipoProducto";

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

	const handleGuardarProducto = () => {
        console.log("producto: ", formValues);

		// setOpen(false);
	};

	useEffect(() => {
		
	}, []);

	return (
		<div>
			<Dialog fullScreen open={open} onClose={handleGuardarProducto} TransitionComponent={Transition}>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
							<CloseIcon />
						</IconButton>

						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Agregar / Editar Producto
						</Typography>

						<Button variant="success" onClick={handleGuardarProducto} type="submit">
							Guardar Producto <FontAwesomeIcon icon={faSave} />
						</Button>
					</Toolbar>
				</AppBar>

				<Container fluid className="mt-4">
					<Row>
						<Col>
							{
                                producto.idProducto === 0 ?
                                <AgregarProducto formValues={ formValues } setFormValues={setFormValues} tiposProducto={tiposProducto} />
                                :
                                <EditarProducto formValues={ formValues } setFormValues={setFormValues} tiposProducto={tiposProducto} />
                            }
						</Col>
					</Row>
				</Container>
			</Dialog>
		</div>
	);
};

export default FullScreenDialog;
