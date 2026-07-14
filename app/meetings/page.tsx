import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

export const dynamic = "force-dynamic";

async function fetchAllMeetingsFromAPI(): Promise<SacramentMeeting[]> {
	const apiEndpointBase =
		process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

	try {
		const apiCallResponse = await fetch(`${apiEndpointBase}/api/meetings`, {
			cache: "no-store",
		});

		if (!apiCallResponse.ok) {
			throw new Error("API server boundary returned invalid read status");
		}

		return await apiCallResponse.json();
	} catch (error) {
		console.error("Data acquisition layer failure:", error);
		return [];
	}
}

export default async function AllMeetingsDashboardPage() {
	const recordsDataset = await fetchAllMeetingsFromAPI();

	return (
		<div className="space-y-6">
			<header>
				<h2 className="text-2xl font-black tracking-tight text-slate-900">
					Scheduled Ward Services
				</h2>
				<p className="text-sm text-slate-500">
					Total active agenda records found: {recordsDataset.length}
				</p>
			</header>

			{recordsDataset.length === 0 ? (
				<div className="w-full border border-dashed border-slate-300 bg-white rounded-3xl p-12 text-center">
					<p className="text-slate-500 font-medium">
						No meeting records are currently available in the system.
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{recordsDataset.map((meetingRecord) => (
						<MeetingCard key={meetingRecord.id} meeting={meetingRecord} />
					))}
				</div>
			)}
		</div>
	);
}

