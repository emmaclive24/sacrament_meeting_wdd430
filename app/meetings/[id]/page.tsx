import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import { SacramentMeeting } from '@/lib/types';

interface DynamicMeetingPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

async function fetchMeetingDetailData(meetingIdStr: string): Promise<SacramentMeeting | null> {
  const apiEndpointBase = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  try {
    const rawAPIResponse = await fetch(`${apiEndpointBase}/api/meetings/${meetingIdStr}`, {
      cache: 'no-store'
    });
    
    if (rawAPIResponse.status === 400 || rawAPIResponse.status === 404) {
      return null;
    }
    
    if (!rawAPIResponse.ok) {
      throw new Error('API server boundary error');
    }
    
    return await rawAPIResponse.json();
  } catch (error) {
    console.error(`Error mapping parameter payload for ID: ${meetingIdStr}`, error);
    return null;
  }
}

export default async function IndividualMeetingDetailPage(props: DynamicMeetingPageProps) {
  const resolvedParameters = await props.params;
  const targetMeetingRecord = await fetchMeetingDetailData(resolvedParameters.id);

  if (!targetMeetingRecord) {
    notFound();
  }

  return (
    <div className="py-2">
      <MeetingDetail meeting={targetMeetingRecord} />
    </div>
  );
}
