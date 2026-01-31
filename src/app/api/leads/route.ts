import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Lead from '@/models/Lead';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Basic validation
        if (!body.name || !body.email || !body.projectDescription) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        await dbConnect();

        const lead = await Lead.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            projectDescription: body.projectDescription,
            domain: body.domain,
            country: body.country,
            source: 'Website Funnel'
        });

        return NextResponse.json({ success: true, leadId: lead._id }, { status: 201 });

    } catch (error) {
        console.error('Lead Creation Error:', error);
        return NextResponse.json(
            { error: 'Failed to create lead' },
            { status: 500 }
        );
    }
}
