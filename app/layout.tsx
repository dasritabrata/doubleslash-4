import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const vt323 = VT323({
	variable: "--font-vt323",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "DoubleSlash 4.0",
	description:
		"Official website for DoubleSlash 4.0, an offline hackathon organised by IEEE Jadavpur University Student Branch.",
	applicationName: "DoubleSlash 4.0",
	keywords: [
		"doubleslash",
		"hackathon",
		"jadavpur",
		"jadavpur university",
		"kolkata",
		"coding",
		"programming",
		"software",
	],
	openGraph: {
		title: "DoubleSlash 4.0",
		description:
			"Official website for DoubleSlash 4.0, an offline hackathon organised by IEEE Jadavpur University Student Branch.",
		url: "https://doubleslash4.ieee-jaduniv.in",
		siteName: "DoubleSlash 4.0",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} antialiased bg-[url(/imgs/background-wide.jpeg)] h-screen backdrop-blur-3xl`}
			>
				{children}
			</body>
		</html>
	);
}
