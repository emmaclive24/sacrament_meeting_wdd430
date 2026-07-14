"use client";

import { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
	meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
	const longDate = new Date(meeting.date).toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="w-full max-w-3xl mx-auto bg-white border border-slate-200 shadow-xl rounded-3xl p-6 sm:p-10 print:border-none print:shadow-none print:p-0 text-slate-900">
			{/* Dynamic Screen Action Buttons Panels */}
			<div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100 print:hidden">
				<span className="text-sm font-medium text-slate-400">
					Record Identity: #{meeting.id}
				</span>
				<button
					onClick={() => window.print()}
					className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow transition-all cursor-pointer"
				>
					🖨️ Print Program Layout
				</button>
			</div>

			<div className="text-center mb-10">
				<h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 mb-1">
					Worship Service Agenda
				</h2>
				<h3 className="text-3xl font-black tracking-tight text-slate-900 mb-2">
					{longDate}
				</h3>
				<p className="text-slate-500 font-medium">
					{meeting.stakeBusiness
						? "Stake Conference Assembly"
						: "Harmony Ward Service"}
				</p>
				<div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-8 print:bg-slate-100 print:border-slate-300">
				<div>
					<span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
						Presiding Officer
					</span>
					<span className="font-bold text-slate-800">{meeting.presiding}</span>
				</div>
				<div>
					<span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
						Conducting Officer
					</span>
					<span className="font-bold text-slate-800">{meeting.conducting}</span>
				</div>
			</div>

			{meeting.announcements && meeting.announcements.length > 0 && (
				<section className="mb-8" aria-labelledby="announcements-heading">
					<h4
						id="announcements-heading"
						className="text-sm uppercase tracking-wider font-extrabold text-slate-400 mb-3 border-b border-slate-100 pb-1 print:text-slate-700"
					>
						Ward Notices & Announcements
					</h4>
					<ul className="space-y-2 list-disc pl-5 text-slate-600 text-sm leading-relaxed">
						{meeting.announcements.map((announcement, index) => (
							<li key={index}>{announcement}</li>
						))}
					</ul>
				</section>
			)}

			{meeting.wardBusiness && meeting.wardBusiness.length > 0 && (
				<section className="mb-8" aria-labelledby="business-heading">
					<h4
						id="business-heading"
						className="text-sm uppercase tracking-wider font-extrabold text-slate-400 mb-3 border-b border-slate-100 pb-1 print:text-slate-700"
					>
						Administration Ward Business
					</h4>
					<ul className="space-y-3 text-slate-600 text-sm">
						{meeting.wardBusiness.map((item, index) => (
							<li
								key={index}
								className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 print:bg-none print:border-none print:p-0 flex items-start gap-2"
							>
								<span className="text-blue-500 font-bold">•</span>
								<span>{item.description}</span>
							</li>
						))}
					</ul>
				</section>
			)}

			<section
				aria-label="Meeting Agenda Items"
				className="space-y-5 text-sm sm:text-base"
			>
				<h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-400 mb-3 border-b border-slate-100 pb-1 print:text-slate-700">
					Order of Worship
				</h4>

				<div className="flex justify-between items-baseline border-b border-dashed border-slate-100 pb-2">
					<span className="font-medium text-slate-600">Opening Hymn</span>
					<span className="text-right font-bold text-slate-900">
						#{meeting.openingHymn.number} - {meeting.openingHymn.title}
					</span>
				</div>

				<div className="flex justify-between items-baseline border-b border-dashed border-slate-100 pb-2">
					<span className="font-medium text-slate-600">Invocation</span>
					<span className="text-right font-bold text-slate-900">
						{meeting.openingPrayer}
					</span>
				</div>

				<div className="flex justify-between items-baseline border-b border-dashed border-slate-100 pb-2">
					<span className="font-medium text-slate-600">Sacrament Hymn</span>
					<span className="text-right font-bold text-slate-900">
						#{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
					</span>
				</div>

				<div className="py-2 text-center text-xs uppercase tracking-widest font-bold text-slate-400 italic">
					[Administration of the Sacrament by the Priesthood]
				</div>

				{meeting.meetingType === "testimony" ? (
					<div className="bg-blue-50/30 border border-blue-100 p-5 rounded-2xl text-center print:border-slate-200">
						<span className="font-bold text-blue-700 block mb-1 uppercase text-xs">
							Fast and Testimony Session
						</span>
						<p className="text-sm text-slate-600 italic">
							The service is open for congregation members to bear testimonies.
						</p>
					</div>
				) : (
					<div className="space-y-4">
						{meeting.speakers.map((speaker, index) => (
							<div
								key={index}
								className={`flex justify-between items-start gap-4 border-b border-dashed border-slate-100 pb-2 ${
									speaker.type === "musical-number"
										? "bg-purple-50/40 border-purple-100 p-3 rounded-xl -mx-3 print:bg-none print:p-0 print:m-0"
										: ""
								}`}
							>
								<div>
									<span className="font-medium text-slate-600 block">
										{speaker.type === "musical-number"
											? "🎵 Special Musical Number"
											: "Worship Speaker"}
									</span>
									<span className="text-xs text-slate-400 block italic mt-0.5">
										{speaker.type === "musical-number" ? "Selection" : "Topic"}:{" "}
										{speaker.topic}
									</span>
								</div>
								<span className="font-bold text-slate-900 text-right">
									{speaker.name}
								</span>
							</div>
						))}
					</div>
				)}

				<div className="flex justify-between items-baseline border-b border-dashed border-slate-100 pt-2 pb-2">
					<span className="font-medium text-slate-600">Closing Hymn</span>
					<span className="text-right font-bold text-slate-900">
						#{meeting.closingHymn.number} - {meeting.closingHymn.title}
					</span>
				</div>

				<div className="flex justify-between items-baseline pb-2">
					<span className="font-medium text-slate-600">Benediction</span>
					<span className="text-right font-bold text-slate-900">
						{meeting.closingPrayer}
					</span>
				</div>
			</section>
		</div>
	);
}
