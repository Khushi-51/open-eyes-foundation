interface ProjectCardProps {
  title: string
  description: string
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
