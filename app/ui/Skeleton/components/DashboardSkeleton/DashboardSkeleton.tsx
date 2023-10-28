import { memo } from "react";
import clsx from "clsx";
import { SHIMMER_CLASSNAMES } from "../../constants";
import CardSkeleton from "../CardsSkeleton/components/CardSkeleton";
import LatestInvoicesSkeleton from "./components/LatestInvoicesSkeleton";
import RevenueChartSkeleton from "./components/RevenueChartSkeleton";

const DashboardSkeleton: React.FC = () => {
  return (
    <>
      <div
        className={clsx(
          SHIMMER_CLASSNAMES,
          "relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100"
        )}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
};

export default memo(DashboardSkeleton);
