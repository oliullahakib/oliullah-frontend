export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-8 gap-8">
      <div className="hero bg-base-100 rounded-2xl shadow-xl max-w-2xl overflow-hidden p-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">Hello DaisyUI!</h1>
            <p className="py-6 text-base-content/70 text-lg">
              Next.js project successfully initialized without TypeScript. 
              DaisyUI is now installed and configured using Tailwind CSS 4.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-accent outline">Accent Outline</button>
            </div>
          </div>
        </div>
      </div>

      <div className="stats shadow bg-base-100">
        <div className="stat">
          <div className="stat-title">Stack</div>
          <div className="stat-value text-primary font-bold">Next.js</div>
          <div className="stat-desc text-base-content/50">JavaScript Only</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">UI Library</div>
          <div className="stat-value text-secondary font-bold">DaisyUI</div>
          <div className="stat-desc text-base-content/50 text-sm">Version 5.x</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">CSS</div>
          <div className="stat-value text-accent font-bold font-mono">TW v4</div>
          <div className="stat-desc text-base-content/50">Modern Native CSS</div>
        </div>
      </div>

      <footer className="footer footer-center p-4 text-base-content/60">
        <aside>
          <p>Created with Antigravity AI</p>
        </aside>
      </footer>
    </div>
  );
}
