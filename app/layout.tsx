import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import NavLinks from "@/components/layout/NavLinks";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sacrament Meeting Planner",
	description: "WDD 430 Assignment",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable}`}
			suppressHydrationWarning
		>
			<body className="flex min-h-screen flex-col bg-slate-50 antialiased">
				<Header />
				<NavLinks />
				<main className="mx-auto w-full max-w-7xl flex-grow px-6 py-10 print:py-0 print:px-0">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
