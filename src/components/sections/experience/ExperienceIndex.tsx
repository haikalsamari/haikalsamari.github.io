import WorkingExperiences from "@/components/sections/experience/components/WorkingExperience";

const Experience: React.FC = () => {
    return (
        <div className="px-4">
            <h1 className="flex items-center gap-4 font-bold text-xl sm:text-2xl text-black">
                <span>Experience</span>
                <span className="flex-1 h-px bg-black/20" />
            </h1>
            <WorkingExperiences></WorkingExperiences>
        </div>
    )
}

export default Experience;