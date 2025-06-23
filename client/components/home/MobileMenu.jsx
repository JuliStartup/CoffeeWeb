import { X } from "lucide-react";

const MobileMenu = ({ isMenuOpen, toggleMenu, menus }) => {
	return (
		<div
			className={`fixed xl:hidden top-0 right-0 min-h-screen h-auto w-[80%] max-w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
				isMenuOpen ? "translate-x-0 " : "translate-x-full"
			}`}
		>
			<div className="flex flex-col pt-20 px-4 gap-6">
				<button
					className="absolute top-6 right-6 text-neutral-700"
					onClick={toggleMenu}
					aria-label="Close Menu"
				>
					<X className="h-6 w-6" />
				</button>
				{menus.map(({ name, icon }) => (
					<a
						key={name}
						className="flex items-center gap-2 font-twk p-0 font-thin rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200"
						href="/"
						onClick={toggleMenu}
					>
						{icon}
						{name}
					</a>
				))}
			</div>
		</div>
	);
};

export default MobileMenu;
