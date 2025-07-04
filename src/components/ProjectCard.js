export default function ProjectCard({
    title,
    status,
    description,
    image,
    tech = [],
    sourceUrl = "#",
}) {
    return (
        <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                {status && (
                    <span className="text-green-400 text-sm font-medium">{status}</span>
                )}
                <p className="text-gray-400 mt-3">{description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-4 text-sm">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="bg-zinc-700 text-gray-200 px-3 py-1 rounded-full border border-white/10"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Source link */}
                <div className="mt-6">
                    <a
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-white bg-zinc-900 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                        🡕 Source
                    </a>
                </div>
            </div>
        </div>
    );
}
