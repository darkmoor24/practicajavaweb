import { ReactNode } from "react";

declare module "react-animated-css" {
	export interface AnimatedProps {
		children: ReactNode;
	}
}

declare module 'react-notifications';

declare module 'react-notifications/lib/NotificationContainer';


export interface LordIconProps {
	src?: string;
	trigger?: string;
	delay?: string;
	stroke?: string;
	state?: string;
	colors?: string;
	style?: {
		[key]: string;
	};
}

declare type CustomNavbarProps = {
	title: string;
};

declare type LoaderProps = { subtle?: boolean };

declare type CustomHttpRequestProps = {
	url: string;
	method: string;
	body?: BodyInit | null | undefined;
};

declare type CustomHttpResponse = {
	code: number;
	message: string;
	data: Object;
};

interface ICriterioBusqueda {
	idTipoProducto: number;
	clave: string;
}

interface IProducto {
	nombre: string;
	clave: string;
	costo: double;
	idProducto: number;
	idTipoProducto: number;
	estatus: number;
	proveedoresProducto: Array<IProveedorProducto> | [];
}

interface IProveedorProducto {
    idProducto: number;
	idProveedor: number;
	idProveedorProducto: number;
	nombre: string;
	claveProveedor: string;
	costoProveedor: double;
}

interface IProveedor {
	idProveedor: number;
	nombre: string;
	descripcion: string;
}

declare type IPropsFormularioBusqueda = {
	criteriosBusqueda: ICriterioBusqueda;
	setCriteriosBusqueda: (criteriosBusqueda: ICriterioBusqueda) => void;
	setProductos: (productos: any) => void;
	setShowTable: (showTable: boolean) => void;
};

interface FuncionesCRUD {
	[key: string]: any;
};

declare type IPropsResultadosBusqueda = {
	productos: Array<IProducto>;
	funcionesCRUD: FuncionesCRUD;
};

declare type IPropsEliminarProducto = {
	producto?: IProducto;
	setProductoEliminado: (productoEliminado: boolean) => void;
};

declare type IPropsEliminarProveedor = {
	eliminarProveedor: () => void;
	swalRef: SweetAlert2 & ReactSweetAlert;
};

declare type IPropsFullScreenDialogAgregarEditarProducto = {
	open: boolean;
	setOpen: (open: boolean) => void;
	producto: IProducto;
	setProductoAgregadoOEditado: (productoAgregadoOEditado: boolean) => void;
};

declare type IPropsAddUpdateProducto = {
	formValues: IProducto;
	setFormValues: (formValues: IProducto) => void;
	tiposProducto: any;
	proveedores?: any;
	callback?: Function;
};

declare type IPropsAddUpdateProveedorProducto = {
	onClose: () => void;
	updateProveedoresList: (datosProveedorModificado: IProveedorProducto) => void;
	proveedor: IProveedorProducto;
	swalRef: SweetAlert2 & ReactSweetAlert;
};
