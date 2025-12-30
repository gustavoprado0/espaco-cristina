import { Skeleton } from './ui/Skeleton';

export const SkeletonPage = () => {
  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* título */}
        <Skeleton className="h-10 w-1/3 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200 space-y-4"
            >
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-8 w-1/3 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
