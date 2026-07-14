import Link from "next/link";

export default function MeetingsSectionLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="space-y-6">
			<div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
				<div>
					<h2 className="text-base font-bold text-slate-900">
						Worship Program Records
					</h2>
					<p className="text-xs text-slate-500">
						Query past historical archives or update the schedule ledger
					</p>
				</div>
				<Link
					href="/"
					className="text-xs font-semibold text-blue-600 hover:underline"
				>
					← Back to Main Dashboard
				</Link>
			</div>
			<div className="w-full">{children}</div>
		</div>
	);
}
