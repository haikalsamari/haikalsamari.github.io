import { experience } from "@/components/sections/experience/types/experience";
import CardExperience from "./CardExperience";

const WorkingExperiences: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {experience.map((e, index) => (
                <div key={index} className="flex flex-col md:flex-col items-start md:items-start">
                    <CardExperience 
                        companyName={e.name} 
                        position={e.role} 
                        duration={e.duration} 
                        imagePath={e.imagePath}>  
                    </CardExperience>
                </div>
            ))}
        </div>
    )
}

export default WorkingExperiences;