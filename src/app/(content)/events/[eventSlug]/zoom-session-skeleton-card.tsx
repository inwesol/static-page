// Shimmer overlay for true shimmer (optional, can use animate-pulse for simplicity)
const Shimmer = () => (
  <div
    className="absolute inset-0 -translate-x-full animate-shimmer
    bg-gradient-to-r from-transparent via-white/60 to-transparent
    h-full w-full"
  />
);

export function ZoomSessionSkeletonCard() {
  return (
    <div
      className="relative bg-white shadow-sm p-4 mx-auto w-full flex gap-4 sm:p-6 animate-pulse"
    >
      <div className="flex-col gap-4 flex w-1/3">
        {/* Header: Avatar + Name */}
        <div className="flex items-center">
          <div className="relative">
            <div className="h-8 w-8 rounded-lg bg-gray-200 overflow-hidden relative">
              <Shimmer />
            </div>
          </div>
          <div className="ml-4 flex-1">
            <div className="h-4 w-28 bg-gray-200 rounded mb-1 relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="h-3 w-20 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          </div>
        </div>

        {/* Session Title */}
        <div className="h-4 max-w-56 bg-gray-200 rounded relative overflow-hidden">
          <Shimmer />
        </div>

        {/* Info Row: One to one, Duration, Zoom Meeting */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="h-3 w-16 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="h-3 w-12 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="h-3 w-24 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          </div>
        </div>

        {/* Iframe/Calendar Area */}
        <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg relative overflow-hidden">
          <Shimmer />
        </div>

        {/* Action Links: Show more, Learn More, Buy Now */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <div className="h-4 w-24 bg-gray-200 rounded relative overflow-hidden">
            <Shimmer />
          </div>
          <div className="h-4 w-20 bg-gray-200 rounded relative overflow-hidden">
            <Shimmer />
          </div>
          <div className="h-4 w-20 bg-gray-200 rounded relative overflow-hidden">
            <Shimmer />
          </div>
        </div>

      </div>
      {/* Divider */}
      <div className="h-full bg-gray-200 w-1" />

      {/* Footer: Timezone, switches, calendar slots */}
      <div className="flex flex-col gap-4 w-2/3">
        {/* Timezone */}
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="h-4 w-4 bg-gray-200 rounded relative overflow-hidden">
            <Shimmer />
          </div>
          <div className="h-3 w-40 bg-gray-200 rounded relative overflow-hidden">
            <Shimmer />
          </div>
        </div>
        {/* Switches */}
        <div className="flex gap-6 w-full justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-8 bg-gray-200 rounded-full relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="h-3 w-12 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-8 bg-gray-200 rounded-full relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="h-3 w-16 bg-gray-200 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          </div>
        </div>
        {/* Calendar slots (3 days, simplified) */}
        <div className="flex flex-col sm:flex-row gap-2 h-full w-full">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col gap-2 bg-gray-100 p-2 rounded-lg min-w-[90px] h-full"
            >
              <div className="h-3 w-16 bg-gray-200 rounded relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="h-3 w-8 bg-gray-200 rounded relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="h-4 w-full bg-gray-200 rounded relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="h-4 w-full bg-gray-200 rounded relative overflow-hidden">
                <Shimmer />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
