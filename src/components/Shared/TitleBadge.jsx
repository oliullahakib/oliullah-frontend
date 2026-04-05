
const TitleBadge = ({ title, className }) => {
    return (
        <div className={`mb-8 flex items-center gap-2 bg-neutral-500 border border-neutral-800/50 px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
            <span className="text-white">{title}</span>
        </div>
    )
}

export default TitleBadge