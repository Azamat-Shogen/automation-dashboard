"use client";
import { IReport } from "@/types/reportTypes";
import Link from "next/link";

export const Reports = ({ reports }: {
    reports: IReport[]
}) => {

    console.log(reports.length)

    return (
        <div>
            <h1>Reports...</h1>
            {reports.map((report) => (
               <div key={report.id}>
               <Link href={`/${report.id}`}>
                 {report.id}
               </Link>
             </div>
            ))}
        </div>
    )
}