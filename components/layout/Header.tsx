import Link from "next/link";
import { CalendarDays, Church, Bell } from "lucide-react";

export default function Header() {
	return (
		<header className="border-b bg-white print:hidden">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<Link href="/" className="flex items-center gap-3 hover:opacity-90">
					<div className="rounded-xl bg-blue-600 p-2 text-white">
						<Church size={24} />
					</div>
					<div>
						<h1 className="text-xl font-bold tracking-tight text-slate-900">
							Sacrament Planner
						</h1>
						<p className="text-xs text-slate-500">Harmony Ward</p>
					</div>
				</Link>
				<div className="hidden items-center gap-5 md:flex">
					<div className="rounded-xl bg-slate-100 p-3">
						<CalendarDays className="text-blue-600" size={20} />
					</div>
					<div className="rounded-xl bg-slate-100 p-3">
						<Bell className="text-blue-600" size={20} />
					</div>
				</div>
			</div>
		</header>
	);
}
