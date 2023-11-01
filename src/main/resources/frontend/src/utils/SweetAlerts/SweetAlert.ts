import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const mySwal = withReactContent(Swal);

const Toast = Swal.mixin({
	toast: true,
	position: "bottom-end",
	showConfirmButton: false,
	// timer: 3500,
	timerProgressBar: true,
	customClass: {
		container: "z-super-top",
		popup: "z-super-top",
	},
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

export const NotificacionSweetAlert = (icon: any, title: any, timer = 2000) => {
	Toast.fire({
		timer,
		icon,
		title,
	});
};

export const ModalSweetAlert = (options: any) => {
	return new Promise(async (resolve, reject) => {
		try {
			const basicSweetAlertOptions = {
				allowOutsideClick: false,
				allowEnterKey: false,
				allowEscapeKey: false,
				width: 950,
			};

			const { isConfirmed, isDismissed } = await mySwal.fire({
				...basicSweetAlertOptions,
				...options,
			});

			if (isDismissed) {
				resolve(false);
			}

			if (isConfirmed) {
				resolve(true);
			}
		} catch (error) {
			resolve(false);
		}
	});
};
