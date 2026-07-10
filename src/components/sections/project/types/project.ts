export interface projectType {
    name: string;
    imagePath: string;
    platform: string;
    status: string;
    liveUrl?: string;
}

export const projectList: projectType[] = [
    {name: "myclinicroster", imagePath: `/images/code.png`, platform: 'Web', status: "Live", liveUrl: "https://myclinicroster.vercel.app/"},
    {name: "openlearnhub", imagePath: `/images/openlearnhub.png`, platform: 'Web', status: "Nope"},
    {name: "sewa", imagePath: `/images/code.png`, platform: 'Web', status: "Nope"},
    {name: "unifit", imagePath: `/images/code.png`, platform: 'Mobile', status: "Nope"},
]