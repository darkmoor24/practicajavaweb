"use client";

import { LoaderProps } from "@/@types";
import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ subtle = false }: LoaderProps) => {
	return (
		<div className="loader">
			<div className="loader-container">
				{
					subtle ? 
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
					:
					<span className="loader-spinner"></span>
				}
			</div>
		</div>
	);
};

export default Loader;
