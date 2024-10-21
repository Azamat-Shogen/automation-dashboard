"use client";
import { IReport } from "@/types/reportTypes";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table"
import { Badge } from "./ui/badge";
import { EyeIcon } from "lucide-react";


export const formatTime = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split("-");

  const fomrattedTime = `${hours}h ${minutes}m ${seconds}s`;
  return fomrattedTime;
}

export const Reports = ({ reports }: {
    reports: IReport[]
}) => {

    console.log(reports)

    return (
        <Card className="md:m-8">
            <CardHeader>
            <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
            <Table>
            <TableHeader>
            <TableRow>
                        <TableHead>Test suite name</TableHead>
                        <TableHead>Total tests</TableHead>
                        <TableHead className="hidden md:table-cell">Passed</TableHead>
                        <TableHead className="hidden md:table-cell"> Failed</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Duration
                        </TableHead>
                        <TableHead>
                          {/* <span className="sr-only">Actions</span> */}
                          View
                        </TableHead>
                      </TableRow>
            </TableHeader>
            <TableBody>
            {reports.map((report) => (
               <TableRow key={report.id}>
                <TableCell className="font-medium">
                 {report.test_suite_name}
               </TableCell>
               <TableCell>{report.tests.length}</TableCell>
               <TableCell className="hidden md:table-cell">
                <p className="text-green-600 font-bold">3</p>
               </TableCell>
               <TableCell className="hidden md:table-cell">
               <p className="text-red-600 font-bold">3</p>
               </TableCell>

               <TableCell>
                            <Badge
                              variant={
                                "BLOCKED" === "BLOCKED"
                                  ? "destructive"
                                  : "success"
                              }
                            >
                              {report.result_status}
                            </Badge>
                          </TableCell>
               <TableCell className="hidden md:table-cell">{formatTime(report.total_time)}</TableCell>

             
               <TableCell className="font-medium">
                  <Link href={`/${report.id}`}>
                  <EyeIcon className="text-blue-500 transition-transform duration-300 ease-in-out transform hover:text-blue-700 hover:scale-110" />
                  </Link>
               </TableCell>
               
               </TableRow>
            
            ))}
            </TableBody>
            </Table>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}