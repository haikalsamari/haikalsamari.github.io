import {stacks} from '@/components/sections/stack/types/stack';

const Stack: React.FC = () => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 py-6">
            {stacks.map((stack, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center bg-white p-4 transition-shadow"
                >
                    <img
                        src={stack.imageUrl}
                        alt={`${stack.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                    <p className="mt-4 text-center text-md font-semibold">{stack.name}</p>
                </div>
            ))}
            </div>
    )
}

export default Stack;