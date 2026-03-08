import { ReactNode } from "react";

export default function SectionContainer({ children, id, className = "" }: { children: ReactNode, id?: string, className?: string }) {
    return (
        <section id={id} className={`w-full max-w-6xl mx-auto px-6 py-16 md:py-24 ${className}`}>
            {children}
        </section>
    );
}
