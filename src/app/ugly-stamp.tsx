export function UglyStamp() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="relative rotate-[-12deg]">
        {/* Outer stamp border */}
        <div className="border-[4px] border-red-600 rounded-sm px-8 py-6 bg-transparent">
          {/* Inner content */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-white font-bold text-4xl tracking-wider uppercase font-mono">
              UGLY!
            </span>
            <div className="w-full h-[2px] bg-white" />
            <span className="text-white font-semibold text-sm tracking-wide uppercase font-mono text-center leading-tight">
              New design
              <br />
              in progress
            </span>
          </div>
        </div>
        {/* Decorative stamp texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,transparent_20%,red_20%,red_80%,transparent_80%)] bg-[length:4px_4px] pointer-events-none rounded-sm" />
      </div>
    </div>
  );
}
