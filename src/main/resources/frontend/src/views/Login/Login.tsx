"use client";

import type { Engine } from "tsparticles-engine";
import Loader from "@/components/Loader/Loader";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { Animated } from "react-animated-css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import type { ISourceOptions } from "tsparticles-engine";
import LordIcon from "@/components/LordIcon/LordIcon";
import { Typography } from "@mui/material";

const lordIconProps = {
	src: "https://cdn.lordicon.com/oxgyjdir.json",
	trigger: "in",
	delay: "500",
	stroke: "bold",
	state: "in-reveal",
	colors: "primary:#dee2e6,secondary:#66a1ee",
	style: { width: "150px", height: "150px", margin: "0 auto" },
};

const particlesOptions: ISourceOptions = {
	fpsLimit: 60,
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
			},
		},
		color: {
			value: ["#01488f", "#757676", "#dee2e6", "#00152A", "#f07f13"],
		},
		opacity: {
			value: { min: 0.1, max: 0.5 },
		},
		size: {
			value: { min: 1, max: 3 },
		},
		move: {
			enable: true,
			speed: 2,
			random: true,
		},
	},
	interactivity: {
		detectsOn: "window",
		events: {
			onClick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
	},
	background: {
		image: "radial-gradient(#01488f, rgba(0, 21, 42, 1))",
	},
};

const Login = () => {
	const router = useRouter();

	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => setShowLoader(!showLoader), 1000);
	}, []);

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<>
			{showLoader && <Loader />}

			{!showLoader && (
				<>
					<Particles options={particlesOptions} init={particlesInit} id="tsparticles" />

					<Animated animationIn="fadeIn" animationInDuration={2000} animationOut="fadeOut" isVisible={true}>
						<Container fluid className="vh-100">
							<Row className="d-flex justify-content-center align-items-center h-100">
								<Col>
									<Card className="my-5 mx-auto" style={{ borderRadius: "1rem", maxWidth: "500px" }}>
										<Card.Body className="p-5 w-100 d-flex flex-column text-center">
											<LordIcon {...lordIconProps} />

											<h2 className="fw-bold mb-2">Práctica Java Web</h2>

											<p className="mb-3">Da clic en el siguiente botón para ingresar al CRUD de Productos</p>

											<Button className="mb-2" size="lg" variant="success" onClick={() => router.push("/listado-productos")}>
												Ingresar&nbsp;
												<FontAwesomeIcon icon={faRightToBracket} />
											</Button>

										</Card.Body>

										<Card.Footer className="text-center">
											<Typography	variant="caption">Desarrollado por Sergio Ramírez para AlMaximoTI</Typography>
										</Card.Footer>
									</Card>
								</Col>
							</Row>
						</Container>
					</Animated>
				</>
			)}
		</>
	);
};

export default Login;
