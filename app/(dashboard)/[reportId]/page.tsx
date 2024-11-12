import { Report } from "@/components/report";
import { BreadcrumbBar } from "@/components/breadcrumb";
import { fetchReport } from "@/actions/reportsActions";
import { IReport } from "@/types/reportTypes";
// import { Suspense } from 'react';


export default async function ReportPage({ params }: { params: { reportId: string } }){

  const report: IReport = await fetchReport(params.reportId)

  const breadsrumbItems = [
    {
      label: "Dashboard",
      href: "/",
      active: false,
    },
    {
      label: `Report-id: ${params.reportId} : ${report.test_suite_name || "NA"}`,
      href: `/${params.reportId}`,
      active: true,
    },
  ];

    
    return (
        <div className="p-8 h-full w-full">
        <BreadcrumbBar breadcrumbs={breadsrumbItems} />

            <Report report={report}/>
        </div>
    )
}