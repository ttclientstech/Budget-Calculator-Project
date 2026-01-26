import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const description = formData.get('description') as string;
        const serviceType = formData.get('serviceType') as string;
        // const complexity = formData.get('complexity') as string; // Optional if we want to trust AI more
        const file = formData.get('file') as File | null;

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: 'OpenAI API key not configured' },
                { status: 500 }
            );
        }

        let fileContent = '';
        if (file) {
            // Basic text extraction for text-based files
            // For MVP, we'll assume text/plain or try to read text.
            // If it's a PDF, we'd need pdf-parse, but let's start with description + text file support.
            try {
                fileContent = await file.text();
            } catch (e) {
                console.error("Error reading file:", e);
                fileContent = "[Attached file could not be read as text]";
            }
        }

      const systemPrompt = `
You are a senior technical project manager, solution architect, and delivery lead at a software services company.

A client has uploaded a project document and/or provided a project description.
You must carefully analyze the uploaded document using document understanding and information extraction and form a deep, structured understanding of the client’s project.

Your goal is NOT just to estimate cost, but to clearly communicate:
- Our understanding of the client’s business problem
- How we plan to execute the project end-to-end
- What technical approach, architecture, and tools we will use
- Why these choices are suitable for the project

IMPORTANT CONTEXT:
- The client will review this analysis.
- This represents “Our Understanding of Your Project & Execution Plan”.
- The company is flexible and capable of working with ANY suitable technology.
- You may recommend technologies where appropriate, but do not lock the client into a single stack unless explicitly required.
- Be detailed, professional, and implementation-oriented.

--------------------------------------------------

Output MUST be a valid JSON object matching this exact schema:

{
  "projectUnderstanding": {
    "summary": "string (Detailed summary of what the client wants to build)",
    "businessObjectives": ["string", "string"],
    "targetUsers": ["string", "string"],
    "keyChallenges": ["string", "string"]
  },

  "executionApproach": {
    "overallStrategy": "string (How we will approach delivery from discovery to launch)",
    "developmentMethodology": "string (e.g., Agile / Iterative)",
    "communicationAndReporting": "string (How progress will be shared with the client)"
  },

  "technicalArchitecture": {
    "frontendApproach": "string (How UI will be built, flexibility in frameworks)",
    "backendApproach": "string (API design, services, scalability approach)",
    "databaseApproach": "string (Data modeling and storage strategy)",
    "infrastructureAndDeployment": "string (Cloud, hosting, CI/CD, environments)",
    "securityConsiderations": ["string", "string"]
  },

  "featureExecutionPlan": [
    {
      "featureName": "string",
      "implementationDetails": "string (How this feature will be built and integrated)",
      "dependencies": ["string", "string"]
    }
  ],

  "projectPhases": [
    {
      "phaseName": "string (e.g., Discovery, Design, Development, Testing)",
      "activities": ["string", "string"],
      "deliverables": ["string", "string"]
    }
  ],

  "assumptionsAndFlexibility": {
    "assumptions": ["string", "string"],
    "technologyFlexibility": "string (Statement confirming flexibility across tech stacks)"
  },

  "highLevelEstimation": {
    "complexity": "Low | Medium | High | Very High",
    "estimatedTimeline": "string (e.g., 10–12 weeks)",
    "estimationNotes": "string (What influenced complexity and timeline)"
  }
}

--------------------------------------------------

GUIDELINES:
- Base your understanding strictly on the uploaded document and project description.
- If something is unclear, state reasonable assumptions explicitly.
- Do NOT include pricing breakdowns here.
- Do NOT include final cost numbers.
- Do NOT include sales language.
- Use clear, confident, professional tone suitable for enterprise clients.

Return ONLY valid JSON.
No explanations, markdown, or extra text.
`;


        const userPrompt = `
      Project Type: ${serviceType}
      Description: ${description}
      Attached File Content: ${fileContent.slice(0, 5000)} // Truncate to avoid context limits if text is huge
    `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            response_format: { type: "json_object" },
        });

        const responseContent = completion.choices[0].message.content;
        const analysisData = JSON.parse(responseContent || '{}');

        console.log("AI Analysis Response:", JSON.stringify(analysisData, null, 2));

        return NextResponse.json(analysisData);

    } catch (error) {
        console.error('AI Analysis Failed:', error);
        return NextResponse.json(
            { error: 'Failed to analyze project' },
            { status: 500 }
        );
    }
}
