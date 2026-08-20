import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectsCard";
import Footer from "@/components/Footer";

export default function Projects() {
  const projects = [
    {
      title: "NBA Player Stats Scraper",
      description:
        "Developed a full-stack sports analytics application that scrapes NBA player statistics and presents them through a responsive, searchable web interface.",
      tech: [
        "Python",
        "Flask",
        "BeautifulSoup",
        "Next.js",
        "Tailwind CSS",
      ],
      image: "/projects/nba-scraper.png",
      link: "https://sports-scraper.vercel.app/",
      github: "https://github.com/YOUR_USERNAME/sports-scraper",
      featured: true,
    },
];
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 max-w-4xl mx-auto">
        <section className="text-center py-16">

          <h1 className="text-5xl md:text-6xl font-bold">
            Projects
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            A collection of software engineering projects focused on backend
            development, full-stack applications, cloud technologies, and AI.
            Each project represents an opportunity to solve real-world problems
            while learning modern technologies.
          </p>

        </section>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
