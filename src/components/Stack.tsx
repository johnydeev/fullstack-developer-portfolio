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

const ImgBadge: React.FC<TechItem & { size?: "md" | "lg" }> = ({
    name,
    src,
    size = "md",
}) => {
    const isLg = size === "lg";
    return (
        <div
            className={`flex flex-col items-center justify-center gap-0.5 p-1.5 border border-gray-300 dark:border-gray-600 rounded-lg transition hover:scale-105 hover:border-sky-400 dark:hover:border-sky-500 ${
                isLg ? "col-span-2 row-span-2" : ""
            }`}
        >
            <div className="relative flex-1 w-full min-h-0">
                <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-contain"
                />
            </div>
            <span
                className={`text-gray-600 dark:text-gray-400 text-center leading-tight truncate w-full shrink-0 ${
                    isLg ? "text-xs" : "text-[9px] sm:text-[10px]"
                }`}
            >
                {name}
            </span>
        </div>
    );
};

const CategorySection: React.FC<{
    title: string;
    className?: string;
    plain?: boolean;
    children: React.ReactNode;
}> = ({ title, className = "", plain = false, children }) => (
    <div
        className={`rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-3 sm:p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col ${className}`}
    >
        <h3 className="text-base sm:text-lg font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 font-mono text-center">
            {title}
        </h3>
        {plain ? (
            <div className="flex-1 flex items-center justify-center">{children}</div>
        ) : (
            <div className="grid grid-cols-[repeat(auto-fill,78px)] sm:grid-cols-[repeat(auto-fill,92px)] auto-rows-[78px] sm:auto-rows-[92px] gap-1.5 flex-1 content-center justify-center">
                {children}
            </div>
        )}
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

            <section className="px-6 sm:px-10 py-14">
                <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 auto-rows-[minmax(0,auto)]">

                    <CategorySection title="Frontend" className="md:col-span-4 md:row-span-2">
                        <ImgBadge name="React" src="/react.svg" width={76} size="lg" />
                        <ImgBadge name="TypeScript" src="/typescript.png" width={72} />
                        <ImgBadge name="JavaScript" src="/javascript.svg" width={72} />
                        <ImgBadge name="Next.js" src="/next.svg" width={88} size="lg" />
                        <ImgBadge name="HTML5" src="/html5.svg" width={72} />
                        <ImgBadge name="CSS3" src="/css.svg" width={72} />
                        <ImgBadge name="Tailwind" src="/tailwindcss.svg" width={80} />
                    </CategorySection>

                    <CategorySection title="DevOps & Tools" className="md:col-span-2 md:row-span-2">
                        <ImgBadge name="Docker" src="/docker.svg" width={80} size="lg" />
                        <ImgBadge name="GitHub" src="/github-mark.svg" width={72} />
                        <ImgBadge name="CI/CD" src="/ci-cd.png" width={144} />
                        <ImgBadge name="GCP" src="/gcp.svg" width={72} />
                        <ImgBadge name="Vercel" src="/vercel.svg" width={72} />
                    </CategorySection>

                    <CategorySection title="Backend" className="md:col-span-3">
                        <ImgBadge name="Node.js" src="/nodejs.svg" width={72} size="lg" />
                        <ImgBadge name="Express" src="/expressjs.svg" width={80} />
                        <ImgBadge name="Prisma ORM" src="/prisma.svg" width={64} />
                    </CategorySection>

                    <CategorySection title="Bases de datos" className="md:col-span-3">
                        <ImgBadge name="PostgreSQL" src="/postgresql.svg" width={72} size="lg" />
                        <ImgBadge name="MongoDB" src="/mongodb.svg" width={56} />
                    </CategorySection>

                    <CategorySection title="Prácticas" className="md:col-span-6" plain>
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
                    </CategorySection>
                </div>
            </section>
        </div>
    );
};

export default Stack;
