import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="mb-4 text-gray-700">Feel free to reach out!</p>
        <ul className="space-y-4 text-gray-800">
          <li>
            <a href="mailto:luthbell4@gmail.com" className="text-blue-600 hover:underline">
              luthbell4@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luther-bell/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}