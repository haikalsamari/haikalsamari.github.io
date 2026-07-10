interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
    return (
        <div className={`min-h-[30vh] sm:min-h-[40vh] ${className}`}>
            <div className="max-w-7xl mx-auto">
                <section className="h-full">{children}</section>
            </div>
        </div>
    );
};

export default Section;
