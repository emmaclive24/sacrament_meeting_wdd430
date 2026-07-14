import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
	meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
	const meetingDate = new Date(meeting.date).toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	const badgeColors: Record<string, string> = {
		testimony: "bg-emerald-50 text-emerald-700 border-emerald-200",
		regular: "bg-blue-50 text-blue-700 border-blue-200",
		stake: "bg-amber-50 text-amber-700 border-amber-200",
		general: "bg-purple-50 text-purple-700 border-purple-200",
	};

	return (
		<article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow transition-all hover:border-blue-300 hover:shadow-md">
			<div>
				<div className="flex justify-between items-start gap-4 mb-4">
					<time
						className="text-sm font-semibold text-slate-500"
						dateTime={meeting.date}
					>
						{meetingDate}
					</time>
					<span
						className={`text-xs px-2.5 py-1 uppercase tracking-wider font-bold rounded-lg border ${badgeColors[meeting.meetingType] || "bg-slate-100 text-slate-600 border-slate-200"}`}
					>
						{meeting.meetingType}
					</span>
				</div>

				<h3 className="text-xl font-bold text-slate-900 mb-1">
					Conducting: {meeting.conducting}
				</h3>
				<p className="text-sm text-slate-500 mb-4">
					Presiding Officer: {meeting.presiding}
				</p>
			</div>

			<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
				<span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
					Type: {meeting.meetingType}
				</span>
				<Link
					href={`/meetings/${meeting.id}`}
					className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
				>
					View Agenda <span>→</span>
				</Link>
			</div>
		</article>
	);
}
