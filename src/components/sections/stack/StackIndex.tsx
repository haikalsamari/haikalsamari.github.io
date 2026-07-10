import Stack from "@/components/sections/stack/components/stack";

const Stacks: React.FC = () => {
    return (
        <div className='px-4'>
            <h1 className="flex items-center gap-4 font-bold text-xl sm:text-2xl text-black">
                <span>Tech Stacks</span>
                <span className="flex-1 h-px bg-black/20" />
            </h1>
            <Stack></Stack>
        </div>
    )
}

export default Stacks;