export type DashboardCardType =
  | "invoices"
  | "customers"
  | "pending"
  | "collected";

export type DashboardCardProps = {
  title: string;
  value: number | string;
  type: DashboardCardType;
};
