type BreadcrumbItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbItem[];
};
