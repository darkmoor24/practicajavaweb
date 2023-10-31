"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";


import { Button, Col, Container, Row } from "react-bootstrap";
import FormularioBusqueda from "./FormularioBusqueda/FormularioBusqueda";
import ResultadosBusqueda from "./ResultadosBusqueda/ResultadosBusqueda";
import { ModalSweetAlert } from "@/utils/SweetAlerts/SweetAlert";
import EliminarProducto from "../EliminarProducto/EliminarProducto";
import { getProductos } from "@/utils/httpRequests/httpRequestsProducto/httpRequestsProducto";
import { FuncionesCRUD, IProducto } from "@/types";
import FullScreenDialog from "@/components/FullScreenDialog/FullScreenDialog";
import { getProveedoresProducto } from "@/utils/httpRequests/httpRequestsProveedorProducto/httpRequestsProveedorProducto";

const BuscarProducto = () => {
	const [showFullScreenDialog, setShowFullScreenDialog] = useState(false);

	const [criteriosBusqueda, setCriteriosBusqueda] = useState({
		idTipoProducto: 0,
		clave: "null",
	});

	const [productos, setProductos] = useState<Array<IProducto>>([]);

	const productoInitialState: IProducto = {
		idProducto: 0,
		nombre: "",
		clave: "",
		costo: 0.0,
		estatus: 0,
		idTipoProducto: 0,
		proveedores: []
	};

	const [productoToAddOrUpdate, setProductoToAddOrUpdate] = useState<IProducto>(productoInitialState);

	const [productoAgregado, setProductoAgregado] = useState(false);

	const [productoEditado, setProductoEditado] = useState(false);

	const [productoEliminado, setProductoEliminado] = useState(false);

	const [showTable, setShowTable] = useState(false);

	const handleAgregarProducto = async ({ currentTarget }: any) => {
		setProductoToAddOrUpdate(productoToAddOrUpdate);

		setShowFullScreenDialog(true);
	};

	const handleEditarProducto = async ({ currentTarget }: any) => {

		try {
			const idProducto = parseInt(currentTarget.id);

			const { data: proveedores } = await getProveedoresProducto(idProducto);

			let producto = productoInitialState;
			
			const aux = productos?.find((producto: IProducto) => producto?.idProducto === idProducto);

			if (aux !== undefined) {
				producto = {
					...aux,
					proveedores
				};
		
				setProductoToAddOrUpdate(producto || productoToAddOrUpdate);
		
				setShowFullScreenDialog(true);
			}
		} catch (error) {
			console.log("error al consultar los proveedores del producto: ", error);
		}
	};

	const handleEliminarProducto = async ({ currentTarget }: any) => {
		const idProducto = parseInt(currentTarget.id);

		const producto = productos.find((producto: IProducto) => producto.idProducto === idProducto);

		await ModalSweetAlert({
			title: "Eliminar Producto",
			icon: "warning",
			html: <EliminarProducto setProductoEliminado={setProductoEliminado} producto={producto} />,
			showConfirmButton: false,
			showCloseButton: true,
		});
	};

	const funcionesCRUD: FuncionesCRUD = {
		handleAgregarProducto,
		handleEditarProducto,
		handleEliminarProducto,
	};

	useEffect(() => {
		if (productoAgregado || productoEditado || productoEliminado) {
			const refetchProductos = async () => {
				try {
					const { data: productos } = await getProductos(criteriosBusqueda.idTipoProducto, criteriosBusqueda.clave);

					setProductos(productos);

					setProductoAgregado(false);

					setProductoEditado(false);

					setProductoEliminado(false);
				} catch (error) {
					console.log("error al reconsultar los productos: ", error);
				}
			};

			refetchProductos();
		}
	}, [productoAgregado, productoEditado, productoEliminado]);
	

	useEffect(() => {
		if (!showFullScreenDialog) {
			setProductoToAddOrUpdate(productoInitialState);
		}
	}, [showFullScreenDialog]);

	const getTheme: any = () => window.document.querySelector("html")?.getAttribute("data-bs-theme");

    const [theme, setTheme] = useState(
		createTheme({
			palette: {
				mode: getTheme(),
			},
		})
	);

    useLayoutEffect(() => {
		const element = document.querySelector("html");

		element?.addEventListener("change", (event) => {
			setTheme(
				createTheme({
					palette: {
						mode: getTheme(),
					},
				})
			);
		});
	}, []);

	return (
		<Container fluid className="vh-100">
			<Row className="mt-3">
				<Col>
					<span>Buscar Producto</span>
					<hr />

					<FormularioBusqueda criteriosBusqueda={criteriosBusqueda} setCriteriosBusqueda={setCriteriosBusqueda} setProductos={setProductos} setShowTable={setShowTable} />

					<ThemeProvider theme={theme}>
						<CssBaseline />

						{showTable && (
							<>
								<hr className="mb-3" />
								<ResultadosBusqueda productos={productos} funcionesCRUD={funcionesCRUD} />
							</>
						)}

						{
							showFullScreenDialog &&
							<FullScreenDialog open={showFullScreenDialog} setOpen={setShowFullScreenDialog} producto={productoToAddOrUpdate} />
						}

					</ThemeProvider>

				</Col>
			</Row>
		</Container>
	);
};

export default BuscarProducto;
