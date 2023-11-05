"use client";

import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import React, { useState, useEffect } from "react";

const DataTableRecipient = ({ columnas, data, renderTopToolbar = undefined, renderRowActions = undefined, listaProveedores = false }: any) => {
	const noDataMessage = `No hay registros, agrega un ${listaProveedores ? "nuevo proveedor" : "nuevo producto"}`;

	const table = useMaterialReactTable({
		localization: {
			...MRT_Localization_ES,
			noRecordsToDisplay: noDataMessage,
			noResultsFound: noDataMessage,
		},
		columns: columnas,
		renderTopToolbar: renderTopToolbar,
		data,
		enableRowActions: true,
		positionActionsColumn: 'last',
		renderRowActions: renderRowActions
	});

	return (
		<MaterialReactTable table={table} />
	);
};

export default DataTableRecipient;
