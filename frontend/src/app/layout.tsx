import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import 'animate.css';
import 'react-notifications/lib/notifications.css';
import '@sweetalert2/theme-dark/dark.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Práctica Java Web",
	description: "Práctica Java Web + React(Nextjs)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" data-bs-theme='dark'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
