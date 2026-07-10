import Marquee from 'react-fast-marquee';
import { stacks, type Stacks } from '@/components/sections/stack/types/stack';

const midpoint = Math.ceil(stacks.length / 2);
const topRow = stacks.slice(0, midpoint);
const bottomRow = stacks.slice(midpoint);

const StackItem: React.FC<{ stack: Stacks }> = ({ stack }) => (
    <div className="flex flex-col items-center bg-white px-8 py-4 mx-2">
        <img
            src={stack.imageUrl}
            alt={`${stack.name} logo`}
            width={48}
            height={48}
            className="object-contain"
        />
        <p className="mt-4 text-center text-md font-medium whitespace-nowrap">{stack.name}</p>
    </div>
);

const Stack: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 py-6">
            <Marquee pauseOnHover gradient gradientColor="#ffffff" gradientWidth={60} speed={35}>
                {topRow.map((stack) => (
                    <StackItem key={stack.name} stack={stack} />
                ))}
            </Marquee>
            <Marquee pauseOnHover direction="right" gradient gradientColor="#ffffff" gradientWidth={60} speed={35}>
                {bottomRow.map((stack) => (
                    <StackItem key={stack.name} stack={stack} />
                ))}
            </Marquee>
        </div>
    )
}

export default Stack;