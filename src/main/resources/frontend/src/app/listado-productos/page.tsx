'use client'

import ListadoProductos from "@/views/ListadoProductos/ListadoProductos";
import { NotificationContainer } from 'react-notifications';
import React from "react";

const Home = () => {
	return (
        <main>
            <ListadoProductos />

            <NotificationContainer/>
        </main>
	);
};

export default Home;
