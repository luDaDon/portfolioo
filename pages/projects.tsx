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
            title="NBA Player Stats Scraper"
            description="This full-stack web app scrapes NBA player statistics and displays them in a clean, searchable UI. Built with a Python + Flask backend that scrapes and serves up real player data, and a Next.js frontend styled with Tailwind CSS. Users can easily search for players and view key stats like points, assists, and rebounds."
            link="https://sports-scraper.vercel.app/"
          />
          {/* Add more projects here */}
        </div>
      </main>
      <Footer />
    </>
  );
}
