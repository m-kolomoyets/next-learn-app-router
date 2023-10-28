import type { InvoiceForm, CustomerField } from "@/app/lib/definitions";

export type EditInvoiceFormProps = {
  invoice: InvoiceForm;
  customers: CustomerField[];
};
