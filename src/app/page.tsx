import HeroSection from "@/components/HeroSection";
import ProjectForm from "@/components/ProjectForm";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background flex-col items-center w-full relative overflow-x-hidden">
      {/* Background Decorative Elements - Glassmorphism & Abstract Vectors */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Main Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/10 rounded-full blur-[100px] md:blur-[130px] opacity-60 animate-pulse" />

        {/* Secondary Blobs */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 w-full">
        <HeroSection />

        {/* Form Section with Scroll Anchor */}
        <div id="project-form" className="w-full">
          <ProjectForm />
        </div>
      </div>
    </main>
  );
}
