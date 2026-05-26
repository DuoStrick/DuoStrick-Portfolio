import { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export default function SectionContainer({ children, id, className = "", style }: Props) {
  return (
    <section
      id={id}
      className={`w-full ${className}`}
      style={style}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
}
