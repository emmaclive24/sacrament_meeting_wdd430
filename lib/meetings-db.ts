import { SacramentMeeting } from "./types";

const meetingsDatabase: SacramentMeeting[] = [
	{
		id: 1,
		date: "2026-07-05",
		meetingType: "regular",
		presiding: "Bishop Aaron Davis",
		conducting: "Brother Marcus Vance",
		announcements: [
			"Ward youth temple assignment scheduled for next Saturday morning at 8:00 AM.",
			"Family history training consultation workshop opens this Wednesday evening.",
		],
		openingHymn: { number: 5, title: "High on the Mountain Top" },
		openingPrayer: "Sister Sarah Jenkins",
		wardBusiness: [
			{
				description: "Release Sister Clara Croft as Sunday School Coordinator.",
			},
			{ description: "Sustain Brother Timothy Teal as Assistant Ward Clerk." },
		],
		stakeBusiness: false,
		sacramentHymn: { number: 169, title: "As Now We Take the Sacrament" },
		speakers: [
			{
				name: "Elder John Doe",
				topic: "Faith in Christ During Trials",
				type: "speaker",
			},
			{
				name: "Ward Choir Selection",
				topic: "Abide with Me!",
				type: "musical-number",
			},
			{
				name: "Sister Emily Stone",
				topic: "The Power of Daily Scripture Study",
				type: "speaker",
			},
		],
		closingHymn: { number: 85, title: "Guide Us, O Thou Great Jehovah" },
		closingPrayer: "Brother Robert Gable",
	},
	{
		id: 2,
		date: "2026-07-12",
		meetingType: "testimony",
		presiding: "Bishop Aaron Davis",
		conducting: "Brother David Miller",
		announcements: [
			"Blood drive donor registration lines open in the cultural hall after block meetings.",
		],
		openingHymn: { number: 134, title: "I Believe in Christ" },
		openingPrayer: "Brother Alan Reynolds",
		wardBusiness: [],
		stakeBusiness: false,
		sacramentHymn: { number: 172, title: "In Humility, Our Savior" },
		speakers: [
			{
				name: "Congregation Members",
				topic: "Spontaneous Testimony Bearers",
				type: "speaker",
			},
		],
		closingHymn: { number: 270, title: "I Know That My Redeemer Lives" },
		closingPrayer: "Sister Martha Vance",
	},
	{
		id: 3,
		date: "2026-07-19",
		meetingType: "stake",
		presiding: "President Liam Vance (Stake Presidency)",
		conducting: "High Councilor James West",
		announcements: [
			"Stake general priesthood leadership meeting session schedules broadcast via notice board.",
		],
		openingHymn: { number: 2, title: "The Spirit of God" },
		openingPrayer: "Sister Chloe Young",
		wardBusiness: [],
		stakeBusiness: true,
		sacramentHymn: { number: 184, title: "Upon the Cross of Calvary" },
		speakers: [
			{
				name: "Sister Linda Blake",
				topic: "Covenant Pathway Preservation",
				type: "speaker",
			},
			{
				name: "President Liam Vance",
				topic: "Strengthening Stakes of Zion Globally",
				type: "speaker",
			},
		],
		closingHymn: { number: 227, title: "There Is Sunshine in My Soul Today" },
		closingPrayer: "Brother Arthur Pendelton",
	},
	{
		id: 4,
		date: "2026-07-26",
		meetingType: "regular",
		presiding: "Bishop Aaron Davis",
		conducting: "Brother Marcus Vance",
		announcements: [
			"Primary Activity Days grouping assemblies meet here this Wednesday afternoon.",
		],
		openingHymn: { number: 19, title: "We Thank Thee, O God, for a Prophet" },
		openingPrayer: "Sister Jennifer Ramos",
		wardBusiness: [
			{ description: "Sustain Sister Megan Fox as Primary Teacher." },
		],
		stakeBusiness: false,
		sacramentHymn: { number: 181, title: "Jesus of Nazareth, Savior and King" },
		speakers: [
			{
				name: "Brother Ethan Hunt",
				topic: "Answering the Divine Call to Serve",
				type: "speaker",
			},
			{
				name: "Sister Rebecca Hunt",
				topic: "Building Holy Homes on Solid Rock",
				type: "speaker",
			},
		],
		closingHymn: { number: 100, title: "Nearer, My God, to Thee" },
		closingPrayer: "Brother Felix Vance",
	},
	{
		id: 5,
		date: "2026-08-02",
		meetingType: "general",
		presiding: "Bishop Aaron Davis",
		conducting: "Brother Marcus Vance",
		announcements: [
			"Ward Welfare Assignment shift staffing openings available at the regional Welfare Cannery.",
		],
		openingHymn: { number: 6, title: "Redeemer of Israel" },
		openingPrayer: "Brother Simon Peter",
		wardBusiness: [],
		stakeBusiness: false,
		sacramentHymn: { number: 187, title: "Memories of Galilee" },
		speakers: [
			{
				name: "Sister Mary Magdalene",
				topic: "Witnesses of His Endless Grace",
				type: "speaker",
			},
			{
				name: "Brother Thomas Didymus",
				topic: "Overcoming Modern Doubt Through Faith",
				type: "speaker",
			},
		],
		closingHymn: { number: 292, title: "O My Father" },
		closingPrayer: "Sister Joanna Chu",
	},
];

export function getMeetings(dateFilter?: string): SacramentMeeting[] {
	if (dateFilter) {
		return meetingsDatabase.filter((m) => m.date === dateFilter);
	}
	return [...meetingsDatabase].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
}

export function getMeetingById(id: number): SacramentMeeting | undefined {
	return meetingsDatabase.find((m) => m.id === id);
}

export function getCurrentSundayMeeting(): SacramentMeeting {
	const now = new Date();
	const sortedByProximity = [...meetingsDatabase].sort((a, b) => {
		const diffA = Math.abs(new Date(a.date).getTime() - now.getTime());
		const diffB = Math.abs(new Date(b.date).getTime() - now.getTime());
		return diffA - diffB;
	});
	return sortedByProximity[0] || meetingsDatabase[0];
}
