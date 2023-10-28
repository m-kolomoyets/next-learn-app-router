import { memo } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { DeleteInvoiceButtonProps } from "./types";

const DeleteInvoiceButton: React.FC<DeleteInvoiceButtonProps> = ({ id }) => {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
};

export default memo(DeleteInvoiceButton);
