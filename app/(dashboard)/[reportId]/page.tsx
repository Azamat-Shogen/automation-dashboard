import { Report } from "@/components/report";
import { BreadcrumbBar } from "@/components/breadcrumb";
import { fetchReport } from "@/actions/reportsActions";
// import { Suspense } from 'react';


export default async function ReportPage({ params }: { params: { reportId: string } }){

  const breadsrumbItems = [
    {
      label: "Dashboard",
      href: "/",
      active: false,
    },
    {
      label: `Report_ID: ${params.reportId}`,
      href: `/${params.reportId}`,
      active: true,
    },
  ];
  

    const report = await fetchReport(params.reportId)

    return (
        <div className="p-8 h-full w-full">
        <BreadcrumbBar breadcrumbs={breadsrumbItems} />

            <Report report={report}/>
        </div>
    )
}