import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Log the form submission locally
        console.log('Form submission received:', {
            form_slug: body.form_slug,
            data: body.data,
            source_url: body.source_url,
            referrer: body.referrer,
            timestamp: new Date().toISOString()
        });

        // Forward the request to the external Ledger1 CRM
        const externalEndpoint = 'https://crm.ledger1.ai/api/forms/submit';

        const externalResponse = await fetch(externalEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const result = await externalResponse.json();

        console.log('CRM response:', result);

        // Return the CRM's response to the client
        return NextResponse.json(result, { status: externalResponse.status });

    } catch (error) {
        console.error('Form submission proxy error:', error);
        return NextResponse.json(
            {
                success: false,
                error: "Submission failed"
            },
            { status: 500 }
        );
    }
}
