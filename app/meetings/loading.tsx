export default function MeetingsLoadingState() {
  // Array of 3 items to represent the skeleton loading tiles
  const skeletalIndex =;
  
  return (
    <div className="w-full space-y-6 py-4 animate-pulse print:hidden">
      <div className="h-8 bg-slate-200 rounded-lg w-1/4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletalIndex.map((index) => (
          <div key={index} className="bg-white border border-slate-200 h-56 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between">
              <div className="h-4 bg-slate-200 rounded w-1/3"></div>
              <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            </div>
            <div className="h-6 bg-slate-200 rounded w-3/4 mt-4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <div className="h-3 bg-slate-200 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
