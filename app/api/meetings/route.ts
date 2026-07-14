import { NextRequest, NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const resolvedParams = await context.params;
    const pathIdStr = resolvedParams.id;
    const numericId = parseInt(pathIdStr, 10);

    if (isNaN(numericId)) {
      return NextResponse.json(
        { error: 'Bad Request: Identity path parameter must be a valid integer' },
        { status: 400 }
      );
    }

    const requestedMeeting = getMeetingById(numericId);
    if (!requestedMeeting) {
      return NextResponse.json(
        { error: `Not Found: No entry matching identity key ${numericId}` },
        { status: 404 }
      );
    }

    return NextResponse.json(requestedMeeting, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal pipeline route server fault' }, { status: 500 });
  }
}
