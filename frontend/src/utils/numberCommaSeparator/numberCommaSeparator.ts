const numberCommaSeparator = (costo: number) => {
	try {
		return costo
			.toFixed(2)
			.toString()
			.replace(/(\d+)(\d{3})/, `$1,$2`);
	} catch (error) {
		console.log("error getPrecioFormateado", error);

		return 0;
	}
};

export default numberCommaSeparator;
