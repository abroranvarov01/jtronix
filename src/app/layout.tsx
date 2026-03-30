import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Petronix TECHNOLOGIES",
	icons: {
		icon: "/favicon.png",
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="uz">
			<body className="antialiased">
				{children}
			</body>
		</html>
	);
}
