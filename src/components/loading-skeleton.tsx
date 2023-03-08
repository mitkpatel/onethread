interface Props {
  size?: number;
}

export default function LoadingSkeleton({ size }: Props) {
  return (
    <div className="mx-4 mt-12">
      {[...new Array(size ?? 1)].map((_, index) => (
        <div
          key={index}
          className=" mx-auto mb-6 w-full max-w-sm rounded-md p-4 shadow"
        >
          <div className="flex animate-pulse space-x-4">
            <div className="h-10 w-10 rounded-full bg-slate-400"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-slate-400"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-slate-400"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                </div>
                <div className="h-2 rounded bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
