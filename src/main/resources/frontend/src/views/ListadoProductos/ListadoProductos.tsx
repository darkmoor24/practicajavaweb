"use client"

import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import BuscarProducto from "@/components/ListadoProductos/BuscarProducto/BuscarProducto";
import CustomNavbar from "@/components/CustomNavbar/CustomNavbar";

const ListadoProductos = () => {

	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => setShowLoader(!showLoader), 500);
	}, []);

	

	return (
		<>
			{showLoader && <Loader subtle={true} />}

			{!showLoader && (
				<main className="animate__animated animate__fadeIn">
					<CustomNavbar title="Listado de Productos" />

					<BuscarProducto />
				</main>
			)}
		</>
	);
};

export default ListadoProductos;
