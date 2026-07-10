import { Button } from "../../../ui/button";
import { Card, CardTitle } from "../../../ui/card";

interface CardProps {
  name: string;
  repo_url: string;
  imagePath: string;
}

const CardProject: React.FC<CardProps> = ({ name, repo_url, imagePath}) => {

    return (
        <Card className="w-full min-h-[260px] md:min-h-[280px] lg:min-h-[300px] flex flex-col justify-between rounded-md">
            <div className="flex justify-center items-center pt-12"> 
                <img
                    src={imagePath || `/images/available-face.png`}
                    alt="Default avatar"
                    width={130}
                    height={50}
                />
            </div>
            <div className="py-4 px-4 flex flex-col">
                <div className="pb-4">
                    <CardTitle className="text-md font-semibold">{name}</CardTitle>
                </div>
                <div>
                    <Button
                    className="p-4 w-full rounded-md bg-blue-600 hover:bg-gray-200"
                    onClick={() => window.open(`${repo_url}`, "_blank")}
                    >
                    Repository
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default CardProject;
