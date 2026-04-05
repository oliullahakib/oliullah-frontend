export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-0 text-neutral-950 font-sans p-20 flex flex-col gap-20">
      {/* Typography Section */}
      <section className="flex flex-col gap-8">
        <h2 className="border-b border-neutral-100 pb-4 text-neutral-600 uppercase text-sm tracking-widest font-bold">Typography</h2>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-neutral-400 text-xs font-mono">H1 - 52px / 115% / Medium</span>
            <h1>The quick brown fox jumps over the lazy dog</h1>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-neutral-400 text-xs font-mono">H2 - 40px / 115% / Medium</span>
            <h2>The quick brown fox jumps over the lazy dog</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-neutral-400 text-xs font-mono">H3 - 28px / 115% / Medium</span>
            <h3>The quick brown fox jumps over the lazy dog</h3>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-neutral-400 text-xs font-mono">H4 - 24px / 135% / Regular</span>
            <h4>The quick brown fox jumps over the lazy dog</h4>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-neutral-400 text-xs font-mono">H5 - 20px / 135% / Regular</span>
            <h5>The quick brown fox jumps over the lazy dog</h5>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="flex flex-col gap-8">
        <h2 className="border-b border-neutral-100 pb-4  uppercase text-sm tracking-widest font-bold font-sans text-primary-500">Primary Palette</h2>
        <div className="grid grid-cols-6 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((v) => (
            <div key={v} className="flex flex-col gap-2">
              <div className={`h-20 w-full rounded-xl shadow-sm`} style={{ backgroundColor: `var(--color-primary-${v})` }}></div>
              <span className="text-xs font-mono text-neutral-500">primary-{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="border-b border-neutral-100 pb-4 text-neutral-600 uppercase text-sm tracking-widest font-bold">Neutral Palette</h2>
        <div className="grid grid-cols-6 gap-4">
          {[0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((v) => (
            <div key={v} className="flex flex-col gap-2">
              <div className={`h-20 w-full rounded-xl border border-neutral-50 shadow-sm`} style={{ backgroundColor: `var(--color-neutral-${v})` }}></div>
              <span className="text-xs font-mono text-neutral-500">neutral-{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Utilities Section */}
      <section className="flex flex-col gap-8">
        <h2 className="border-b border-neutral-100 pb-4 text-neutral-600 uppercase text-sm tracking-widest font-bold">Utilities & Gradients</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-neutral-400">glow-line-horizontal</span>
            <div className="h-1 bg-neutral-50 rounded-full overflow-hidden flex items-center">
               <div className="h-full w-full glow-line-horizontal"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-neutral-400">glow-reflect-sm</span>
            <div className="h-40 w-40 rounded-full glow-reflect-sm border border-neutral-50"></div>
          </div>
          <div className="flex flex-col gap-4">
             <span className="text-xs font-mono text-neutral-400">Alpha Blue 15%</span>
             <div className="h-20 w-full bg-alpha-blue-15 rounded-xl border border-primary-100 flex items-center justify-center text-primary-600 font-medium">
               Alpha Blue
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
