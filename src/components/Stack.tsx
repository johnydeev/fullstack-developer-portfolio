import Image from "next/image";
import React from "react";

interface TechItem {
    name: string;
    src: string;
    width?: number;
}

const TextBadge: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 text-sm font-bold text-gray-700 dark:text-gray-200 text-center leading-tight px-2 font-mono transition hover:scale-110">
            {name}
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{name}</span>
    </div>
);

const ImgBadge: React.FC<TechItem> = ({ name, src, width = 72 }) => (
    <div className="flex flex-col items-center gap-3">
        <div
            className="flex items-center justify-center transition hover:scale-110"
            style={{ width }}
        >
            <Image
                width={width}
                height={width}
                src={src}
                alt={name}
                className="object-contain"
            />
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{name}</span>
    </div>
);

const CategorySection: React.FC<{
    title: string;
    children: React.ReactNode;
}> = ({ title, children }) => (
    <div className="mb-10 text-center">
        <h3 className="text-base sm:text-lg font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 font-mono">
            {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 items-end">{children}</div>
    </div>
);

const PracticePill: React.FC<{ label: string }> = ({ label }) => (
    <span className="px-4 py-2 rounded-full text-sm font-medium font-mono bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
        {label}
    </span>
);

const Stack: React.FC = () => {
    return (
        <div id="stack" className="text-gray-700 dark:text-white">
            <h2 className="text-3xl font-bold px-5 pt-16 pb-10 text-center">
                Stack Tecnológico
            </h2>

            <section className="px-6 sm:px-10 py-14 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <div className="container mx-auto max-w-5xl">

                    <CategorySection title="Frontend">
                        <ImgBadge name="React" src="/react.svg" width={76} />
                        <ImgBadge name="TypeScript" src="/typescript.png" width={72} />
                        <ImgBadge name="JavaScript" src="/javascript.svg" width={72} />
                        <ImgBadge name="Next.js" src="/next.svg" width={88} />
                        <ImgBadge name="HTML5" src="/html5.svg" width={72} />
                        <ImgBadge name="CSS3" src="/css.svg" width={72} />
                        <ImgBadge name="Tailwind" src="/tailwindcss.svg" width={80} />
                    </CategorySection>

                    <div className="border-t border-gray-300 dark:border-gray-700 mb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-10">
                        <CategorySection title="Backend">
                            <ImgBadge name="Node.js" src="/nodejs.svg" width={72} />
                            <ImgBadge name="Express" src="/expressjs.svg" width={80} />
                            <ImgBadge name="Prisma ORM" src="/prisma.svg" width={64} />
                        </CategorySection>

                        <CategorySection title="Bases de datos">
                            <ImgBadge name="PostgreSQL" src="/postgresql.svg" width={72} />
                            <ImgBadge name="MongoDB" src="/mongodb.svg" width={56} />
                        </CategorySection>
                    </div>

                    <div className="border-t border-gray-300 dark:border-gray-700 mb-10" />

                    <CategorySection title="DevOps & Tools">
                        <ImgBadge name="Docker" src="/docker.svg" width={80} />
                        <ImgBadge name="GitHub" src="/github-mark.svg" width={72} />
                        <ImgBadge name="CI/CD" src="/ci-cd.png" width={144} />
                        <ImgBadge name="GCP" src="/gcp.svg" width={72} />
                        <ImgBadge name="Vercel" src="/vercel.svg" width={72} />
                    </CategorySection>

                    <div className="border-t border-gray-300 dark:border-gray-700 mb-10" />

                    <div className="text-center">
                        <h3 className="text-base sm:text-lg font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-5 font-mono">
                            Prácticas
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
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
