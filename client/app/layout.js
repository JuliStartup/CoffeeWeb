// import Footer from "@/components/home/Footer";
import Nav from "@/components/home/Nav";
import { CartProvider } from "@/contexts/CartContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "WyndClub",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="w-full">
					<CartProvider>
						<Nav />
						<main>{children}</main>
						{/* <Footer /> */}
					</CartProvider>
				</div>
			</body>
		</html>
	);
}
