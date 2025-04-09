import { Skeleton } from "./ui/skeleton";

const LoadingUI = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-10 gap-5 lg:gap-10">
            <Skeleton className="rounded" />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                <Skeleton className="rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24" />
                <div className="flex flex-col gap-5 lg:col-span-2">
                    <Skeleton className="rounded h-12" />
                    <Skeleton className="rounded h-12" />
                </div>
                <Skeleton className="rounded h-12 lg:col-span-3" />
                <Skeleton className="rounded h-12 lg:col-span-3" />
            </div>
            <div className="flex flex-col gap-5">
                <Skeleton className="rounded h-32 lg:h-12" />
                <Skeleton className="rounded h-12 lg:h-24" />
            </div>
            <Skeleton className="rounded" />
        </div>
    );
}
 
export default LoadingUI;