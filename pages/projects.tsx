import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectsCard";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Meta Hub"
            description="NBA 2K animation database app built with Spring Boot and React."
            link="#"
          />
          <ProjectCard
            title="Highlight Generator"
            description="Video AI tool that auto-generates exciting game highlights using FFmpeg + Python."
            link="#"
          />
          {/* Add more projects here */}
        </div>
      </main>
      <Footer />
    </>
  );
}
