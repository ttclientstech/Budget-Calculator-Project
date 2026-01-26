"use client";

import Link from "next/link";
import {
    CheckCircle2,
    BarChart3,
    ArrowLeft,
    Globe,
    Smartphone,
    Database,
    Cpu,
    Cloud,
    Code2,
    Calendar,
    Users,
    Zap,
    Shield,
    Clock,
    Download,
    Mail,
    Phone,
    FileText,
    ArrowRight
} from "lucide-react";


import jsPDF from "jspdf";
import { useState, useRef, useEffect } from "react";
import PdfReport from "@/components/analysis/PdfReport";

export default function AnalysisPage() {
    const [isExporting, setIsExporting] = useState(false);
    const [reportData, setReportData] = useState<any>(null);
    // We use a separate ref for the hidden print container to ensure full-resolution capture
    const printRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. Try to get data from Session Storage (Real Flow)
        const storedData = sessionStorage.getItem("aiReportData");

        if (storedData) {
            try {
                console.log("Raw Session Data:", storedData);
                const parsedData = JSON.parse(storedData);
                console.log("Parsed Report Data:", parsedData);

                if (parsedData && parsedData.analysis) {
                    setReportData(parsedData);
                    return;
                } else {
                    console.warn("Parsed data missing 'analysis' property", parsedData);
                }
            } catch (e) {
                console.error("Failed to parse report data", e);
            }
        }

        // 2. Fallback to Mock Data Simulation if no real data found
        console.log("No valid session data found, falling back to simulation.");
        const timer = setTimeout(() => {
            setReportData({
                client: {
                    name: "Alex Morgan",
                    email: "alex.morgan@example.com",
                    contact: "+1 (555) 012-3456",
                    country: "United States",
                    currency: "USD",
                    flag: "🇺🇸"
                },
                analysis: {
                    projectUnderstanding: {
                        summary: "The client aims to build a comprehensive SaaS platform for project management. The goal is to streamline collaboration and improve productivity for remote teams.",
                        businessObjectives: ["Increase team efficiency", "Centralize project tracking", "Enable real-time collaboration"],
                        targetUsers: ["Project Managers", "Remote Teams", "Freelancers"],
                        keyChallenges: ["Data synchronization", "Scalability", "User adoption"]
                    },
                    executionApproach: {
                        overallStrategy: "We will adopt an Agile methodology, delivering features in 2-week sprints. This allows for continuous feedback and adaptation.",
                        developmentMethodology: "Agile / Scrum",
                        communicationAndReporting: "Weekly progress reports and daily stand-ups via Slack/Teams."
                    },
                    technicalArchitecture: {
                        frontendApproach: "Next.js for a performant, SEO-friendly responsive UI.",
                        backendApproach: "Node.js microservices for scalability and ease of maintenance.",
                        databaseApproach: "PostgreSQL for relational data and Redis for caching.",
                        infrastructureAndDeployment: "AWS (ECS, RDS, S3) with CI/CD via GitHub Actions.",
                        securityConsiderations: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Data Encryption at Rest"]
                    },
                    featureExecutionPlan: [
                        {
                            featureName: "User Authentication",
                            implementationDetails: "Secure login/signup using NextAuth.js with social providers.",
                            dependencies: ["Database Setup"]
                        },
                        {
                            featureName: "Project Dashboard",
                            implementationDetails: "Kanban board and list views with drag-and-drop functionality.",
                            dependencies: ["User Authentication", "API Layer"]
                        }
                    ],
                    projectPhases: [
                        {
                            phaseName: "Discovery",
                            activities: ["Requirement Analysis", "Tech Stack Selection"],
                            deliverables: ["SRS Document", "Architecture Diagram"]
                        },
                        {
                            phaseName: "Development",
                            activities: ["Frontend Implementation", "Backend API Development"],
                            deliverables: ["MVP Release", "Source Code"]
                        }
                    ],
                    assumptionsAndFlexibility: {
                        assumptions: ["Client provides brand assets", "Third-party APIs are stable"],
                        technologyFlexibility: "We are flexible to switch to Python/Django if data science features are prioritized."
                    },
                    highLevelEstimation: {
                        complexity: "High",
                        estimatedTimeline: "12-14 Weeks",
                        estimationNotes: "Timeline depends on final scope approval."
                    }
                }
            });
        }, 1000); // Reduced delay for better UX if fallback is needed
        return () => clearTimeout(timer);
    }, []);

    const clientData = reportData ? reportData.client : {
        name: "Guest User",
        email: "guest@example.com",
        contact: "+1 (555) 000-0000",
        country: "Unknown",
        currency: "USD",
        flag: "🏳️"
    };

    const analysisData = reportData ? reportData.analysis : null;

    const handleExportPDF = async () => {
        if (!printRef.current) return;

        setIsExporting(true);

        try {
            // dynamic import for better performance
            const { toPng } = await import('html-to-image');
            const jsPDF = (await import('jspdf')).default;

            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const pages = printRef.current.querySelectorAll('.print-page');

            for (let i = 0; i < pages.length; i++) {
                const page = pages[i] as HTMLElement;

                // Capture using html-to-image -> usually handles CSS transforms/filters better
                const imgData = await toPng(page, {
                    quality: 1.0,
                    pixelRatio: 2,
                    backgroundColor: "#ffffff"
                });

                const imgProps = pdf.getImageProperties(imgData);
                const imgWidth = imgProps.width;
                const imgHeight = imgProps.height;

                // 1:1 A4 Match
                const ratio = pdfWidth / imgWidth;
                const renderHeight = imgHeight * ratio;

                if (i > 0) pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, renderHeight);
            }

            pdf.save(`Talentronaut_Project_Analysis_${clientData.name.replace(/\s+/g, '_')}.pdf`);

        } catch (error) {
            console.error("PDF Export Failed", error);
            alert("Failed to export PDF. Please try again.");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-100 pb-20 font-sans relative">

            {/* --- HEADER --- */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 no-print shadow-sm">
                <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-muted-foreground">
                            <ArrowLeft size={20} />
                        </Link>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900 leading-tight">Project Analysis</h1>
                            <p className="text-xs text-muted-foreground hidden md:block">Reference ID: #PROJ-2024-8832</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                            <Phone size={16} /> Contact Support
                        </button>
                        <button
                            onClick={handleExportPDF}
                            disabled={isExporting}
                            className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-wait shadow-sm"
                        >
                            {isExporting ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    <Download size={16} /> <span className="hidden sm:inline">Export Report</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* --- DOCUMENT VIEWER (VISIBLE) --- */}
            <div className="container mx-auto py-8 md:py-12 flex justify-center overflow-x-hidden">
                <div className="w-full flex justify-center">
                    {!reportData ? (
                        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <h2 className="text-xl font-bold text-gray-700">Generating Analysis...</h2>
                            <p className="text-gray-500 max-w-md">
                                Please wait while our AI analyzes your project requirements and builds a comprehensive strategic report.
                            </p>
                        </div>
                    ) : (
                        <div className="origin-top transform scale-[0.4] xs:scale-[0.5] sm:scale-[0.6] md:scale-[0.8] xl:scale-100 transition-transform duration-300 mb-12">
                            <PdfReport
                                clientData={clientData}
                                analysisData={analysisData}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* --- HIDDEN PRINT TEMPLATE (FULL RESOLUTION) --- */}
            {/* Placed at 0,0 but behind everything (z-50). No opacity to ensure capture works, main bg covers it. */}
            {reportData && (
                <div className="fixed top-0 left-0 -z-50 pointer-events-none">
                    <PdfReport
                        ref={printRef}
                        clientData={clientData}
                        analysisData={analysisData}
                    />
                </div>
            )}

        </main>
    );
}
