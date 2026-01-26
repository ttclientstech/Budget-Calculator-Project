import {
    Users,
    Mail,
    Phone,
    Globe,
    Calendar,
    Code2,
    CheckCircle2,
    Smartphone,
    Database,
    Shield,
    Cloud,
    Zap,
    Clock,
    BarChart3,
    Cpu,
    Target,
    Layout,
    GitBranch,
    Server,
    Lock,
    Rocket
} from "lucide-react";
import React, { forwardRef } from "react";

// Types for props matching the new API schema
export interface PDFReportProps {
    clientData: {
        name: string;
        email: string;
        contact: string;
        country: string;
        flag: string;
        currency: string;
    };
    analysisData: {
        projectUnderstanding: {
            summary: string;
            businessObjectives: string[];
            targetUsers: string[];
            keyChallenges: string[];
        };
        executionApproach: {
            overallStrategy: string;
            developmentMethodology: string;
            communicationAndReporting: string;
        };
        technicalArchitecture: {
            frontendApproach: string;
            backendApproach: string;
            databaseApproach: string;
            infrastructureAndDeployment: string;
            securityConsiderations: string[];
        };
        featureExecutionPlan: {
            featureName: string;
            implementationDetails: string;
            dependencies: string[];
        }[];
        projectPhases: {
            phaseName: string;
            activities: string[];
            deliverables: string[];
        }[];
        assumptionsAndFlexibility: {
            assumptions: string[];
            technologyFlexibility: string;
        };
        highLevelEstimation: {
            complexity: string;
            estimatedTimeline: string;
            estimationNotes: string;
        };
    } | null;
}

const PdfReport = forwardRef<HTMLDivElement, PDFReportProps>(({
    clientData,
    analysisData
}, ref) => {

    if (!analysisData) return null;

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Brand Colors (Matching Global CSS)
    // Background: hsl(26 100% 99%) -> #fffcfb
    // Foreground: hsl(220 10% 29%) -> #434d5b
    // Primary: hsl(9 69% 53%) -> #D94632
    // Secondary: hsl(17 100% 94%) -> #ffe0d1

    // A4 Aspect Ratio Container Style
    // A4 is 210mm x 297mm. At 96 DPI, that's approx 794px x 1123px.
    const pageStyle = "w-[794px] h-[1123px] bg-[#fffcfb] relative overflow-hidden flex flex-col shadow-lg mb-8 mx-auto print-page origin-top-left font-serif text-[#434d5b]";
    const contentPadding = "px-12 py-12 flex-1 flex flex-col";

    return (
        <div ref={ref} className="bg-[#f3f4f6] p-4 md:p-8">
            {/* --- PAGE 1: COVER PAGE --- */}
            <div id="pdf-page-1" className={pageStyle}>
                {/* Subtle Orange Glows for Light Theme */}
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
                    style={{ background: 'rgba(217, 70, 50, 0.05)', filter: 'blur(100px)', transform: 'none', right: '-200px', top: '-200px' }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
                    style={{ background: 'rgba(249, 115, 22, 0.05)', filter: 'blur(100px)', transform: 'none', left: '-200px', bottom: '-200px' }}
                ></div>

                <div className={contentPadding}>
                    {/* Header Logo */}
                    <div className="flex justify-between items-start mb-20 relative z-10">
                        <div className="text-2xl font-bold tracking-tight text-[#D94632]">Talentronaut.</div>
                        <div className="text-right text-[#94a3b8] text-sm font-sans">
                            <p>CONFIDENTIAL</p>
                            <p>Ref: #PROJ-2024-8832</p>
                        </div>
                    </div>

                    {/* Main Title */}
                    <div className="flex-1 flex flex-col justify-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-6"
                            style={{
                                background: '#ffe0d1', // Secondary
                                border: '1px solid rgba(217, 70, 50, 0.2)',
                                color: '#D94632' // Primary
                            }}
                        >
                            <CheckCircle2 size={16} /> <span className="font-sans font-bold">Project Proposal</span>
                        </div>
                        <h1 className="text-6xl font-bold leading-tight mb-6 text-[#1e293b]">
                            Strategic Project <br />
                            <span style={{ color: '#D94632' }}>Analysis & Plan</span>
                        </h1>
                        <p className="text-xl text-[#64748b] font-light max-w-lg leading-relaxed font-sans">
                            Comprehensive technical roadmap, execution strategy, and architectural blueprint tailored to your vision.
                        </p>
                    </div>

                    {/* Footer Details */}
                    <div className="border-t border-[#e2e8f0] pt-8 mt-auto relative z-10">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm text-[#94a3b8] uppercase tracking-widest mb-1 font-sans font-bold">Prepared For</p>
                                <p className="text-2xl font-bold text-[#1e293b]">{clientData.name}</p>
                                <p className="text-[#64748b] font-sans flex items-center gap-2">{clientData.flag} {clientData.country}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-[#94a3b8] uppercase tracking-widest mb-1 font-sans font-bold">Date</p>
                                <p className="text-xl font-medium text-[#1e293b]">{currentDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* Website Footer */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                        <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                            https://www.talentronaut.in/
                        </a>
                    </div>
                </div>
            </div>

            {/* --- PAGE 2: COMPANY PROFILE --- */}
            <div id="pdf-page-2" className={pageStyle}>
                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-10 flex justify-between items-end">
                        <div className="w-3/4">
                            <h2 className="text-3xl font-bold text-[#1e293b]">Company Profile</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Who we are and how we work</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">02</div>
                    </div>

                    <div className="space-y-12 font-sans">
                        {/* Who We Are */}
                        <div>
                            <h3 className="text-[#D94632] font-bold text-lg uppercase tracking-wider mb-4">Who We Are</h3>
                            <p className="text-[#334155] leading-relaxed text-justify">
                                Talentronaut Technologies is a premium, full-stack software development agency based in India,
                                serving clients across the globe. We specialize in building secure, scalable, and high-performance
                                custom software solutions that empower enterprises, startups, and visionary founders to innovate and grow.
                                <br /><br />
                                With deep expertise in modern technologies and cross-industry insights, we turn bold ideas into
                                future-ready digital products.
                            </p>
                        </div>

                        {/* Our Process */}
                        <div>
                            <h3 className="text-[#D94632] font-bold text-lg uppercase tracking-wider mb-6">Our Process</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-[#1e293b]">Discover & Define</h4>
                                        <p className="text-sm text-[#64748b]">Ideation workshops, requirement mapping & stakeholder alignment</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-[#1e293b]">Design</h4>
                                        <p className="text-sm text-[#64748b]">Prototyping, UI/UX creation, system architecture blueprints</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-[#1e293b]">Develop</h4>
                                        <p className="text-sm text-[#64748b]">Agile-based development cycles with regular releases</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-[#1e293b]">Test & Deploy</h4>
                                        <p className="text-sm text-[#64748b]">QA, performance audits, secure deployment</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-sm shrink-0">5</div>
                                    <div>
                                        <h4 className="font-bold text-[#1e293b]">Support & Scale</h4>
                                        <p className="text-sm text-[#64748b]">Monitoring, iteration, new features, and scaling support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Mission */}
                        <div className="bg-[#fff7ed] p-6 rounded-xl border border-[#ffedd5]">
                            <h3 className="text-[#9a3412] font-bold text-lg uppercase tracking-wider mb-2">Our Mission</h3>
                            <p className="text-[#7c2d12] font-medium italic">
                                "To engineer powerful software experiences that drive business growth, user engagement, and operational efficiency."
                            </p>
                        </div>
                    </div>
                    {/* Website Footer */}
                    <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center">
                        <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                            https://www.talentronaut.in/
                        </a>
                    </div>
                </div>
            </div>

            {/* --- PAGE 3: PROJECT UNDERSTANDING --- */}
            <div id="pdf-page-3" className={pageStyle}>
                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-10 flex justify-between items-end">
                        <div className="w-3/4">
                            <h2 className="text-3xl font-bold text-[#1e293b]">Project Understanding</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Our interpretation of your vision and business goals</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">03</div>
                    </div>

                    <div className="space-y-8 font-sans">
                        {/* Summary */}
                        <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
                            <h3 className="text-[#D94632] font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Target size={18} /> Executive Summary
                            </h3>
                            <p className="text-[#334155] leading-relaxed">
                                {analysisData.projectUnderstanding.summary}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {/* Objectives */}
                            <div>
                                <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-[#10b981]" /> Business Objectives
                                </h3>
                                <ul className="space-y-3">
                                    {analysisData.projectUnderstanding.businessObjectives.map((obj, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-[#475569]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0"></span>
                                            {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Target Users */}
                            <div>
                                <h3 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                                    <Users size={18} className="text-[#3b82f6]" /> Target Audience
                                </h3>
                                <ul className="space-y-3">
                                    {analysisData.projectUnderstanding.targetUsers.map((user, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-[#475569]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 shrink-0"></span>
                                            {user}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Key Challenges */}
                        <div className="bg-[#fff7ed] p-6 rounded-xl border border-[#ffedd5]">
                            <h3 className="font-bold text-[#9a3412] mb-4 flex items-center gap-2">
                                <Zap size={18} /> Key Challenges & Solutions
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {analysisData.projectUnderstanding.keyChallenges.map((challenge, i) => (
                                    <div key={i} className="bg-white p-3 rounded-lg border border-[#fed7aa] text-sm text-[#7c2d12] shadow-sm">
                                        {challenge}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Website Footer */}
                    <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center">
                        <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                            https://www.talentronaut.in/
                        </a>
                    </div>
                </div>
            </div>

            {/* --- PAGE 4: EXECUTION STRATEGY --- */}
            <div id="pdf-page-4" className={pageStyle}>
                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-10 flex justify-between items-end">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1e293b]">Execution Strategy</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Methodology and delivery roadmap</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">04</div>
                    </div>

                    <div className="space-y-8 font-sans">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Methodology */}
                            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#e0f2fe] text-[#0284c7] rounded-lg shrink-0">
                                        <GitBranch size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1e293b] text-lg mb-2">Development Methodology</h3>
                                        <p className="text-[#64748b] text-sm mb-3">{analysisData.executionApproach.developmentMethodology}</p>
                                        <p className="text-[#334155] text-sm leading-relaxed border-t border-dashed border-[#e2e8f0] pt-3">
                                            {analysisData.executionApproach.overallStrategy}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Communication */}
                            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#fce7f3] text-[#db2777] rounded-lg shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1e293b] text-lg mb-2">Communication & Reporting</h3>
                                        <p className="text-[#334155] text-sm leading-relaxed">
                                            {analysisData.executionApproach.communicationAndReporting}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Website Footer */}
                <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center pb-8">
                    <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                        https://www.talentronaut.in/
                    </a>
                </div>
            </div>

            {/* --- PAGE 5: PROJECT PHASES --- */}
            <div id="pdf-page-5" className={pageStyle}>
                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-10 flex justify-between items-end">
                        <div className="w-3/4">
                            <h2 className="text-3xl font-bold text-[#1e293b]">Project Phases</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Step-by-step rollout plan</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">05</div>
                    </div>

                    <div className="font-sans h-full flex flex-col justify-center">
                        <div className="relative border-l-2 border-[#e2e8f0] ml-3 pl-8 space-y-10">
                            {analysisData.projectPhases.map((phase, i) => (
                                <div key={i} className="relative">
                                    <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-[#D94632] text-white flex items-center justify-center text-xs font-bold border-4 border-[#fffcfb]">
                                        {i + 1}
                                    </span>
                                    <h4 className="font-bold text-[#1e293b] text-xl mb-4">{phase.phaseName}</h4>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-[#f8fafc] p-4 rounded-xl">
                                            <p className="text-xs font-bold uppercase text-[#94a3b8] mb-3">Activities</p>
                                            <ul className="space-y-2">
                                                {phase.activities.map((act, j) => (
                                                    <li key={j} className="text-sm text-[#475569] flex gap-2">
                                                        <span className="text-[#cbd5e1]">•</span> {act}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm">
                                            <p className="text-xs font-bold uppercase text-[#D94632] mb-3">Deliverables</p>
                                            <ul className="space-y-2">
                                                {phase.deliverables.map((del, j) => (
                                                    <li key={j} className="text-sm text-[#334155] font-medium flex items-center gap-2">
                                                        <CheckCircle2 size={14} className="text-[#D94632]" /> {del}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Website Footer */}
                    <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center">
                        <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                            https://www.talentronaut.in/
                        </a>
                    </div>
                </div>
            </div>

            {/* --- PAGE 6: TECHNICAL ARCHITECTURE --- */}
            <div id="pdf-page-6" className={pageStyle}>
                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-10 flex justify-between items-end">
                        <div className="w-3/4">
                            <h2 className="text-3xl font-bold text-[#1e293b]">Technical Architecture</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Proposed technology stack and infrastructure</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">06</div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 font-sans">
                        {/* Stack Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <div className="flex items-center gap-3 mb-3 text-[#3b82f6]">
                                    <Layout size={20} />
                                    <h3 className="font-bold text-[#1e293b]">Frontend</h3>
                                </div>
                                <p className="text-sm text-[#64748b] leading-relaxed">
                                    {analysisData.technicalArchitecture.frontendApproach}
                                </p>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <div className="flex items-center gap-3 mb-3 text-[#10b981]">
                                    <Server size={20} />
                                    <h3 className="font-bold text-[#1e293b]">Backend</h3>
                                </div>
                                <p className="text-sm text-[#64748b] leading-relaxed">
                                    {analysisData.technicalArchitecture.backendApproach}
                                </p>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <div className="flex items-center gap-3 mb-3 text-[#f59e0b]">
                                    <Database size={20} />
                                    <h3 className="font-bold text-[#1e293b]">Database</h3>
                                </div>
                                <p className="text-sm text-[#64748b] leading-relaxed">
                                    {analysisData.technicalArchitecture.databaseApproach}
                                </p>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <div className="flex items-center gap-3 mb-3 text-[#8b5cf6]">
                                    <Cloud size={20} />
                                    <h3 className="font-bold text-[#1e293b]">Infrastructure</h3>
                                </div>
                                <p className="text-sm text-[#64748b] leading-relaxed">
                                    {analysisData.technicalArchitecture.infrastructureAndDeployment}
                                </p>
                            </div>
                        </div>

                        {/* Security Section */}
                        <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-6 mt-4">
                            <h3 className="font-bold text-[#166534] mb-4 flex items-center gap-2">
                                <Shield size={20} /> Security Measures
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {analysisData.technicalArchitecture.securityConsiderations.map((sec, i) => (
                                    <div key={i} className="flex gap-2 items-start">
                                        <Lock size={14} className="text-[#16a34a] mt-1 shrink-0" />
                                        <span className="text-sm text-[#14532d]">{sec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Flexibility Note */}
                        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6">
                            <h3 className="font-bold text-[#334155] text-sm uppercase tracking-wider mb-2">Technology Flexibility</h3>
                            <p className="text-sm text-[#64748b] italic">
                                "{analysisData.assumptionsAndFlexibility.technologyFlexibility}"
                            </p>
                        </div>
                    </div>
                </div>
                {/* Website Footer */}
                <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center pb-8">
                    <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                        https://www.talentronaut.in/
                    </a>
                </div>
            </div>

            {/* --- PAGE 7: FEATURE PLAN --- */}
            <div id="pdf-page-7" className={pageStyle}>
                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-10 flex justify-between items-end">
                        <div className="w-3/4">
                            <h2 className="text-3xl font-bold text-[#1e293b]">Feature Plan</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Detailed implementation breakdown</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">07</div>
                    </div>

                    <div className="rounded-xl border border-[#e2e8f0] overflow-hidden bg-white mb-8">
                        <table className="w-full text-left font-sans">
                            <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-[#64748b] uppercase tracking-wider w-1/4">Feature</th>
                                    <th className="px-6 py-4 text-xs font-bold text-[#64748b] uppercase tracking-wider">Implementation Details</th>
                                    <th className="px-6 py-4 text-xs font-bold text-[#64748b] uppercase tracking-wider w-1/4">Dependencies</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {analysisData.featureExecutionPlan.map((feature, idx) => (
                                    <tr key={idx} className="bg-white">
                                        <td className="px-6 py-4 align-top">
                                            <span className="font-bold text-[#1e293b] text-sm">{feature.featureName}</span>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            <p className="text-sm text-[#64748b] leading-relaxed">
                                                {feature.implementationDetails}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            <div className="flex flex-wrap gap-2">
                                                {feature.dependencies.map((dep, dIdx) => (
                                                    <span key={dIdx} className="px-2 py-0.5 bg-[#f1f5f9] text-[#475569] text-[10px] rounded font-medium border border-[#e2e8f0]">
                                                        {dep}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-[#fff7ed] p-6 rounded-xl border border-[#ffedd5] font-sans">
                        <h4 className="text-sm font-bold text-[#9a3412] uppercase mb-3">Core Assumptions</h4>
                        <ul className="space-y-2">
                            {analysisData.assumptionsAndFlexibility.assumptions.map((assumption, i) => (
                                <li key={i} className="flex gap-2 text-sm text-[#c2410c]">
                                    <span className="text-[#fb923c]">•</span> {assumption}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Website Footer */}
                <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center pb-8">
                    <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                        https://www.talentronaut.in/
                    </a>
                </div>
            </div>



            {/* --- PAGE 9: CONCLUSION --- */}
            <div id="pdf-page-8" className={pageStyle}>
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full"
                        style={{ background: 'rgba(217, 70, 50, 0.05)', filter: 'blur(80px)' }}
                    ></div>
                </div>

                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-16 flex justify-between items-end relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1e293b]">Summary & Next Steps</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Estimation and path forward</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">09</div>
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto w-full">
                        {/* Estimation Card */}
                        <div className="rounded-3xl p-10 bg-white border border-[#e2e8f0] shadow-xl mb-12">
                            <div className="text-center mb-8">
                                <h3 className="text-lg font-medium text-[#64748b] mb-2 font-sans">High-Level Estimation</h3>
                                <div className="text-5xl font-bold text-[#D94632] mb-4">{analysisData.highLevelEstimation.estimatedTimeline}</div>
                                <div className="inline-block px-4 py-1 bg-[#fff7ed] text-[#c2410c] text-sm font-bold rounded-full uppercase tracking-wide">
                                    Complexity: {analysisData.highLevelEstimation.complexity}
                                </div>
                            </div>
                            <p className="text-center text-[#64748b] text-sm font-sans italic border-t border-[#e2e8f0] pt-6">
                                "{analysisData.highLevelEstimation.estimationNotes}"
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="space-y-6 text-center">
                            <h3 className="text-xl font-bold text-[#1e293b]">Ready to Proceed?</h3>

                            <div className="grid grid-cols-2 gap-4 font-sans">
                                <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] hover:border-[#D94632] transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-3 text-[#D94632] group-hover:bg-[#D94632] group-hover:text-white transition-colors">
                                        <Calendar size={20} />
                                    </div>
                                    <h4 className="font-bold text-[#1e293b] text-sm mb-1">Book a Discovery Call</h4>
                                    <p className="text-xs text-[#64748b]">Deep dive into requirements</p>
                                </div>
                                <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] hover:border-[#D94632] transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-3 text-[#D94632] group-hover:bg-[#D94632] group-hover:text-white transition-colors">
                                        <Rocket size={20} />
                                    </div>
                                    <h4 className="font-bold text-[#1e293b] text-sm mb-1">Start Sprint Zero</h4>
                                    <p className="text-xs text-[#64748b]">Begin initial setup & design</p>
                                </div>
                            </div>

                            <div className="pt-12">
                                <p className="text-xs text-[#94a3b8] font-sans">
                                    &copy; {new Date().getFullYear()} Talentronaut Technologies. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Website Footer */}
                <div className="mt-auto pt-8 pb-4 flex justify-center relative z-10">
                    <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                        https://www.talentronaut.in/
                    </a>
                </div>
            </div>

            {/* --- PAGE 8: SUCCESS STORIES --- */}
            <div id="pdf-page-9" className={pageStyle}>
                <div className={contentPadding}>
                    <div className="border-b border-[#e2e8f0] pb-6 mb-10 flex justify-between items-end">
                        <div className="w-3/4">
                            <h2 className="text-3xl font-bold text-[#1e293b]">Our Success Stories</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Proven track record of delivering excellence</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">08</div>
                    </div>

                    <div className="flex-1 flex flex-col font-sans relative z-10">

                        {/* Projects Grid */}
                        <div className="grid grid-cols-3 gap-x-6 gap-y-10 items-start mb-10">

                            {/* Project 1: Spazorlab */}
                            <div className="flex flex-col h-full">
                                <div className="h-20 flex items-center justify-start mb-4">
                                    <img src="/images/spj.png" alt="Spazorlab" className="h-full object-contain max-w-[140px]" />
                                </div>
                                <div>
                                    <h3 className="text-[#ea580c] font-bold text-2xl mb-1 font-serif">Spazorlab</h3>
                                    <h4 className="text-[#ea580c] font-bold text-sm mb-3 uppercase tracking-wide">(LLM)</h4>
                                    <hr className="border-t-2 border-[#ea580c] w-12 mb-3" />
                                    <p className="text-[#9a3412] font-bold text-xs mb-2">Custom SaaS for Data Visualization</p>
                                    <p className="text-[#7c2d12] text-xs leading-relaxed mb-3">
                                        Developed domain-specific LLMs for SMEs with curated datasets, tokenizer optimization,
                                        multilingual fine-tuning, enabling efficient on-premise AI solutions.
                                    </p>
                                    <a href="https://spazorlabs.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#ea580c] hover:underline flex items-center gap-1">
                                        <Globe size={12} /> spazorlabs.com
                                    </a>
                                </div>
                            </div>

                            {/* Project 2: Yugandhara */}
                            <div className="flex flex-col h-full">
                                <div className="h-20 flex items-center justify-start mb-4">
                                    <img src="/images/Yuglogo.png" alt="Yugandhara" className="h-full object-contain max-w-[160px]" />
                                </div>
                                <div>
                                    <h3 className="text-[#b91c1c] font-bold text-2xl mb-1 font-serif">Yugandhara</h3>
                                    <h4 className="text-[#b91c1c] font-bold text-sm mb-3 uppercase tracking-wide">Strategic Holdings</h4>
                                    <hr className="border-t-2 border-[#b91c1c] w-12 mb-3" />
                                    <p className="text-[#991b1b] font-bold text-xs mb-2">Multi-module Digital Transformation</p>
                                    <p className="text-[#7f1d1d] text-xs leading-relaxed mb-3">
                                        Managed Corporate Olympiya's tech stack, delivering scalable SaaS for agriculture,
                                        e-commerce, and branding with automation and efficiency.
                                    </p>
                                    <a href="https://www.yugandhara.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#b91c1c] hover:underline flex items-center gap-1">
                                        <Globe size={12} /> www.yugandhara.com
                                    </a>
                                </div>
                            </div>

                            {/* Project 3: LinksUs */}
                            <div className="flex flex-col h-full">
                                <div className="h-20 flex items-center justify-start mb-4">
                                    <div className="w-20 h-20 flex items-center justify-center bg-[#2e1065] rounded-2xl shadow-sm border-2 border-white p-2">
                                        <img src="/images/linksus.png" alt="LinksUs" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#c2410c] font-bold text-2xl mb-1 font-serif">LinksUs</h3>
                                    <h4 className="text-[#c2410c] font-bold text-sm mb-3 uppercase tracking-wide">(EdTech)</h4>
                                    <hr className="border-t-2 border-[#c2410c] w-12 mb-3" />
                                    <p className="text-[#9a3412] font-bold text-xs mb-2">AI-Integrated Platform</p>
                                    <p className="text-[#7c2d12] text-xs leading-relaxed mb-3">
                                        AI-driven platform helping undergraduates gain real-world experience via LLM evaluations,
                                        simulations, profile matching, and industry bridging.
                                    </p>
                                    <a href="https://www.linksus.in/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#c2410c] hover:underline flex items-center gap-1">
                                        <Globe size={12} /> www.linksus.in
                                    </a>
                                </div>
                            </div>

                            {/* Project 4: FinTrack Pro */}
                            <div className="flex flex-col h-full col-start-1 lg:col-start-1">
                                <div className="h-20 flex items-center justify-start mb-4">
                                    <div className="w-20 h-20 bg-white border border-[#e2e8f0] rounded-2xl flex items-center justify-center text-[#64748b]">
                                        <BarChart3 size={32} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#475569] font-bold text-2xl mb-1 font-serif">FinTrack Pro</h3>
                                    <h4 className="text-[#64748b] font-bold text-sm mb-3 uppercase tracking-wide">(FinTech)</h4>
                                    <hr className="border-t-2 border-[#cbd5e1] w-12 mb-3" />
                                    <p className="text-[#334155] font-bold text-xs mb-2">Analytics Dashboard</p>
                                    <p className="text-[#475569] text-xs leading-relaxed mb-3">
                                        Comprehensive financial analytics dashboard for tracking investments and market trends in real-time.
                                    </p>
                                    <span className="text-xs font-bold text-[#64748b] flex items-center gap-1 cursor-not-allowed opacity-60">
                                        <Globe size={12} /> View Details
                                    </span>
                                </div>
                            </div>

                            {/* Project 5: HealthSync */}
                            <div className="flex flex-col h-full col-start-2 lg:col-start-2">
                                <div className="h-20 flex items-center justify-start mb-4">
                                    <div className="w-20 h-20 bg-white border border-[#e2e8f0] rounded-2xl flex items-center justify-center text-[#ef4444]">
                                        <Target size={32} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#be123c] font-bold text-2xl mb-1 font-serif">HealthSync</h3>
                                    <h4 className="text-[#be123c] font-bold text-sm mb-3 uppercase tracking-wide">(Healthcare)</h4>
                                    <hr className="border-t-2 border-[#be123c] w-12 mb-3" />
                                    <p className="text-[#9f1239] font-bold text-xs mb-2">Patient Management</p>
                                    <p className="text-[#be123c] text-xs leading-relaxed mb-3">
                                        Patient management system integrating appointments, telemedicine, and digital health records.
                                    </p>
                                    <span className="text-xs font-bold text-[#be123c] flex items-center gap-1 cursor-not-allowed opacity-60">
                                        <Globe size={12} /> View Details
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Testimonials */}
                        <div className="grid grid-cols-2 gap-8 mt-auto pt-6 border-t border-[#e2e8f0]">
                            <div className="flex gap-4">
                                <div className="text-4xl text-[#fbbf24] font-serif leading-none">“</div>
                                <div>
                                    <p className="text-sm text-[#451a03] italic leading-relaxed mb-2">
                                        From custom dashboards to automation – every solution was fast, efficient, and future-proof.
                                    </p>
                                    <div>
                                        <p className="text-xs font-bold text-[#b45309]">Priya Malhotra</p>
                                        <p className="text-[10px] text-[#92400e]">CTO, Yugandhara</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-4xl text-[#fbbf24] font-serif leading-none">“</div>
                                <div>
                                    <p className="text-sm text-[#451a03] italic leading-relaxed mb-2">
                                        Their ability to combine design, development, and business strategy is top-tier.
                                    </p>
                                    <div>
                                        <p className="text-xs font-bold text-[#b45309]">Parth Chauhan</p>
                                        <p className="text-[10px] text-[#92400e]">Founder, Spazorlab</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Website Footer */}
                <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center pb-8">
                    <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                        https://www.talentronaut.in/
                    </a>
                </div>
            </div>

            {/* --- PAGE 10: CONTACT / LET'S BUILD TOGETHER --- */}
            <div id="pdf-page-10" className={pageStyle}>
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -bottom-[20%] -left-[20%] w-[800px] h-[800px] rounded-full"
                        style={{ background: 'rgba(217, 70, 50, 0.05)', filter: 'blur(120px)' }}
                    ></div>
                </div>

                <div className={contentPadding}>
                    {/* Standard Header */}
                    <div className="border-b border-[#e2e8f0] pb-6 mb-16 flex justify-between items-end relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1e293b]">Let’s Build Together</h2>
                            <p className="text-[#64748b] mt-1 font-sans text-sm">Ready to take your product idea from vision to launch?</p>
                        </div>
                        <div className="text-[#e2e8f0] font-bold text-6xl opacity-40">10</div>
                    </div>

                    <div className="flex-1 flex flex-col justify-start relative z-10">
                        {/* Intro Text */}
                        <div className="mb-12 max-w-2xl">
                            <p className="text-[#434d5b] text-lg font-sans leading-relaxed">
                                Let’s co-create a solution that’s custom-engineered for your business. Reach out to us to start the conversation.
                            </p>
                        </div>

                        {/* Contact Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D94632] mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-sm font-bold text-[#64748b] uppercase tracking-wider mb-2">Phone</h3>
                                <p className="text-[#1e293b] font-bold text-xl font-sans mb-1">+91 82203 24802</p>
                                <p className="text-[#1e293b] font-bold text-xl font-sans">+91 84080 04802</p>
                            </div>

                            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D94632] mb-4">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-sm font-bold text-[#64748b] uppercase tracking-wider mb-2">Website</h3>
                                <p className="text-[#1e293b] font-bold text-xl font-sans">www.talentronaut.in</p>
                            </div>

                            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] md:col-span-2">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#D94632] mb-4">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-sm font-bold text-[#64748b] uppercase tracking-wider mb-2">E-Mail</h3>
                                <p className="text-[#1e293b] font-bold text-xl font-sans">connect@talentronaut.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Standard Footer */}
                <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex justify-center pb-8 relative z-10">
                    <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] text-xs font-sans hover:text-[#D94632] transition-colors">
                        https://www.talentronaut.in/
                    </a>
                </div>
            </div>

        </div>
    );
});

PdfReport.displayName = "PdfReport";
export default PdfReport;
