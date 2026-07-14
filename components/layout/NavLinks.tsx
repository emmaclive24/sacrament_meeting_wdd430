"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, BookOpen } from "lucide-react";

const links = [
	{
		href: "/",
		label: "Dashboard",
		icon: Home,
	},
	{
		href: "/meetings",
		label: "Meetings",
		icon: Calendar,
	},
	{
		href: "/meetings/current",
		label: "Current",
		icon: BookOpen,
	},
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<nav className="border-b bg-white">
			<div className="mx-auto flex max-w-7xl gap-3 px-6 py-4">
				{links.map((link) => {
					const Icon = link.icon;

					return (
						<Link
							key={link.href}
							href={link.href}
							className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
								pathname === link.href
									? "bg-blue-600 text-white shadow-lg"
									: "text-slate-600 hover:bg-slate-100"
							}`}
						>
							<Icon size={18} />

							{link.label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}