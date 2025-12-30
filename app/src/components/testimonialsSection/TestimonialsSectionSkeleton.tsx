export const TestimonialsSkeleton = () => (
  <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="p-6 bg-white rounded-2xl space-y-4">
          <div className="h-4 w-1/2 bg-white rounded" />
          <div className="h-4 w-full bg-white rounded" />
          <div className="h-4 w-3/4 bg-white rounded" />
        </div>
      ))}
    </div>
  </section>
);
