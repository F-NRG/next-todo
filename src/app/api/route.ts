import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function GET(request: NextRequest): NextResponse<{ message: string; request: string }> {
  const requestUrl = request.url;

  return NextResponse.json({
    message: 'Hello from the API',
    request: requestUrl,
  });
}
