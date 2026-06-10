import "./globals.css";
import type { Metadata } from "next";
import { LangProvider } from "@/lib/i18n";

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
		<html lang="uz" suppressHydrationWarning>
			<body className="antialiased">
				<LangProvider>
					{children}
				</LangProvider>
			</body>
		</html>
	);
}
