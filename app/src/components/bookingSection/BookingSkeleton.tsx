export const BookingSkeleton = () => {
  return (
    <section className="py-30 bg-gradient-to-br from-pink-50 to-purple-50 animate-pulse">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 w-1/2 bg-pink-100 rounded mx-auto mb-4" />
          <div className="h-6 w-2/3 bg-pink-100 rounded mx-auto" />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <div className="h-6 w-1/3 bg-pink-100 rounded" />

          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-14 bg-pink-100 rounded-lg" />
          ))}

          <div className="h-12 w-full bg-pink-100 rounded-full mt-6" />
        </div>
      </div>
    </section>
  );
};
