import { memo } from "react";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/outline";
import type { UpdateInvoiceButtonProps } from "./types";

const UpdateInvoiceButton: React.FC<UpdateInvoiceButtonProps> = ({ id }) => {
  return (
    <Link
      href="/dashboard/invoices"
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
};

export default memo(UpdateInvoiceButton);
