import Image from "next/image";
import React from "react";

interface TechItem {
    name: string;
    src: string;
    width?: number;
}

const TextBadge: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 text-xs font-bold text-gray-700 dark:text-gray-200 text-center leading-tight px-1 font-mono transition hover:scale-110">
            {name}
        </div>
        <span className="text-xs text-gray-600 dark:text-gray-400">{name}</span>
    </div>
);

const ImgBadge: React.FC<TechItem> = ({ name, src, width = 52 }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 flex items-center justify-center transition hover:scale-110">
            <Image
                width={width}
                height={width}
                src={src}
                alt={name}
                className="object-contain"
            />
        </div>
        <span className="text-xs text-gray-600 dark:text-gray-400">{name}</span>
    </div>
);

const CategorySection: React.FC<{
    title: string;
    children: React.ReactNode;
}> = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5 font-mono">
            {title}
        </h3>
        <div className="flex flex-wrap gap-6 items-end">{children}</div>
    </div>
);

const PracticePill: React.FC<{ label: string }> = ({ label }) => (
    <span className="px-3 py-1.5 rounded-full text-xs font-medium font-mono bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
        {label}
    </span>
);

const Stack: React.FC = () => {
    return (
        <div id="stack" className="text-gray-700 dark:text-white">
            <h2 className="text-3xl font-bold px-5 pt-16 pb-10 text-center">
                Stack Tecnológico
            </h2>

            <section className="px-5 py-10 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <div className="container mx-auto max-w-4xl">

                    <CategorySection title="Frontend">
                        <ImgBadge name="React" src="/react.svg" width={56} />
                        <ImgBadge name="TypeScript" src="/typescript.png" width={52} />
                        <ImgBadge name="JavaScript" src="/javascript.svg" width={52} />
                        <ImgBadge name="Next.js" src="/next.svg" width={64} />
                        <ImgBadge name="HTML5" src="/html5.svg" />
                        <ImgBadge name="CSS3" src="/css.svg" />
                        <ImgBadge name="Tailwind" src="/tailwindcss.svg" width={58} />
                    </CategorySection>

                    <div className="border-t border-gray-300 dark:border-gray-700 mb-8" />

                    <CategorySection title="Backend">
                        <ImgBadge name="Node.js" src="/nodejs.svg" width={52} />
                        <ImgBadge name="Express" src="/expressjs.svg" width={58} />
                        <TextBadge name="REST API" />
                        <TextBadge name="Prisma ORM" />
                    </CategorySection>

                    <div className="border-t border-gray-300 dark:border-gray-700 mb-8" />

                    <CategorySection title="Bases de datos">
                        <ImgBadge name="PostgreSQL" src="/postgresql.svg" width={52} />
                        <ImgBadge name="MongoDB" src="/mongodb.svg" width={44} />
                    </CategorySection>

                    <div className="border-t border-gray-300 dark:border-gray-700 mb-8" />

                    <CategorySection title="DevOps & Tools">
                        <ImgBadge name="Docker" src="/docker.svg" width={58} />
                        <ImgBadge name="GitHub" src="/github-mark.svg" width={52} />
                        <TextBadge name="CI/CD" />
                        <ImgBadge name="GCP" src="/gcp.svg" width={52} />
                        <ImgBadge name="Vercel" src="/vercel.svg" width={52} />
                    </CategorySection>

                    <div className="border-t border-gray-300 dark:border-gray-700 mb-8" />

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 font-mono">
                            Prácticas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Clean Architecture",
                                "SOLID",
                                "Design Patterns",
                                "Agile / Scrum",
                                "TDD",
                                "RESTful APIs",
                                "Git Flow",
                            ].map((p) => (
                                <PracticePill key={p} label={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stack;
