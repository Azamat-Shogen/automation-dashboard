import { Reports } from "@/components/reports";
import { BreadcrumbBar } from "@/components/breadcrumb";
import { getReports } from "@/actions/reportsActions";



const breadsrumbItems = [
  {
    label: "Dashboard",
    href: "/",
    active: true,
  },
];

export default async function Home() {

  const reports = await getReports();

 
    return (
      <div className="p-8 h-full w-full">
        <BreadcrumbBar breadcrumbs={breadsrumbItems} />
        <Reports reports={reports} />
        
      </div>
    );
  }
  