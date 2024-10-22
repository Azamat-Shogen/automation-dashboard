import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


  interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
  }

  export const BreadcrumbBar = ({
    breadcrumbs,
  }: {
    breadcrumbs: Breadcrumb[];
  }) => {


    return (
        <Breadcrumb className="hidden md:flex pt-2">
           <BreadcrumbList className="text-lg font-semibold">
             {breadcrumbs.map((item) => (
                !item.active ? 
                <span key={item.label} className="flex items-center justify-between gap-2">
                <BreadcrumbItem >
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="" />
                </span>

                :  <BreadcrumbItem key={item.label}>
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              </BreadcrumbItem>
             ))}
             
           </BreadcrumbList>
          </Breadcrumb>
    )
  }