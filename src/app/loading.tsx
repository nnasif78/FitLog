export default function Loading() {
    return (
        <section className="mx-auto mt-15 w-full max-w-[1232px] animate-pulse px-4 sm:px-8 lg:px-0">
            <div className="text-center min-[1280px]:text-left">
                <div className="mx-auto h-9 w-44 rounded bg-white/10 backdrop-blur-xl min-[1280px]:mx-0"></div>
                <div className="mx-auto mt-2 h-5 w-72 rounded bg-white/10 backdrop-blur-xl min-[1280px]:mx-0"></div>
            </div>
            <div className="mt-8 grid w-full grid-cols-1 justify-items-center gap-6 min-[860px]:grid-cols-2 min-[1280px]:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="w-full max-w-[394px] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
                        <div className="h-[192px] w-full bg-white/10"></div>
                        <div className="p-4">
                            <div className="h-5 w-20 rounded bg-white/10"></div>
                            <div className="mt-3 h-7 w-48 rounded bg-white/10"></div>
                            <div className="mt-2 h-4 w-32 rounded bg-white/10"></div>
                            <div className="mt-5 h-px w-full bg-white/10"></div>
                            <div className="mt-4 h-4 w-full rounded bg-white/10"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}