"use client";
import { memo } from "react";
import type { DashboardCardProps } from "./types";
import { lusitana } from "@/app/lib/fonts";
import { DASHBOARD_ICONS } from "./constants";

const Card: React.FC<DashboardCardProps> = ({ title, value, type }) => {
  const Icon = DASHBOARD_ICONS[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
};

export default memo(Card);

// export default async function Cards() {
//     return (
//       <>
//         {/* NOTE: comment in this code when you get to this point in the course */}

//         <Card title="Collected" value={totalPaidInvoices} type="collected" />
//         <Card title="Pending" value={totalPendingInvoices} type="pending" />
//         <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
//         <Card
//           title="Total Customers"
//           value={numberOfCustomers}
//           type="customers"
//         />
//       </>
//     );
//   }
