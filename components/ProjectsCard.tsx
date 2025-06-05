type Props = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <a href={link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}
