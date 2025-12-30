export const ServicesSkeleton = () => {
  return (
    <section className="py-30 bg-gradient-to-br from-pink-50 to-purple-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 w-1/3 bg-pink-100 rounded mx-auto mb-4" />
          <div className="h-6 w-1/2 bg-pink-100 rounded mx-auto" />
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-pink-100 rounded-full" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-100 space-y-4">
              <div className="h-6 w-3/4 bg-pink-100 rounded" />
              <div className="h-4 w-full bg-pink-100 rounded" />
              <div className="flex justify-between items-center">
                <div className="h-4 w-20 bg-pink-100 rounded" />
                <div className="h-6 w-24 bg-pink-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
