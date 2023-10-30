import { CustomNavbarProps } from "@/types";
import React from "react";
import { Navbar, Col, Container, Row, Offcanvas } from "react-bootstrap";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const CustomNavbar = ({ title }: CustomNavbarProps) => {
	return (
		<Navbar>
			<Container fluid>
				<Navbar.Brand href="./listado-productos">
					<i className="fi fi-ss-box-open-full"></i> {title}
				</Navbar.Brand>

				<Navbar.Offcanvas placement="end">
					<Offcanvas.Body className="justify-content-end">
						<SwitchTheme />
					</Offcanvas.Body>

				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
