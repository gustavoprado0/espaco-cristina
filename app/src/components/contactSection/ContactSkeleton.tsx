export const ContactSkeleton = () => {
  return (
    <section className="py-30 bg-gradient-to-br from-pink-50 to-purple-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 w-1/3 bg-pink-100 rounded mx-auto mb-4" />
          <div className="h-6 w-1/2 bg-pink-100 rounded mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl space-y-4">
              <div className="h-6 w-1/2 bg-pink-100 rounded" />
              <div className="h-4 w-full bg-pink-100 rounded" />
              <div className="h-4 w-3/4 bg-pink-100 rounded" />
              <div className="h-12 w-full bg-pink-100 rounded-lg mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
