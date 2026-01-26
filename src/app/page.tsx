import HeroSection from "@/components/HeroSection";
import ProjectForm from "@/components/ProjectForm";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background flex-col items-center w-full relative">
      <HeroSection />

      {/* Form Section with Scroll Anchor */}
      <div id="project-form" className="w-full">
        <ProjectForm />
      </div>
    </main>
  );
}
