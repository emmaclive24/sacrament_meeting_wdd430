import { redirect } from 'next/navigation';
import { getCurrentSundayMeeting } from '@/lib/meetings-db';

export const dynamic = 'force-dynamic';

export default async function CurrentMeetingRedirectPage() {
  const targetedCurrentRecord = getCurrentSundayMeeting();
  redirect(`/meetings/${targetedCurrentRecord.id}`);
}
