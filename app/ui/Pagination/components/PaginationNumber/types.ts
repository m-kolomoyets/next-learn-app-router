export type PaginationNumberProps = {
  page: number | string;
  href: string;
  isActive: boolean;
  position?: "first" | "last" | "middle" | "single";
};
