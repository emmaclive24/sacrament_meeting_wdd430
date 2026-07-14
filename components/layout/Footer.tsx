export default function Footer() {
	return (
		<footer className="mt-auto border-t bg-white py-8 text-center print:hidden">
			<div className="mx-auto max-w-7xl px-6">
				<h2 className="font-semibold text-slate-800">
					Sacrament Meeting Planner
				</h2>
				<p className="mt-2 text-sm text-slate-500">
					Built with Next.js 16, React 19 and Tailwind CSS
				</p>
				<p className="mt-1 text-xs text-slate-400">
					© {new Date().getFullYear()} Harmony Ward
				</p>
			</div>
		</footer>
	);
}
