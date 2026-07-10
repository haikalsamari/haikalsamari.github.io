import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Button } from "../../../ui/button";
import { Card, CardTitle } from "../../../ui/card";

interface CardProps {
  name: string;
  description: string;
  repo_url: string;
  imagePath: string;
  platform: string;
  status: string;
  liveUrl?: string;
}

const statusClasses: Record<string, string> = {
    Live: "bg-green-100 text-green-700 border-green-300",
    Nope: "bg-gray-200 text-gray-600 border-gray-300",
};

const CardProject: React.FC<CardProps> = ({ name, description, repo_url, imagePath, platform, status, liveUrl}) => {
    const isLive = status === "Live" && !!liveUrl;

    return (
        <Card className="w-full min-h-[200px] flex flex-col justify-between rounded-md">
            <div className="pt-4 px-4 flex justify-between">
                <CardTitle className="text-sm font-semibold border bg-gray-200 px-2 rounded-sm">{platform}</CardTitle>
                <CardTitle
                    className={`flex items-center gap-1 text-sm font-semibold border px-2 rounded-sm ${statusClasses[status] ?? statusClasses.Nope} ${isLive ? "cursor-pointer hover:underline" : ""}`}
                    onClick={isLive ? () => window.open(liveUrl, "_blank", "noopener,noreferrer") : undefined}
                >
                    {status}
                    {isLive && <FaArrowUpRightFromSquare className="text-xs" />}
                </CardTitle>
            </div>
            <div className="flex justify-center items-center"> 
                {/* <img
                    src={imagePath || `/images/available-face.png`}
                    alt="Default avatar"
                    width={130}
                    height={50}
                /> */}
            </div>
            <div className="py-4 px-4 flex flex-col">
                <div className="pb-4">
                    <CardTitle className="text-md font-semibold">{name}</CardTitle>
                </div>
                <div className="pb-4">
                    <CardTitle className="line-clamp-2 text-sm text-gray-500 font-medium">{description}</CardTitle>
                </div>
                <div>
                    <Button
                    className="p-4 w-full rounded-md font-semibold bg-blue-600 hover:bg-gray-200"
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
