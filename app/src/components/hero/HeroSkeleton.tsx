export const HeroSkeleton = () => {
  return (
    <section className="py-30 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 text-center animate-pulse">
        <div className="h-14 bg-pink-100 rounded-lg w-3/4 mx-auto mb-6" />
        <div className="h-6 bg-pink-100 rounded-lg w-2/3 mx-auto mb-8" />

        <div className="flex justify-center gap-4 mb-16">
          <div className="h-14 w-48 bg-pink-100 rounded-full" />
          <div className="h-14 w-48 bg-pink-100 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="h-12 w-12 bg-pink-100 rounded-full mx-auto mb-4" />
              <div className="h-6 bg-pink-100 rounded mb-2" />
              <div className="h-4 bg-pink-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
