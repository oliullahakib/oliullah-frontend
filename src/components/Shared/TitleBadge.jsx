
const TitleBadge = ({ children, className }) => {
    return (
        <>
        <div 
        className={`mb-8 flex items-center gap-2 bg-neutral-700 border border-neutral-800/50 px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 ${className} relative overflow-hidden`}>
            <div className="absolute top-0 left-0 bg-linear-to-r from-primary-500/30 via-primary-500 to-transparent h-px w-full"></div>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
            {children}
            <div className="absolute bottom-0 right-0 bg-linear-to-r from-transparent via-primary-500 to-primary-500/30 h-px w-full"></div>
        </div>
        </>
    )
}

export default TitleBadge