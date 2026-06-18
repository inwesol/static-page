export default function GradientSpinner({ size = 56, label = "Loading…" }) {
  console.log("global loader")
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="inline-flex flex-col items-center justify-center gap-3"
        role="status"
        aria-live="polite"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 44 44"
          className="animate-spin drop-shadow-sm"
        >
          <defs>
            <linearGradient id="loaderGradient" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                className="text-primary-blue-500"
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className="text-primary-green-500"
                stopColor="currentColor"
              />
            </linearGradient>
          </defs>

          <circle
            cx="22"
            cy="22"
            r="18"
            className="text-slate-200/50"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M22 4 a18 18 0 0 1 0 36 a18 18 0 0 1 0-36"
            stroke="url(#loaderGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {label ? (
          <span className="text-sm font-medium bg-gradient-to-r from-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
