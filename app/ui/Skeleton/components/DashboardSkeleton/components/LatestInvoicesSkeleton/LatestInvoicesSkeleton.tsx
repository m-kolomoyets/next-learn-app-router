import { memo } from "react";
import clsx from "clsx";
import { SHIMMER_CLASSNAMES } from "@/app/ui/Skeleton/constants";
import InvoiceSkeleton from "./components/InvoiceSkeleton";

const LatestInvoicesSkeleton: React.FC = () => {
  return (
    <div
      className={clsx(
        SHIMMER_CLASSNAMES,
        "relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4"
      )}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(LatestInvoicesSkeleton);
