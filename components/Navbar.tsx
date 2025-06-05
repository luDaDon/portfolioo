import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Luther Bell</h1>
      <div className="space-x-4 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/experience" className="hover:text-blue-600 transition">Experience</Link>
        <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </div>
    </nav>
  );
}
