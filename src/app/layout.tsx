import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-gray-100 h-dvh">
				<div className="bg-white h-full w-[40%] mx-auto phone:w-full">
					{children}
				</div>
			</body>
		</html>
	);
}
