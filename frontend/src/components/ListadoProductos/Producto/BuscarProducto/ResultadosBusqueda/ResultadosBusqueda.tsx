"use client";

import DataTableRecipient from "@/components/DataTableRecipient/DataTableRecipient";
import { IProducto, IPropsResultadosBusqueda } from "@/@types";
import { faAdd, faCheck, faEdit, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import React, { useMemo } from "react";
import { Button, Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import numberCommaSeparator from "@/utils/numberCommaSeparator/numberCommaSeparator";

const ResultadosBusqueda = ({ productos, funcionesCRUD }: IPropsResultadosBusqueda) => {

	const { handleAgregarProducto, handleEditarProducto, handleEliminarProducto } = funcionesCRUD;

	const columnas: Array<MRT_ColumnDef<IProducto>> = useMemo(
		() => [
			{
				accessorKey: "nombre",
				header: "Producto",
			},
			{
				accessorKey: "clave",
				header: "Clave de Producto",
			},
			{
				accessorKey: "costo",
				header: "Costo de Producto",
				Cell: ({ cell }) => `$ ${numberCommaSeparator(cell.row.original.costo)}`,
			},

			{
				accessorKey: "estatus",
				header: "Activo",
				Cell: ({ cell }) => (
					<div className="text-center">
						<span>{cell.row.original.estatus ? <FontAwesomeIcon icon={faCheck} color="#28a745" /> : <FontAwesomeIcon icon={faTimes} color="#dc3545" />}</span>
					</div>
				),
			},
		],
		[]
	);

	const renderTopToolbar = ({ table }: any) => {
		return (
			<Container fluid className="my-2">
				<Row>
					<Col align="right">
						<Button variant="success" onClick={handleAgregarProducto} type="button">
							Agregar Producto <FontAwesomeIcon icon={faAdd} />
						</Button>
					</Col>
				</Row>
			</Container>
		);
	};

	const renderRowActions = ({ row, table }: any) => (
		<Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
			<OverlayTrigger placement="top" overlay={<Tooltip className="z-super-top">Editar Producto</Tooltip>}>
				<IconButton color="primary" id={row.original.idProducto} onClick={handleEditarProducto}>
					<FontAwesomeIcon icon={faEdit} color="#128293" />
				</IconButton>
			</OverlayTrigger>

			<OverlayTrigger placement="top" overlay={<Tooltip className="z-super-top">Eliminar Producto</Tooltip>}>
				<IconButton color="error" id={row.original.idProducto} onClick={handleEliminarProducto}>
					<FontAwesomeIcon icon={faTrash} color="#A51D2A" />
				</IconButton>
			</OverlayTrigger>
		</Box>
	);

	return (
		<Container fluid>
			<Row>
				<Col>
					<DataTableRecipient columnas={columnas} data={productos} renderTopToolbar={renderTopToolbar} renderRowActions={renderRowActions} />
				</Col>
			</Row>
		</Container>
	);
};

export default ResultadosBusqueda;
