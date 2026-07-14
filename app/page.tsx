import Link from "next/link";
import { ArrowRight, Calendar, Users, Music4 } from "lucide-react";

export default function HomePage() {
	return (
		<div className="space-y-12">
			<section className="rounded-3xl bg-slate-900 px-8 py-16 text-white shadow-xl md:px-16">
				<div className="max-w-3xl">
					<span className="text-xs font-bold uppercase tracking-widest text-blue-400">
						WDD 430 Assignment
					</span>
					<h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
						Plan Every Sacrament Meeting
						<br />
						With Confidence.
					</h1>
					<p className="mt-6 text-lg leading-8 text-slate-300">
						A modern meeting planner built with Next.js, TypeScript and
						TailwindCSS for organizing speakers, hymns and weekly sacrament
						meetings.
					</p>
					<div className="mt-10">
						<Link
							href="/meetings"
							className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
						>
							View Meetings
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</section>

			<section
				className="grid gap-6 md:grid-cols-3"
				aria-label="Planner Features"
			>
				<div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
					<Calendar className="mb-5 text-blue-600" size={34} />
					<h2 className="text-2xl font-bold text-slate-900">Meetings</h2>
					<p className="mt-3 text-slate-600">
						View every upcoming sacrament meeting.
					</p>
				</div>

				<div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
					<Users className="mb-5 text-indigo-600" size={34} />
					<h2 className="text-2xl font-bold text-slate-900">Speakers</h2>
					<p className="mt-3 text-slate-600">
						Organize talks and musical numbers.
					</p>
				</div>

				<div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
					<Music4 className="mb-5 text-emerald-600" size={34} />
					<h2 className="text-2xl font-bold text-slate-900">Hymns</h2>
					<p className="mt-3 text-slate-600">
						Manage opening, sacrament and closing hymns.
					</p>
				</div>
			</section>
		</div>
	);
}
