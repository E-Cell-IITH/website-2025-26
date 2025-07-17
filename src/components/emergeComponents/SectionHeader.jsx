export default function SectionHeader({title}){
    return (
        <div className="mb-6 mt-10 border-b border-zinc-700 pb-2">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
    );
};