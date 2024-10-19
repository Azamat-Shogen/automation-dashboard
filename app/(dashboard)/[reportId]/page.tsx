import { Report } from "@/components/report";
// import { Suspense } from 'react';


async function fetchReport(reportId: string) {

  const URL = process.env.API_ENDPOINT_RESULTS as string;
  const res = await fetch(`${URL}/${reportId}`);

  if (!res.ok){
    throw new Error("Failed to fetch data");
  }

  return await res.json();

}


export default async function ReportPage({ params }: { params: { reportId: string } }){

    const report = await fetchReport(params.reportId)

    return (
        <div>
            <Report reportId={params.reportId}/>
        </div>
    )
}