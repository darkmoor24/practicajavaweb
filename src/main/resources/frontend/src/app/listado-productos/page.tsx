'use client'

import { NotificationContainer } from 'react-notifications';
import React from "react";
import ListadoProductos from '@/views/ListadoProductos/ListadoProductos';

const Home = () => {
	return (
        <main>
            <ListadoProductos />

            <NotificationContainer/>
        </main>
	);
};

export default Home;
