import React from 'react'

function BearSniff() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-16">
      <style>{`
        @keyframes floatWord { 0%,100%{transform: translateY(0)} 50%{transform: translateY(-6px)} }
        @keyframes blink { 0%, 4%, 100% { transform: scaleY(1) } 2% { transform: scaleY(0.1) } 60%, 64% { transform: scaleY(1) } 62% { transform: scaleY(0.1) } }
        @keyframes sniff { 0%, 100% { transform: translateY(0) } 30% { transform: translateY(-2px) } 60% { transform: translateY(-1px) } }
        @keyframes flare { 0%, 100% { transform: scale(1); opacity: .9 } 30% { transform: scale(1.2); opacity: 1 } 60% { transform: scale(1.05); opacity: .95 } }
        @keyframes twitch { 0%, 100% { transform: rotate(0deg) } 45% { transform: rotate(2deg) } 50% { transform: rotate(-2deg) } 55% { transform: rotate(1deg) } }
        @keyframes driftUp { 0% { opacity: 0; transform: translateY(8px) } 10% { opacity: .8 } 100% { opacity: 0; transform: translateY(-40px) } }
        @keyframes dash { 0% { stroke-dashoffset: 60 } 100% { stroke-dashoffset: 0 } }
      `}</style>

      <div className="text-center mb-10">
        <h2 className="text-6xl sm:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-blue-100 via-white to-blue-200 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-[floatWord_6s_ease-in-out_infinite]">
          CodeBear
        </h2>
        <p className="mt-3 text-blue-200/70">A tiny bear, just a nose, eyes and ears — sniffing the code.</p>
      </div>

      <div className="relative">
        {/* Scent particles rising from the word */}
        <div className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 w-[460px] h-24">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="absolute block w-1 h-1 rounded-full bg-blue-200/60"
              style={{
                left: `${Math.random()*100}%`,
                bottom: 0,
                animation: `driftUp ${2 + Math.random()*2}s ease-in ${i*0.25}s infinite`,
                filter: 'blur(0.5px)'
              }} />
          ))}
        </div>

        {/* Bear features (no head outline) */}
        <svg viewBox="0 0 600 380" className="w-[min(92vw,700px)] h-auto">
          {/* Ears */}
          <g className="origin-center">
            <g className="[animation:twitch_8s_ease-in-out_infinite]" transform="translate(200,70)">
              <circle cx="0" cy="0" r="44" fill="url(#earGrad)" />
              <circle cx="0" cy="0" r="24" fill="url(#earInner)" />
            </g>
            <g className="[animation:twitch_8.5s_ease-in-out_infinite]" transform="translate(400,70)">
              <circle cx="0" cy="0" r="44" fill="url(#earGrad)" />
              <circle cx="0" cy="0" r="24" fill="url(#earInner)" />
            </g>
          </g>

          {/* Eyes */}
          <g transform="translate(0,0)">
            <ellipse cx="255" cy="170" rx="14" ry="18" fill="#0f172a" className="origin-center [animation:blink_7s_linear_infinite]" />
            <ellipse cx="345" cy="170" rx="14" ry="18" fill="#0f172a" className="origin-center [animation:blink_7.2s_linear_infinite]" />
            {/* Eye highlights */}
            <circle cx="250" cy="165" r="3" fill="#9bd2ff" opacity="0.85" />
            <circle cx="340" cy="165" r="3" fill="#9bd2ff" opacity="0.85" />
          </g>

          {/* Nose + nostrils */}
          <g transform="translate(300,230)">
            {/* nose shape (rounded triangle) */}
            <path d="M 0 -14 C 14 -14 22 -6 18 4 C 14 16 -14 16 -18 4 C -22 -6 -14 -14 0 -14 Z" fill="url(#noseGrad)" className="[animation:sniff_2.5s_ease-in-out_infinite] drop-shadow" />
            {/* bridge shine */}
            <ellipse cx="-4" cy="-10" rx="6" ry="3" fill="#ffffff" opacity="0.25" />
            {/* nostrils */}
            <ellipse cx="-7" cy="3" rx="3.5" ry="2.2" fill="#0b1220" className="origin-center [animation:flare_2.5s_ease-in-out_infinite]" />
            <ellipse cx="7" cy="3" rx="3.5" ry="2.2" fill="#0b1220" className="origin-center [animation:flare_2.5s_ease-in-out_infinite_.25s]" />
          </g>

          {/* Scent curls animated toward nose */}
          <g transform="translate(260,260)">
            <path d="M -120 60 C -110 30 -90 20 -70 4" fill="none" stroke="url(#scentGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="60" className="[animation:dash_3s_linear_infinite]" />
            <path d="M -80 60 C -70 30 -50 20 -30 4" fill="none" stroke="url(#scentGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="60" className="[animation:dash_3.4s_linear_infinite_.2s]" />
            <path d="M -40 60 C -30 30 -10 18 10 2" fill="none" stroke="url(#scentGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="60" className="[animation:dash_3.2s_linear_infinite_.1s]" />
          </g>

          {/* Definitions */}
          <defs>
            <radialGradient id="earGrad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
            <radialGradient id="earInner" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#f8c3c3" />
              <stop offset="100%" stopColor="#f0a3a3" />
            </radialGradient>
            <linearGradient id="noseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#0b1220" />
            </linearGradient>
            <linearGradient id="scentGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default BearSniff
