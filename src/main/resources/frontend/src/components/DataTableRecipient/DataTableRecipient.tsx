"use client";

import {MaterialReactTable} from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { MRT_Localization_ES } from "material-react-table/locales/es";

const DataTableRecipient = ({ columnas, data, renderTopToolbar = undefined, renderRowActions = undefined, listaProveedores = false }: any) => {

	const noDataMessage = `No hay registros, agrega un ${ listaProveedores ? 'nuevo proveedor' : 'nuevo producto' }`;

	return (
		<MaterialReactTable
			localization={
				{
					...MRT_Localization_ES,
					noRecordsToDisplay: noDataMessage,
					noResultsFound: noDataMessage
				}
			}
			columns={columnas}
			renderTopToolbar={renderTopToolbar}
			data={data}
			enableRowActions
			positionActionsColumn="last"
			renderRowActions={renderRowActions}
		/>
	);
};

export default DataTableRecipient;
